<template>
  <main class="px-[80px] sm:px-[40px] rounded-t-[70px] flex flex-col min-h-screen bg-dark-700 py-[40px] lg:px-[50px]">
    <div class="point-head">
      <Logo class="point-logo"></Logo>
    </div>
    <div class="point-body pt-[200px] sm:pt-[100px] sm:flex-col flex gap-[10px] flex-wrap">
      <a class="xxsm:w-full" :href="'https://t.me/baligobike'"
        ><TheButton
          class="btn-primary__blue sm:w-full xsm:rounded-[8px] xxsm:w-full pr-[22px] xsm:pr-[11px] xsm:h-[66px] xsm:text-[16px] w-[250px] gap-[10px] h-[70px]"
        >
          <SvgTelegramIcon
            class="h-[18px] w-[22px] xsm:w-[14px] xsm:h-[12px]"
            opacity="1"
            fill="#FBFBFD"
          ></SvgTelegramIcon>
          <span>Telegram</span>
        </TheButton>
      </a>
      <a class="xxsm:w-full" :href="'https://wa.me/+6281337413060'"
        ><TheButton
          class="btn-primary__dark sm:w-full xsm:rounded-[8px] xxsm:w-full pr-[22px] xsm:pr-[11px] xsm:h-[66px] xsm:text-[16px] w-[250px] gap-[10px] h-[70px]"
        >
          <SvgWhatsappIcon
            class="h-[18px] w-[22px] xsm:w-[14px] xsm:h-[12px]"
            opacity="1"
            fill="#FBFBFD"
          ></SvgWhatsappIcon>
          <span>Whatsapp</span>
        </TheButton>
      </a>
      <a class="xxsm:w-full" :href="'https://baligo.bike/'"
        ><TheButton
          class="btn-primary__dark sm:w-full xsm:rounded-[8px] xxsm:w-full pr-[22px] xsm:pr-[11px] xsm:h-[66px] xsm:text-[16px] w-[250px] gap-[10px] h-[70px]"
        >
          <span>Main page</span>
        </TheButton>
      </a>
      <a class="xxsm:w-full" :href="'https://baligo.bike/contacts/'"
        ><TheButton
          class="btn-primary__dark sm:w-full xsm:rounded-[8px] xxsm:w-full pr-[22px] xsm:pr-[11px] xsm:h-[66px] xsm:text-[16px] w-[250px] gap-[10px] h-[70px]"
        >
          <span>Contacts</span>
        </TheButton>
      </a>
    </div>
  </main>
</template>

<script setup>
definePageMeta({
  layout: "pointlayout",
});
</script>

<style lang="sass">
.point
	&-logo
		pointer-events: none
</style>
