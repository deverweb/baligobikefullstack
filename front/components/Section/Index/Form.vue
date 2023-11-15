<template>
  <section
    class="order relative z-[7] rounded-b-[70px] sm:rounded-b-[44px] bg-dark-300 py-[151px] lg:pb-[71px] lg:pt-[94px] sm:pt-[50px] text-light"
  >
    <div class="container items-start justify-between flex lg:flex-col lg:items-center lg:text-center">
      <div class="order-content sm:mb-[78px] max-w-[52%] lg:mb-[46px] lg:max-w-full">
        <h2
          ref="formEl"
          class="section-title xsm:text-[26px] order-title mb-[29px] sm:mb-[22px] lg:mb-[26px] lg:max-w-[70%] lg:mx-auto md:max-w-max"
        >
          {{ wpData.main_page.form_title[locale] }}
        </h2>
        <p
          id="orderbike"
          class="section-desc mb-[49px] sm:max-w-full lg:mb-[51px] sm:mb-[41px] max-w-[380px] lg:mx-auto"
        >
          {{ wpData.main_page.form_subtitle[locale] }}
        </p>
        <form @submit="onSubmit" class="form">
          <div class="max-w-[360px] lg:mx-auto lg:text-left">
            <SectionCustomDatePicker
              name="date"
              styleType="index"
              transition="slide-right"
              class="mb-[10px] dp__index-form"
            >
            </SectionCustomDatePicker>
            <SectionCustomSelectField
              :styleType="'index'"
              class="mb-[10px] cs__index-form"
              transition="widget-date"
              :active="formData.bikeField.active"
              v-model:selectedOption="indexFormStore.selectedOption"
              :name="formData.bikeField.name"
              :defaultLabel="bikePlaceholder"
              :options="commercialStore.bikeModelsArray"
            >
              <SvgBikeIcon></SvgBikeIcon>
            </SectionCustomSelectField>
            <SectionCustomTextField
              type="string"
              class="ci__index-form mb-[10px]"
              :name="'client_name'"
              :placeholder="namePlaceholder"
            >
              <SvgPersonIcon opacity="1" fill="#111111"></SvgPersonIcon>
            </SectionCustomTextField>

            <SectionCustomPhoneField
              class="mb-[10px]"
              :prefered-countries="['ID', 'RU', 'UA']"
              type="index"
              name="client_phone"
            >
              <SvgWhatsappIcon class="w-[18px]" fill="#111111"></SvgWhatsappIcon>
            </SectionCustomPhoneField>
            <SectionCustomSelectField
              v-if="false"
              :styleType="'index-form'"
              class="mb-[10px] cs__index-form"
              :active="formData.surfField.active"
              :name="formData.surfField.name"
              :defaultLabel="formData.surfField.defaultLabel"
              :options="commercialStore.surfBoards"
            >
              <SvgSurfIcon></SvgSurfIcon>
            </SectionCustomSelectField>
            <TheButton
              type="submit"
              :loading="loading"
              class="w-[360px] btn-primary__dark black sm:w-full sm:max-w-full h-[70px] gap-[9px]"
            >
              <SvgCalendarIcon></SvgCalendarIcon>
              <span class="relative top-[1px]">{{ $t("buttonBooking") }}</span>
            </TheButton>
          </div>
        </form>
      </div>
      <div class="orderbike max-w-[48%] relative md:max-w-[80%] md:mx-auto">
        <img class="object-contain max-w-full" :src="bikeImageSrc" alt="" />
        <SectionIndexFormTooltip
          class="left-[9.4%] top-[29.5%] sm:left-[13.6%] sm:top-[12.1%]"
          :tooltip="tooltips.first"
        ></SectionIndexFormTooltip>
        <SectionIndexFormTooltip
          class="left-[48.3%] top-[33.4%] sm:left-[73.6%] sm:top-[18.6%]"
          :tooltip="tooltips.second"
        ></SectionIndexFormTooltip>
        <SectionIndexFormTooltip
          class="left-[-0.7%] top-[61.5%] sm:top-[49.4%] sm:left-[35%]"
          :tooltip="tooltips.third"
        ></SectionIndexFormTooltip>
        <SectionIndexFormTooltip
          class="left-[41.2%] top-[59.6%] sm:left-[66.6%] sm:top-[60.2%]"
          :tooltip="tooltips.fourth"
        ></SectionIndexFormTooltip>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useForm } from "vee-validate";
import { useCommercialStore } from "~~/store/commercial";
import { useFormStore } from "~~/store/form";
import { useIndexFormStore } from "~~/store/indexform";
import { useWordpressStore } from "~~/store/wordpressStore";
let { locale } = useI18n();
const { handleSubmit } = useForm();
const router = useRouter();
const commercialStore = useCommercialStore();
const formStore = useFormStore();
const indexFormStore = useIndexFormStore();
const wpStore = useWordpressStore();
const wpData = wpStore.wpData;
let loading = ref(false);
let namePlaceholder = computed(() => {
  if (locale.value == "ru") return "Ваше Имя";
  if (locale.value == "eng") return "Your Name";
});

let bikePlaceholder = computed(() => {
  if (locale.value == "ru") return "Модель байка";
  if (locale.value == "eng") return "Bike model";
});

const formData = ref({
  phone: "",
  bikeField: {
    defaultLabel: "Модель байка",
    name: "bike",
  },
  surfField: {
    defaultLabel: "Модель сёрфа",
    name: "surfboard",
  },
  date: {
    name: "date",
    defaultLabel: "Выберите дату",
    active: false,
  },
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
const onSubmit = handleSubmit(async (values, { resetForm }) => {
  loading.value = true;
  formStore.fillForm(values);
  let data = await commercialStore.smallFormOrder({
    order_date: formatDate(new Date(), true),
    client_name: values.client_name,
    client_messenger: " +" + values.client_phone.substring(1),
    order_date_start: formatDate(values.date.start),
    order_date_end: formatDate(values.date.end),
    bike_choice: values.bike.name,
  });
  loading.value = false;
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

const bikeImageSrc = "/img/index/order-bike.png";
const tooltips = {
  first: {
    info: "Все байки оборудованы держателем для телефона или камеры",
    svg: "/svg/camera.svg",
  },
  second: {
    info: "Все байки оборудованы держателем для телефона или камеры",
    svg: "/svg/umbrella.svg",
  },
  third: {
    info: "Все байки оборудованы держателем для телефона или камеры",
    svg: "/svg/wrench.svg",
  },
  fourth: {
    info: "Все байки оборудованы держателем для телефона или камеры",
    svg: "/svg/helmet.svg",
  },
};
</script>

<style lang="sass"></style>
