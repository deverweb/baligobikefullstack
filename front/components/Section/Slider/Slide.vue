<template>
  <div
    class="bike bg-light h-[auto] xsm:px-[31px] xsm:pr-[30px] xsm:pb-[31px] pb-[39px] pt-[33px] xsm:pt-[25px] px-[40px] rounded-[26px] xsm:rounded-[20px] flex flex-col lg:max-w-[440px] lg:mx-auto"
  >
    <div
      class="bike-title text-dark-300 xsm:tracking-[-0.2px] lil:text-[18px] font-Helvbold uppercase text-[28px] xsm:text-[22px]"
    >
      {{ props.bikeName }}
    </div>

    <div class="bike-img flex items-center mt-auto mb-[40px] h-[300px] md:h-[280px] xsm:h-[260px] xsm:mb-[23px]">
      <img class="object-contain h-full mx-auto max-w-full ml-[-5px]" :src="props.imgSrc" alt="" />
    </div>
    <div class="bike-rates mb-[35px] grid-cols-2 grid auto-rows-[1fr]">
      <div class="bike-rate pt-[12px] pb-[15px] text-[#111111]" v-for="rate in props.rates">
        <div v-if="rate.isMonthly" class="bike-rate-dates font-Helvmed opacity-50 text-[16px]">
          {{ locale == "ru" ? "Ежемесячно" : "Monthly" }}
        </div>
        <div v-else class="bike-rate-dates font-Helvmed opacity-50 text-[16px]">
          <div v-if="rate.minDays == 1">{{ rate.maxDays }} {{ locale == "ru" ? "дня" : "days" }}</div>
          <div v-else>{{ rate.minDays }} - {{ rate.maxDays }} {{ locale == "ru" ? "дней" : "days" }}</div>
        </div>
        <div class="bike-rate-usd mb-[-3px] font-Helvbold text-[20px]" v-if="!rate.isFixed">
          {{ rate.dayPriceRUP / 1000 }}K IDR {{ !rate.isMonthly ? (locale == "ru" ? "/ день" : "/ day") : "" }}
        </div>
        <div class="bike-rate-usd mb-[-3px] font-Helvbold text-[20px]" v-if="rate.isFixed">
          {{ rate.dayPriceRUP / 1000 }}K IDR / {{ locale == "ru" ? "фикс." : "fixed" }}
        </div>
        <!-- <div class="bike-rate-rup font-Helvmed mb-[3px] text-[14px]">
          {{ rate.dayPriceRUP }} {{ locale == "ru" ? "рупий" : "RP" }}
        </div> -->
        <!-- <div class="bike-rate-discount opacity-50 text-[12px] font-Helvmed">
          {{ locale == "ru" ? "Старая цена:" : "Old price:" }}
          <span v-if="!rate.isMonthly" class="line-through">
            {{ (rate.dayPriceUSD * ((100 + props.discount) / 100)).toFixed(0) }}$ /
            {{ locale == "ru" ? "день" : "day" }}
          </span>
          <span v-if="rate.isMonthly" class="line-through">
            {{ (rate.dayPriceUSD * ((100 + props.discount) / 100)).toFixed(0) }}$ /
            {{ locale == "ru" ? "месяц" : "month" }}
          </span>
        </div> -->
      </div>
    </div>
    <div class="bike-bottom flex items-center justify-between">
      <TheButton
        @click="handleBikeClick"
        class="h-[70px] btn-primary btn-primary__light white xsm:text-[12px] lil:mr-[8px] lil:text-[10px] lil:gap-[6px] xsm:h-[54px] xsm:w-full xsm:mr-[25px] gap-[11px] w-[250px] px-0 py-0 text-[16px] font-Helvmed text-light"
      >
        <SvgCalendarIcon class="flex-shrink-0 w-[19px] xsm:w-[13px]"></SvgCalendarIcon>
        <span class="xsm:tracking-[-0.2px] xsm:top-0 relative top-[1px]">{{ $t("buttonBooking") }}</span>
      </TheButton>
      <button
        @click="handleDetailsClick(props.id)"
        class="bike-detailed font-Helvmed text-center text-[14px] xsm:text-[10px] xsm:tracking-[0.6px]"
      >
        {{ $t("buttonLearnMore") }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { useCommercialStore } from "~~/store/commercial";
import { useGlobalStore } from "~~/store/global";
import { useIndexFormStore } from "~~/store/indexform";

const { locale } = useI18n();

const props = defineProps({
  id: String,
  bikeName: String,
  imgSrc: String,
  description: String,
  rates: Array,
  discount: Number,
});
// const rates = ref(props.rates.filter((val, i) => i != 0));
const indexFormStore = useIndexFormStore();
const commercialStore = useCommercialStore();
const globalStore = useGlobalStore();

const handleDetailsClick = (bikeId) => {
  globalStore.setActiveBikeModal(bikeId);
};
console.log(props);
const handleBikeClick = (event) => {
  indexFormStore.changeSelectedOption(commercialStore.bikeModelsArray.find((val) => val.id == props.id));

  document.querySelector(".order ").scrollIntoView({ behavior: "smooth" });
};
</script>

<style lang="sass">

.bike
	box-shadow: 0px 5px 40px rgba(0, 0, 0, 0.07)
	+r(600)
		box-shadow: 0px 3.86364px 30.9091px rgba(0, 0, 0, 0.07)
	&-rates
		border-top: 1px solid #e0e0e0
	&-rate
		border-bottom: 1px solid #E0E0E0
		// &:not(:nth-child(1)), &:not(:nth-child(2))

		&:nth-child(even)
			padding-left: 20px

		&:nth-child(odd)
			border-right: 1px solid #E0E0E0
			padding-right: 15px

	&-detailed
		position: relative
		color: #AAAAAA
		&::before
			position: absolute
			content: ""
			bottom: -5px
			left: 0
			right: 0
			height: 1px
			background-color: #AAAAAA
			+r(600)
				bottom: -7px
</style>
