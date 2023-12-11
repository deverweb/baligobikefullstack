<template>
  <div
    class="test min-h-screen bg-dark-300 sm:pb-[80px] pb-[135px] rounded-t-[70px] sm:pt-[65px] sm:rounded-t-[44px] md:pt-[95px] pt-[210px]"
  >
    <div class="steps md:px-[30px] px-[80px] flex-col flex items-start">
      <h1 class="mb-[40px] md:text-[20px] text-[30px] max-w-[600px]">
        Перед этим необходимо включить функцию всплывающих окон на iphone, если она выключена
      </h1>
      <hr class="sm:my-[20px] opacity-10 w-full my-[30px] h-[2px] bg-light" />
      <div class="first-step">
        <form @submit="onSubmit0" class="form">
          <div class="max-w-[460px] lg:mx-auto lg:text-left">
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
            <TheButton
              type="submit"
              class="w-[460px] btn-primary__dark black sm:w-full sm:max-w-full h-[70px] gap-[9px]"
            >
              <SvgCalendarIcon></SvgCalendarIcon>
              <span class="relative top-[1px] sm:text-[14px]">Без commercialStore</span>
            </TheButton>
          </div>
        </form>
        <hr class="sm:my-[40px] opacity-10 w-full my-[50px] h-[2px] bg-light" />
        <h1 class="mb-[25px] text-[20px]">1. Переход в whatsapp(туда должно передасться имя), который не работает</h1>
        <form @submit="onSubmit" class="form">
          <div class="max-w-[460px] lg:mx-auto lg:text-left">
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
            <TheButton
              type="submit"
              class="w-[460px] btn-primary__dark black sm:w-full sm:max-w-full h-[70px] gap-[9px]"
            >
              <SvgCalendarIcon></SvgCalendarIcon>
              <span class="relative top-[1px] sm:text-[14px]">store не юзает useFetch, return false</span>
            </TheButton>
          </div>
        </form>
        <hr class="sm:my-[40px] opacity-10 w-full my-[50px] h-[2px] bg-light" />
        <form @submit="onSubmit2" class="form">
          <div class="max-w-[460px] lg:mx-auto lg:text-left">
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
            <TheButton
              type="submit"
              class="w-[460px] btn-primary__dark black sm:w-full sm:max-w-full h-[70px] gap-[9px]"
            >
              <SvgCalendarIcon></SvgCalendarIcon>
              <span class="relative top-[1px] sm:text-[14px]">Пустой docs.js блок smallform2</span>
            </TheButton>
          </div>
        </form>
        <hr class="sm:my-[40px] opacity-10 w-full my-[50px] h-[2px] bg-light" />
        <form @submit="onSubmit3" class="form">
          <div class="max-w-[460px] lg:mx-auto lg:text-left">
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
            <TheButton
              type="submit"
              class="w-[460px] btn-primary__dark black sm:w-full sm:max-w-full h-[70px] gap-[9px]"
            >
              <SvgCalendarIcon></SvgCalendarIcon>
              <span class="relative top-[1px] sm:text-[14px]">Все нормально кроме того что убрал await в docs.js</span>
            </TheButton>
          </div>
        </form>
      </div>
      <hr class="sm:my-[40px] opacity-10 w-full my-[50px] h-[2px] bg-light" />
    </div>
  </div>
</template>

<script setup>
import { useForm } from "vee-validate";
import { useWordpressStore } from "~~/store/wordpressStore";
import { useCommercialStore } from "~~/store/commercial";
import { useFormStore } from "~~/store/form";
import { useIndexFormStore } from "~~/store/indexform";
const router = useRouter();
const commercialStore = useCommercialStore();
const formStore = useFormStore();
const indexFormStore = useIndexFormStore();
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
let namePlaceholder = computed(() => {
  if (locale.value == "ru") return "Ваше Имя";
  if (locale.value == "eng") return "Your Name";
});

let bikePlaceholder = computed(() => {
  if (locale.value == "ru") return "Модель байка";
  if (locale.value == "eng") return "Bike model";
});
let { locale } = useI18n();
const { handleSubmit } = useForm();
let wpStore = useWordpressStore();
let wpData = wpStore.wpData;

let phone = "+79878025217";
const onSubmit0 = handleSubmit(async (values, { resetForm }) => {
  // loading.value = true;
  formStore.fillForm(values);
  // await commercialStore.smallFormOrder({
  //   order_date: formatDate(new Date(), true),
  //   client_name: values.client_name,
  //   client_messenger: " +" + values.client_phone.substring(1),
  //   order_date_start: formatDate(values.date.start),
  //   order_date_end: formatDate(values.date.end),
  //   bike_choice: values.bike.name,
  // });

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
  // resetForm();
  // router.push({ path: "/order/" });
});
const onSubmit = handleSubmit(async (values, { resetForm }) => {
  // loading.value = true;
  formStore.fillForm(values);
  await commercialStore.smallFormOrder({
    order_date: formatDate(new Date(), true),
    client_name: values.client_name,
    client_messenger: " +" + values.client_phone.substring(1),
    order_date_start: formatDate(values.date.start),
    order_date_end: formatDate(values.date.end),
    bike_choice: values.bike.name,
  });

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
  // resetForm();
  // router.push({ path: "/order/" });
});
const onSubmit2 = handleSubmit(async (values, { resetForm }) => {
  // loading.value = true;
  // formStore.fillForm(values);
  await commercialStore.smallFormOrder2({
    order_date: formatDate(new Date(), true),
    client_name: values.client_name,
    client_messenger: " +" + values.client_phone.substring(1),
    order_date_start: formatDate(values.date.start),
    order_date_end: formatDate(values.date.end),
    bike_choice: values.bike.name,
  });

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
  // resetForm();
  // router.push({ path: "/order/" });
});
const onSubmit3 = handleSubmit(async (values, { resetForm }) => {
  // loading.value = true;
  // formStore.fillForm(values);
  await commercialStore.smallFormOrder3({
    order_date: formatDate(new Date(), true),
    client_name: values.client_name,
    client_messenger: " +" + values.client_phone.substring(1),
    order_date_start: formatDate(values.date.start),
    order_date_end: formatDate(values.date.end),
    bike_choice: values.bike.name,
  });

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
  // resetForm();
  // router.push({ path: "/order/" });
});
</script>

<style lang="sass"></style>
