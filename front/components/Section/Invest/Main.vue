<template>
  <section
    class="invest z-[5] md:overflow-hidden sm:rounded-t-[44px] rounded-t-[70px] md:pl-[33px] xsm:pl-[0px] rounded-b-none relative bg-light text-dark-300"
  >
    <div class="container">
      <div
        class="invest-content sm:mb-[-46px] md:flex md:items-center md:text-center md:flex-col max-w-[50%] md:max-w-full xsm:max-w-full xsm:text-center"
      >
        <h2
          class="font-Euroblack text-[58px] leading-[0.96] md:text-[46px] md:text-center sm:text-[30px] lil:text-[26px] uppercase tracking-[-2px] invest-title mb-[28px] xsm:mb-[27px]"
        >
          {{ wpData.main_page.invest_title[locale] }}
        </h2>
        <p
          class="section-desc sm:text-[16px] md:text-center sm:text-left text-left invest-desc mb-[31px] md:mb-[28px] xsm:mb-[41px]"
          v-html="wpData.main_page.invest_text[locale]"
        ></p>
        <NuxtLink to="/invest/" class="xsm:max-w-[340px] xsm:w-full">
          <TheButton
            class="w-[330px] z-[3] btn-primary__light white sm:h-[70px] h-[79px] md:w-[339px] gap-[9px] xsm:w-full text-light"
          >
            <SvgMoneyIcon class="sm:w-[18px] sm:h-[13px]" fill="white"></SvgMoneyIcon>
            <span class="text-[16px] lil:text-[14px] sm:text-[18px] tracking-[0.3px] relative top-[1px]">{{
              $t("mainPageInvest.btnText")
            }}</span>
          </TheButton>
        </NuxtLink>
      </div>
      <div
        class="invest-img sm:static sm:mx-auto sm:ml-[38px] absolute bottom-0 xsm:w-[95%] left-[47.6%] sm:bottom-[30px] sm:left-[40%] md:w-[70%] xsm:left-[12.5%] md:left-[35.5%]"
      >
        <img :src="'/img/index/invest-arrow.png'" alt="" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { useWordpressStore } from "~~/store/wordpressStore";

const { locale } = useI18n();
const wpStore = useWordpressStore();
const wpData = wpStore.wpData;
</script>

<style lang="sass"></style>
