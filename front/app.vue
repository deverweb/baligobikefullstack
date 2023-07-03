<template>
  <NuxtLayout>
    <Transition name="fade-out">
      <div class="preloader" v-show="loading">
        <svg class="preloader__image" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            fill="currentColor"
            d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"
          ></path>
        </svg>
      </div>
    </Transition>

    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>
<script setup>
import { useGlobalStore } from "./store/global";
import { useCommercialStore } from "~~/store/commercial";
import { useWordpressStore } from "./store/wordpressStore";
const { locale } = useI18n();
const route = useRoute();
const wpStore = useWordpressStore();
const nuxtApp = useNuxtApp();
const store = useGlobalStore();
const commersialStore = useCommercialStore();

nuxtApp.hook("page:finish", () => {
  store.activeMobileMenu = false;

  // window.scrollTo(0, 0)
});
let loading = ref(true);
nuxtApp.hook("page:finish", () => {
  loading.value = false;
});

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
onMounted(() => {
  if (route.path == "/agent/") {
    document.body.classList.add("agent-layout");
  }
  if (route.path == "/point2/") {
    document.body.classList.add("point-layout");
  }
});

watch(
  () => route.path,
  () => {
    if (route.path == "/agent/" || route.path == "/agentform/" || route.path == "/agentsuccess/") {
      document.body.classList.add("agent-layout");
    } else {
      document.body.classList.remove("agent-layout");
    }
    if (route.path == "/point2/") {
      document.body.classList.add("point-layout");
    } else {
      document.body.classList.remove("point-layout");
    }
  }
);
wpStore.wpData = await wpStore.getData();
// console.log("wpData: ", wpStore.wpData);
await commersialStore.fillData(wpStore.wpData.bikes);
</script>

<style lang="sass">

.page-enter-active,
.page-leave-active
	transition: 0.3s all ease-in-out

.page-enter-from,
.page-leave-to
	opacity: 0
	filter: blur(.2rem)



.fade-out-enter-active,
.fade-out-leave-active
	transition: transform 0.2s ease, opacity 0.2s ease


.fade-out-enter-from,
.fade-out-leave-to
	opacity: 0
	transform: translateY(100%)


.preloader
	position: fixed
	left: 0
	top: 0
	right: 0
	bottom: 0
	overflow: hidden
	/* фоновый цвет */
	background: #171616
	z-index: 2147000001


.preloader__image
	position: relative
	top: 50%
	left: 50%
	width: 70px
	height: 70px
	margin-top: -35px
	margin-left: -35px
	text-align: center
	animation: preloader-rotate 2s infinite linear


@keyframes preloader-rotate
	100%
		transform: rotate(360deg)



.loaded_hiding .preloader
	transition: 0.3s opacity
	opacity: 0


.loaded .preloader
	display: none
</style>
