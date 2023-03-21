<template>
  <header
    :class="computedHeaderClasses"
    v-if="!isAgentPage"
    class="header h-[93px] xl:justify-between z-[35] xl:px-[80px] lg:px-[50px] sm:w-full sm:left-0 xsm:h-[80px] xsm:px-[25px] md:px-[50px] px-[80px] md:w-[calc(100%-40px)] w-[calc(100%-40px)] flex fixed items-center md:h-[100px] md:right-0 md:left-[20px] left-[20px] right-[100px]"
  >
    <Logo
      class="flex-grow z-[2] md:flex-grow-0 md:flex-shrink-0 xl:basis-auto tracking-[-0.6px] md:tracking-[1px] flex-shrink basis-[0%]"
    ></Logo>
    <HeaderNav :links="links" class="flex-grow z-[2] flex justify-center md:hidden"></HeaderNav>
    <HeaderLangSwitcher
      class="flex-grow z-[2] xsm:hidden md:flex-grow-0 md:mr-[39px] md:flex-shrink-0 md:justify-start md:ml-auto xl:basis-auto justify-end flex flex-shrink basis-[0%]"
    ></HeaderLangSwitcher>
    <HeaderGamb class="z-[2] xsm:ml-auto"></HeaderGamb>
    <TransitionFullSlideDown>
      <HeaderMobileMenu
        :class="{
          'bg-dark-600 ': isHeaderLeft,
          'bg-dark z-[-1] border-t-[1px] border-solid border-dark-500': !isHeaderLeft,
        }"
        :links="links"
      ></HeaderMobileMenu>
    </TransitionFullSlideDown>
  </header>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useGlobalStore } from "~~/store/global";
const store = useGlobalStore();
const { locale } = useI18n();
const route = useRoute();
const { ruNavigationLinks, enNavigationLinks } = store;
let { activeLangSwitcher } = storeToRefs(store);
let links = computed(() => {
  if (locale.value == "ru") return ruNavigationLinks;
  if (locale.value == "en") return enNavigationLinks;
  return ruNavigationLinks;
});
const OFFSET_TOP = 20;

let isHeaderLeft = ref(false);
let isScrollingDown = ref(true);

let isAgentPage = computed(() => {
  return route.path == "/agent/" || route.path == "/agentform/" || route.path == "/agentsuccess/";
});

watch(
  () => isScrollingDown.value,
  () => {
    if (isScrollingDown.value) {
      activeLangSwitcher.value = false;
    }
  }
);

let computedHeaderClasses = computed(() => {
  return {
    "scrolling-down": isScrollingDown.value,
    "scrolling-up": !isScrollingDown.value,
    "header-left": isHeaderLeft.value,
    "header-not-left": !isHeaderLeft.value,
  };
});
let lastScrollTop = ref(0);

let handleScroll = () => {
  let scrollTop = window.pageYOffset;
  if (scrollTop > OFFSET_TOP) {
    isHeaderLeft.value = true;
  } else {
    isHeaderLeft.value = false;
  }
  if (scrollTop > lastScrollTop.value) {
    isScrollingDown.value = true;
  } else {
    isScrollingDown.value = false;
  }
  lastScrollTop.value = scrollTop <= 0 ? 0 : scrollTop;
};

onMounted(() => {
  handleScroll();
  window.addEventListener("scroll", handleScroll);
});
</script>

<style lang="sass">
.header
	transition: background .3s ease, top .3s ease, transform .3s ease
	&::before
		content: ""
		position: absolute
		top: 0
		left: 0
		right: 0
		bottom: 0
		transition: all 0.3s ease-in-out
		z-index: 2
	&.scrolling-down
		top: 0
		transform: translateY(calc(-100% - 20px))
		+r(991)
			transform: translateY(-100%)
	&.scrolling-up
		top: 0
		transform: translateY(0%)
		&::before
			background-color: $dark200
			box-shadow: 0px 0px 10px rgba(0,0,0,0.5)
	nav
		ul
			+r(1440)
				zoom: 0.9

	&.header-left
		&::before
			+r(991)
				background-color: $dark200
		+r(991)
			// background-color: $dark200
			top: 0

	&.header-not-left
		// background: transparent !important
		top: 20px
		+r(1440)
			top: 17px
		&::before
			background: transparent
			box-shadow: 0px 0px 10px rgba(0,0,0,0)

			+r(991)
				background-color: $dark
		+r(991)
			// background-color: $dark
			top: 0
</style>
