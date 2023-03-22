<template>
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>
<script setup>
import { useGlobalStore } from "./store/global";
import { useCommercialStore } from "~~/store/commercial";
const { locale } = useI18n();
const nuxtApp = useNuxtApp();

const store = useGlobalStore();
const commersialStore = useCommercialStore();
commersialStore.fillData();

nuxtApp.hook("page:finish", () => {
  store.activeMobileMenu = false;
  // window.scrollTo(0, 0)
});

console.log("PROCESS ENV", process.env);
console.log("PROCESS ENV DOC_ID", process.env.DOC_ID);

onMounted(async () => {
  if (process.client && window) {
    window.history.scrollRestoration = "auto";
  }
});

useHead({
  htmlAttrs: {
    lang: locale.value,
  },
});

watch(
  () => locale.value,
  () => {
    useHead({
      htmlAttrs: {
        lang: locale.value,
      },
    });
  }
);

// useHead({
//   script: [
//     {
//       src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAqNPzsf4Ee-OuexRYSOddBXzMHQnHuxME&libraries=places",
//       async: true,
//       defer: true,
//     },
//   ],
// });
</script>

<style lang="sass">

.page-enter-active,
.page-leave-active
	transition: 0.3s all ease-in-out

.page-enter-from,
.page-leave-to
	opacity: 0
	filter: blur(.2rem)
</style>
