<template>
  <main class="px-[80px] sm:px-[40px] rounded-t-[70px] flex flex-col min-h-screen bg-dark-700 py-[40px] lg:px-[50px]">
    <div class="point-head">
      <Logo class="point-logo"></Logo>
    </div>
    <div class="point-body pt-[200px] sm:pt-[100px] sm:flex-col flex gap-[10px] flex-wrap">
      <a v-for="btn in wpData.point_page.point_watg" class="xxsm:w-full" :href="btn.link"
        ><TheButton
          :class="{
            'btn-primary__dark': btn.btn == 'whatsapp',
            'btn-primary__blue': btn.btn == 'tg',
          }"
          class="btn-primary__dark xsm:rounded-[8px] xxsm:w-full pr-[22px] xsm:pr-[11px] xsm:w-full xsm:h-[66px] xsm:text-[16px] sm:w-full w-[250px] gap-[10px] h-[70px]"
        >
          <SvgTelegramIcon
            v-if="btn.btn == 'tg'"
            class="h-[18px] w-[22px] xsm:w-[14px] xsm:h-[12px]"
            opacity="1"
            fill="#FBFBFD"
          ></SvgTelegramIcon>
          <SvgWhatsappIcon v-if="btn.btn == 'whatsapp'" class="xsm:h-[14px] xsm:w-[14px]"></SvgWhatsappIcon>
          <span v-if="btn.btn == 'whatsapp'">WhatsApp</span>
          <span v-if="btn.btn == 'tg'">Telegram</span>
        </TheButton></a
      >
      <a v-for="link in wpData.point_page.point_links" class="xxsm:w-full" :href="link.link"
        ><TheButton
          class="btn-primary__dark sm:w-full xsm:rounded-[8px] xxsm:w-full pr-[22px] xsm:pr-[11px] xsm:h-[66px] xsm:text-[16px] w-[250px] gap-[10px] h-[70px]"
        >
          <span>{{ link.txt }}</span>
        </TheButton>
      </a>
    </div>
  </main>
</template>

<script setup>
import { useWordpressStore } from "~~/store/wordpressStore";

const wpStore = useWordpressStore();
const wpData = wpStore.wpData;

definePageMeta({
  layout: "pointlayout",
});
</script>

<style lang="sass">
.point
	&-logo
		pointer-events: none
</style>
