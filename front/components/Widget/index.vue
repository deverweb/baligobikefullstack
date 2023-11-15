<template>
  <div ref="$widget" class="wg z-[10]" :class="{ 'z-[40] active': isActiveWidget }" v-if="!isOrder">
    <button class="wg-circle" @click="isActiveWidget = !isActiveWidget">
      <SvgCalendarIcon class="w-[18px] h-[18px] xsm:w-[15px] xsm:h-[15px]" :fill="'white'"></SvgCalendarIcon>
    </button>
    <Transition name="widget">
      <form @submit="onSubmit" class="wg-table flex flex-col" v-show="isActiveWidget">
        <div
          class="wg-head h-[72px] flex items-center justify-center grow-0 shrink-0 tracking-[-0.5px] xsm:rounded-none rounded-t-[12px]"
        >
          <span>{{ $t("mainPageForm.title") }}</span>
          <button
            @click="isActiveWidget = !isActiveWidget"
            class="wg-head-close w-[50px] h-[50px] sm:w-[40px] sm:h-[40px] hidden sm:flex rounded-full bg-white items-center justify-center"
          >
            <SvgCloseIcon class="hiddem sm:block" fill="#30B21B"></SvgCloseIcon>
          </button>
        </div>
        <div class="wg-list grow px-[30px] bg-light">
          <SectionCustomDatePicker
            transition="widget-date"
            styleType="widget"
            :name="'date'"
            class="dp__widget-form"
            defaultLabel="Модель байка"
          >
          </SectionCustomDatePicker>
          <SectionCustomSelectField
            name="bike"
            :options="commercialStore.bikeModelsArray"
            class="cs__widget-form"
            :styleType="'widget'"
            :defaultLabel="bikeDefaultLabel"
          >
            <SvgBikeIcon :fill="'black'"></SvgBikeIcon>
          </SectionCustomSelectField>
          <SectionCustomTextField
            type="string"
            class="ci__widget-form"
            :name="'client_name'"
            :placeholder="namePlaceholder"
          >
            <SvgPersonIcon opacity="1" fill="#111111"></SvgPersonIcon>
          </SectionCustomTextField>

          <SectionCustomPhoneField :prefered-countries="['ID', 'RU', 'UA']" type="widget" name="client_phone">
            <SvgWhatsappIcon class="w-[18px]" fill="#111111"></SvgWhatsappIcon>
          </SectionCustomPhoneField>
        </div>
        <div
          class="wg-bottom grow-0 h-[130px] shrink-0 py-[30px] bg-light rounded-b-[12px] flex items-center justify-center"
        >
          <TheButton :loading="loading" class="w-[292px] btn-primary__light h-[70px] text-[16px]">
            <span>{{ btnText }}</span>
          </TheButton>
        </div>
      </form>
    </Transition>
  </div>
</template>

<script setup>
import { useForm } from "vee-validate";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCommercialStore } from "~~/store/commercial";
import { useFormStore } from "~~/store/form";

import { useWordpressStore } from "~~/store/wordpressStore";
const wpStore = useWordpressStore();
const wpData = wpStore.wpData;
let { locale } = useI18n();
gsap.registerPlugin(ScrollTrigger);
let loading = ref(false);
let commercialStore = useCommercialStore();
let formStore = useFormStore();
let router = useRouter();
let route = useRoute();

let $widget = ref(null);

let bikeDefaultLabel = computed(() => {
  if (locale.value == "ru") {
    return "Модель байка";
  }
  if (locale.value == "eng") return "Bike Model";
});

let namePlaceholder = computed(() => {
  if (locale.value == "ru") {
    return "Ваше Имя";
  }
  if (locale.value == "eng") return "Your Name";
});

let btnText = computed(() => {
  if (locale.value == "ru") {
    return "Оформление заказа";
  }
  if (locale.value == "eng") return "Checkout";
});

