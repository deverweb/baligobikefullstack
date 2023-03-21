<template>
  <div
    class="offer px-[80px] xsm:px-[25px] md:px-[50px] lg:px-[30px] md:pb-[28px] pb-[50px] xsm:min-h-[470px] md:min-h-[650px] rounded-t-[70px] sm:rounded-t-[44px] xsm:h-[calc(100vh-80px)] md:h-[calc(100vh-100px)] h-[calc(100vh-20px)] bg-center bg-cover"
  >
    <div class="offer-inner flex flex-col xsm:pb-0 xsm:justify-center justify-end pb-[130px] h-full">
      <h1
        v-html="$t('mainPageFirst.title')"
        class="offer-title xsm:leading-[1.08] mb-[48px] xsm:mb-[38px] md:mb-[45px] xsm:tracking-[-1.6px] xsm:text-[calc(var(--index)*3)] sm:text-[calc(var(--index)*4)] max-w-[70%] xl:max-w-[80%] tracking-[-2.6px] md:max-w-none md:leading-[1] md:text-[72px] text-[82px] font-Euroblack uppercase leading-[0.96]"
      ></h1>
      <div class="offer-block sm:flex-col">
        <div class="offer-social xsm:flex-col xsm:gap-[20px] xsm:items-start flex items-center gap-[76px]">
          <ul class="offer-social-text pl-[35px] xsm:pl-[28px] list-disc flex flex-col gap-[16px] sm:text-[18px] text-[24px]">
            <li>{{ $t("mainPageFirst.social.onlyNewBike") }}</li>
            <li>{{ $t("mainPageFirst.social.insurance") }}</li>
          </ul>
          <div class="offer-social-links flex gap-[23px] xsm:mt-[15px] xsm:mb-[13px]">
            <a href="https://wa.me/+6281337413060">
              <SvgIndexWaIcon></SvgIndexWaIcon>
            </a>
            <a href="https://t.me/baligobike">
              <SvgIndexTgIcon></SvgIndexTgIcon>
            </a>
          </div>
        </div>
        <TheButton @click="handleOfferClick" class="btn-primary__blur hidden md:mt-[35px] md:flex mr-[30px] xsm:h-[70px] xsm:max-w-[340px] xsm:w-full sm:mr-0 gap-[9px] text-[18px] w-[300px] h-[82px]">
          <SvgCalendarIcon></SvgCalendarIcon>
          <span>{{ $t("mainPageFirst.button") }}</span>
        </TheButton>
      </div>
    </div>
  </div>
</template>

<script setup>
const handleOfferClick = () => {
  document.querySelector(".order ").scrollIntoView({ behavior: "smooth" })
}
</script>

<style lang="sass" scoped>
.offer
	background: linear-gradient(216.14deg,transparent 50.79%,#000 107.31%), url('/img/index/offer-bg.png') no-repeat left / cover
	+r(991)
		background: linear-gradient(217.85deg, rgba(0, 0, 0, 0) 48.32%, #000000 84.52%), url('/img/index/offer-bg.png') no-repeat left / cover
	+r(768)
		background: linear-gradient(216.14deg, rgba(0, 0, 0, 0) 16.88%, #000000 81.14%), url('/img/index/offer-bg.png') left bottom / cover
</style>
