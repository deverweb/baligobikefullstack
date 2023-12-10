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
        <h1 class="mb-[25px] text-[20px]">1. Переход в whatsapp(туда должно передасться имя), который не работает</h1>
        <form @submit="onSubmit" class="form">
          <div class="max-w-[460px] lg:mx-auto lg:text-left">
            <SectionCustomTextField
              type="string"
              class="ci__index-form mb-[10px]"
              :name="'client_name'"
              :placeholder="namePlaceholder"
            >
              <SvgPersonIcon opacity="1" fill="#111111"></SvgPersonIcon>
            </SectionCustomTextField>
            <TheButton
              type="submit"
              class="w-[460px] btn-primary__dark black sm:w-full sm:max-w-full h-[70px] gap-[9px]"
            >
              <SvgCalendarIcon></SvgCalendarIcon>
              <span class="relative top-[1px] sm:text-[14px]">Перейти в whatsapp с написанным именем</span>
            </TheButton>
          </div>
        </form>
      </div>
      <hr class="sm:my-[40px] opacity-10 w-full my-[50px] h-[2px] bg-light" />
      <div class="second-step">
        <h1 class="mb-[25px] text-[20px]">2. Переход просто на google.com</h1>
        <div class="form">
          <div class="max-w-[360px] lg:mx-auto lg:text-left">
            <a target="_blank" href="https://www.google.com">
              <TheButton
                type="submit"
                class="w-[360px] btn-primary__dark black sm:w-full sm:max-w-full h-[70px] gap-[9px]"
              >
                <SvgCalendarIcon></SvgCalendarIcon>
                <span class="relative top-[1px] sm:text-[14px]">Google.com</span>
              </TheButton></a
            >
          </div>
        </div>
      </div>
      <hr class="sm:my-[40px] opacity-10 w-full my-[50px] h-[2px] bg-light" />
      <div class="third-step">
        <h1 class="mb-[25px] text-[20px]">3. Переход в whatsapp по другому</h1>
        <div class="form">
          <div class="max-w-[360px] lg:mx-auto lg:text-left">
            <a target="_blank" href="https://wa.me/79878025217?text=Здравствуйте.">
              <TheButton
                type="submit"
                class="w-[360px] btn-primary__dark black sm:w-full sm:max-w-full h-[70px] gap-[9px]"
              >
                <SvgCalendarIcon></SvgCalendarIcon>
                <span class="relative top-[1px] sm:text-[14px]">Whatsapp с текстом "Здравствуйте"</span>
              </TheButton></a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useForm } from "vee-validate";
import { useWordpressStore } from "~~/store/wordpressStore";

let { locale } = useI18n();
const { handleSubmit } = useForm();
let namePlaceholder = ref("placeholder");
let wpStore = useWordpressStore();
let wpData = wpStore.wpData;
let urlStringEng = ref("");
let urlStringRu = ref("");
const onSubmit = handleSubmit(async (values, { resetForm }) => {
  // loading.value = true;
  // formStore.fillForm(values);
  // let data = await commercialStore.smallFormOrder({
  // order_date: formatDate(new Date(), true),
  // client_name: values.client_name,
  // client_messenger: " +" + values.client_phone.substring(1),
  // order_date_start: formatDate(values.date.start),
  // order_date_end: formatDate(values.date.end),
  // bike_choice: values.bike.name,
  // });
  let phone = "+79878025217";
  let urlString;

  let urlStringRu = `https://wa.me/${phone}?text=

	Имя%20клиента:%20${encodeURIComponent(values.client_name)}%0A
	
	`;
  let urlStringEng = `https://wa.me/${phone}?text=
 
	Client%20name:%20${encodeURIComponent(values.client_name)}%0A
	
	`;
  if (locale.value == "ru") urlString = urlStringRu;
  if (locale.value == "eng") urlString = urlStringEng;
  window.open(urlString, "_blank");
  resetForm();
  // router.push({ path: "/order/" });
});
</script>

<style lang="sass"></style>