const formatDate = (date, addTime) => {
  const day = date.getDate().toString().padStart(2, "0"); // добавляем ведущий ноль, если день меньше 10
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // добавляем ведущий ноль, если месяц меньше 10
  const year = date.getFullYear().toString();
  if (addTime) {
    const hours = date.getUTCHours().toString().padStart(2, "0"); // добавляем ведущий ноль, если час меньше 10
    const minutes = date.getUTCMinutes().toString().padStart(2, "0"); // добавляем ведущий ноль, если минуты меньше 10
    const seconds = date.getUTCSeconds().toString().padStart(2, "0"); // добавляем ведущий ноль, если секунды меньше 10

    const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}:${seconds} UTC`;
    return formattedDate;
  } else {
    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
  }
};

// let formvalues = useStorage("formvalues");
const { handleSubmit } = useForm();
const onSubmit = handleSubmit(async (values, { resetForm }) => {
  loading.value = true;
  formStore.fillForm(values);
  let data = await commercialStore.smallFormOrder({
    order_date: formatDate(new Date(), true),
    client_name: values.client_name,
    client_messenger: " +" + values.client_phone.substring(1),
    order_date_start: formatDate(new Date(formStore.dates.start)),
    order_date_end: formatDate(new Date(formStore.dates.end)),
    bike_choice: values.bike.name,
  });
  loading.value = data.loading;

  let phone = wpData.common.contacts_wa_forms;
  let urlString;
  let urlStringRu = `https://wa.me/${phone}?text=

	Имя%20клиента:%20${encodeURIComponent(values.client_name)}%0A
	Номер%20:%20${encodeURIComponent(values.client_phone)}%0A
	Дата%20начала%20аренды:%20${encodeURIComponent(formatDate(values.date.start))}%0A
	Дата%20окончания%20аренды:%20${encodeURIComponent(formatDate(values.date.end))}%0A
	Выбранная%20модель%20байка:%20${encodeURIComponent(values.bike.name)}%0A
	
	`;
  let urlStringEng = `https://wa.me/${phone}?text=
 
	Client%20name:%20${encodeURIComponent(values.client_name)}%0A
	Client%20phone:%20${encodeURIComponent(values.client_phone)}%0A
	Order%20date%20start:%20${encodeURIComponent(formatDate(values.date.start))}%0A
	Order%20date%20end:%20${encodeURIComponent(formatDate(values.date.end))}%0A
	Bike:%20${encodeURIComponent(values.bike.name)}%0A
	
	`;
  if (locale.value == "ru") urlString = urlStringRu;
  if (locale.value == "eng") urlString = urlStringEng;
  window.open(urlString, "_blank");

  resetForm();
  // router.push({ path: "/order/" });
});

onMounted(() => {
  window.addEventListener("scroll", handleWidgetActive);
});

router.afterEach(() => {
  isActiveWidget.value = false;
});

let isActiveWidget = ref(false);

let handleWidgetActive = (evt) => {
  isActiveWidget.value = false;
  window.removeEventListener("scroll", handleWidgetActive);
};

onUnmounted(() => {
  window.removeEventListener("scroll", handleWidgetActive);
});

watch(
  () => isActiveWidget.value,
  () => {
    if (isActiveWidget.value) {
      document.body.classList.add("active-widget");
    } else {
      document.body.classList.remove("active-widget");
    }
  }
);
let isOrder = computed(() => {
  return (
    route.path == "/order/" ||
    route.path == "/payment/" ||
    route.path == "/invest/" ||
    route.path == "/agentform/" ||
    route.path == "/agent/" ||
    route.path == "/agentsuccess/"
  );
});
</script>

<style lang="sass">
.widget-enter-active,
.widget-leave-active
	transition: all 0.2s ease


.widget-enter-from,
.widget-leave-to
	opacity: 0
	transform: translateY(20px)
.wg
	position: fixed
	// right: 100px
	// bottom: 80px
	right: 27px
	bottom: 105px
	// position: sticky
	// right: 100px
	// bottom: 140px
	// top: 0
	// right: 100px
	// margin-left: auto
	+r(1200)
		// right: 70px

		right: 29px
		bottom: 50px
		bottom: 105px
	+r(990)
		// right: 50px
		bottom: 105px

		right: 27px
	+r(600)
		right: 25px
		bottom: 25px
		right: 30px
		bottom: 105px
	&-circle
		width: 60px
		height: 60px
		border-radius: 50%
		display: flex
		justify-content: center
		align-items: center
		background: $green
		box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25)
		transition: transform 0.2s ease
		+r(768)
			width: 50px
			height: 50px
		&:active
			transform: scale(0.8)
	&-table
		position: absolute
		bottom: calc(100% + 35px)
		right: 50%
		width: 353px
		max-height: 507px
		box-shadow: 0px 5px 40px rgba(0, 0, 0, 0.07)
		+r(768)
			right: 0
			top: 0
			width: auto
			left: 0
			max-height: initial
			position: fixed
			box-shadow: none
			height: 100%
	&-head
		height: 72px
		text-align: center
		color: $light
		display: flex
		align-items: center
		justify-content: center
		+eu
		text-transform: uppercase
		font-size: 16px
		background-color: $dark500
		+r(768)
			justify-content: space-between
			width: 100%
			padding: 0 20px
</style>
