<template>
  <div class="lang relative">
    <button class="lang-switcher flex items-center" @click="store.activeLangSwitcher = !store.activeLangSwitcher">
      <SvgWorldIcon class="opacity-30 mr-[10px]"></SvgWorldIcon>
      <span class="uppercase mr-[10px] w-[25px] leading-[1]">{{ localeString }}</span>
      <SvgArrowDownIcon class="transition" :class="{ 'rotate-180': store.activeLangSwitcher }"></SvgArrowDownIcon>
    </button>
    <TransitionSlideDown>
      <div
        class="lang-list z-[2] absolute top-[calc(100%+15px)] right-[5px] text-[16px] rounded-[13px] pt-[20px] pb-[12px] w-[240px] bg-dark-200"
        v-show="store.activeLangSwitcher"
      >
        <ul>
          <li
            @click="store.switchLang(lang)"
            :class="{ 'bg-dark-400 font-Helvmed': lang.code == locale }"
            class="h-[44px] cursor-pointer pl-[24px] transition hover:bg-dark-400 flex items-center"
            v-for="lang in locales"
          >
            {{ lang.name }}
          </li>
        </ul>
      </div>
    </TransitionSlideDown>
  </div>
</template>

<script setup>
import { useGlobalStore } from "~~/store/global";
const { locale, locales } = useI18n();
let store = useGlobalStore();

const localeString = computed(() => {
  if (locale.value == "eng") return "EN";
  else {
    return "RU";
  }
});
</script>

<style lang="sass"></style>
