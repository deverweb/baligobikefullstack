<template>
  <section class="pt-[123px] pb-[245px] md:pb-[195px] xsm:pb-[155px] md:pt-[93px] sm:pt-[76px]">
    <h2
      class="max-w-[800px] sm:text-[32px] md:text-[46px] sm:mb-[20px] md:mb-[25px] leading-[0.96] font-Euroblack tracking-[-1.75px] text-[58px] xsm:max-w-full sm:max-w-[90%] md:max-w-[60%] mx-auto mb-[30px] text-light text-center"
    >
      {{ wpData.how_title[locale] }}
    </h2>
    <p
      v-html="wpData.how_subtitle[locale]"
      class="text-center sm:text-[14px] lil:text-[12px] max-w-[650px] md:text-[16px] md:mb-[44px] mb-[54px] mx-auto leading-[1.25]"
    ></p>

    <SectionCustomCards :blocks="indexSixBlocks"></SectionCustomCards>
  </section>
</template>

<script setup>
import { useWordpressStore } from "~~/store/wordpressStore";

const { locale } = useI18n();
const wpStore = useWordpressStore();

const wpData = wpStore.wpData.main_page;

const translate = (ruStr, engStr) => {
  return locale.value == "ru" ? ruStr : engStr;
};
const indexSixBlocks = computed(() => {
  if (locale.value == "ru") return ruBlocks;
  if (locale.value == "eng") return engBlocks;
  return ruBlocks;
});
let ruBlocks = wpData.how_cards.map((item) => {
  if (item.text.hasOwnProperty("ru")) {
    return {
      title: item.title.ru,
      text: item.text.ru,
    };
  }
});
let engBlocks = wpData.how_cards.map((item) => {
  if (item.text.hasOwnProperty("eng")) {
    return {
      title: item.title.eng,
      text: item.text.eng,
    };
  }
});
// const ruBlocks = [
//   {
//     title: "Выбираете байк и дату",
//     text: "Широкий выбор дизайна байков",
//   },
//   {
//     title: "Выбираете место доставки и возврата",
//     text: "бесплатная доставка байка",
//   },
//   {
//     title: "Бронируете и оплачиваете",
//     text: "множество способов оплаты",
//   },
// ];
// const enBlocks = [
//   {
//     title: "Choose bike and date.",
//     text: "Wide range of bike designs",
//   },
//   {
//     title: "Choose the place of delivery and return",
//     text: "Bike free shipping",
//   },
//   {
//     title: "Book and pay",
//     text: "Many payment methods",
//   },
// ];
</script>

<style lang="sass"></style>
