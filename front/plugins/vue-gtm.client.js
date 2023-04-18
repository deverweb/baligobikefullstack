import { createGtm } from "@gtm-support/vue-gtm";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(
    createGtm({
      id: "GTM-KS3FNZS", // PROD
      // id: "GTM-NFTQCJ9", // DEV
      defer: false,
      compatibility: false,
      enabled: true,
      debug: false,
      loadScript: true,
      vueRouter: useRouter(),
      trackOnNextTick: false,
    })
  );
});
