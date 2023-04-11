<template>
  <div class="lel">
    <SectionIndexOffer></SectionIndexOffer>
    <SectionIndexCardsBlock></SectionIndexCardsBlock>
    <SectionIndexSlider></SectionIndexSlider>
    <SectionIndexForm></SectionIndexForm>
    <SectionIndexProfits></SectionIndexProfits>
    <SectionIndexFaq></SectionIndexFaq>
    <SectionIndexInvest></SectionIndexInvest>
    <SectionIndexContacts></SectionIndexContacts>
  </div>
</template>

<script setup>
const { locale } = useI18n();
const computedTitle = computed(() => {
  switch (locale.value) {
    case "ru":
      return "Аренда байков на Бали - Baligo.bike. Сервис №1 по аренде байков";
    case "en":
      return "Bike rental in Bali - Baligo.bike. The №1 service for bike rental";
    default:
      break;
  }
});

const computedDescription = computed(() => {
  switch (locale.value) {
    case "ru":
      return "Лучшие условия для аренды байка на Бали предлагает компания Baligo.Bike. У нас только новые байки, полная страховка. Удобные варианты оплаты. Обратившись к нам. Звоните";
    case "en":
      return "Baligo.Bike offers the best conditions for bike rental in Bali. We only have new bikes with full insurance coverage. Convenient payment options are available. Contact us by phone.";
    default:
      break;
  }
});

useHead({
  title: () => computedTitle.value,
  meta: [{ name: "description", content: () => computedDescription.value }],
  link: [
    {
      rel: "canonical",
      href: "https://baligo.bike",
    },
  ],
});
</script>

<style lang="sass"></style>
