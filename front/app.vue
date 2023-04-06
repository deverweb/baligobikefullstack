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
let config = useRuntimeConfig();
if (config) {
  console.log(config);
} else {
  console.log("no process env");
}
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
