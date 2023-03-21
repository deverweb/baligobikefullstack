<template>
  <Transition name="bmodal">
    <div
      :class="{ 'z-[1000]': globalStore.activeBikeModal }"
      class="bmodal text-[#111111]"
      v-show="globalStore.activeBikeModal"
      v-if="globalStore.activeBikeModal"
      @click="handleOutsideClick"
    >
      <div class="bmodal-window relative flex justify-between md:flex-col">
        <div class="bmodal-top h-[57px] hidden xsm:flex justify-between items-center">
          <div class="text-dark tracking-[-0.6px] uppercase font-Euroblack text-[20px]">
            <span class="text-green">BALIGO.</span>BIKE
          </div>
          <button class="bmodal-close" @click="globalStore.activeBikeModal = false">
            <SvgCloseIcon class="w-[20px] h-[20px]" fill="#000000"></SvgCloseIcon>
          </button>
        </div>
        <button class="bmodal-close xsm:hidden" @click="globalStore.activeBikeModal = false">
          <SvgCloseIcon class="w-[20px] h-[20px]" fill="#000000"></SvgCloseIcon>
        </button>
        <div class="bmodal-left">
          <div class="bmodal-title xsm:order-1 hidden md:block text-center">
            {{ bike?.model }}
          </div>
          <div class="bmodal-price xsm:order-2 hidden md:block text-center">
            ({{ locale == "ru" ? "от" : "from" }} {{ bike.rates[3].dayPriceUSD }}$ /
            {{ locale == "ru" ? "день" : "day" }})
          </div>
          <div class="bmodal-img xsm:order-3">
            <img :src="bikeImg" class="max-w-[90%] h-[450px] xsm:h-full" alt="" />
          </div>
          <div class="bmodal-paint xsm:mb-[56px] xsm:order-4 hidden md:flex mb-[31px]">
            <SectionCustomRadioField
              @bikeImgChanged="handleRadioChange"
              type="bmodal"
              :showPrice="false"
              :bg="false"
              :name="'bikeValue'"
              :options="bike?.bikes"
            ></SectionCustomRadioField>
          </div>
          <p
            class="bmodal-description xsm:order-6 xsm:mb-[37px] mb-[45px] xsm:text-[14px] hidden md:flex flex-grow text-[16px] xsm:leading-[143%] leading-[125%]"
          >
            {{ locale == "ru" ? bike.ruDescription : bike.engDescription }}
          </p>
          <ul class="bmodal-list xsm:order-5 xsm:mb-[57px] md:mb-[43px]">
            <li>
              <span>{{ langObj.year }}:</span>
              <span>{{ bike.year }}</span>
            </li>
            <li v-if="bike.dry_weight">
              <span>{{ langObj.dry_weight }}:</span>
              <span>{{ bike.dry_weight }} {{ locale == "ru" ? "кг" : "kg" }}</span>
            </li>
            <li>
              <span>{{ langObj.trunk_volume }}:</span>
              <span>{{ bike.trunk_volume }} {{ langObj.liters }}</span>
            </li>
            <li>
              <span>{{ langObj.capacity }}:</span>
              <span>{{ bike.capacity }} {{ locale == "ru" ? "л.с." : "hp" }}</span>
            </li>
            <li>
              <span>{{ langObj.fuel_tank_volume }}:</span>
              <span>{{ bike.fuel_tank_volume }} {{ langObj.liters }}</span>
            </li>
            <li v-if="bike.average_consumption">
              <span>{{ langObj.average_consumption }}:</span>
              <span>{{ bike.average_consumption }} {{ langObj.fuel_tank_volume_second }}</span>
            </li>
          </ul>
        </div>
        <div class="bmodal-right flex flex-col">
          <div class="bmodal-title text-[#181818] md:hidden">
            {{ bike?.model }}
          </div>
          <div class="bmodal-price md:hidden">
            ({{ locale == "ru" ? "от" : "from" }} {{ bike.rates[3].dayPriceUSD }}$ /
            {{ locale == "ru" ? "день" : "day" }})
          </div>
          <div class="bmodal-paint md:hidden mb-[31px]">
            <SectionCustomRadioField
              @bikeImgChanged="handleRadioChange"
              type="bmodal"
              :showPrice="false"
              :bg="false"
              :name="'bikeValuePC'"
              :options="bike?.bikes"
            ></SectionCustomRadioField>
          </div>
          <p class="bmodal-description md:hidden flex-grow text-[16px] leading-[125%]">
            {{ locale == "ru" ? bike.ruDescription : bike.engDescription }}
          </p>
          <div class="bmodal-bottom xsm:flex-col flex gap-[26px] md:gap-[32px]">
            <TheButton
              @click="handleBron"
              class="btn-primary__light xsm:mb-[8px] self-end xsm:w-full gap-[11px] shrink-0 text-light hover:text-dark w-[250px] h-[70px]"
              ><SvgCalendarIcon class="w-[13px] h-[13px]"></SvgCalendarIcon>
              <span class="text-[16px]">{{ $t("buttonBooking") }}</span>
            </TheButton>
            <div class="bmodal-after text-[14px]">
              <span class="font-Helvbold">{{
                locale == "ru" ? "В стоимость аренды также входят:" : "The rental price also includes:"
              }}</span>
              <p class="font-Helvmed">
                {{
                  locale == "ru"
                    ? "полная страховка от повреждений и угона, шлемы, дождевик, аптечка, держатель для телефона."
                    : "full insurance against damage and theft, helmets, raincoat, first aid kit, phone holder."
                }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div></Transition
  >
</template>

<script setup>
import { useCommercialStore } from "~~/store/commercial";
import { useGlobalStore } from "~~/store/global";
import { useIndexFormStore } from "~~/store/indexform";
import { useFormStore } from "~~/store/form";

let { locale } = useI18n();

let commercialStore = useCommercialStore();
let formStore = useFormStore();
let globalStore = useGlobalStore();
let indexForm = useIndexFormStore();

const handleOutsideClick = (event) => {
  if (!event.target.closest(".bmodal-window")) {
    globalStore.activeBikeModal = false;
  } else return;
};
let img = ref("");
const handleRadioChange = (value) => {
  formStore.choosedDrawing = value.id;
  img.value = value.img;
};

const handleBron = () => {
  globalStore.activeBikeModal = false;
  indexForm.changeSelectedOption(bike.value);
  document.querySelector(".order ").scrollIntoView({ behavior: "smooth" });
};

const langObj = computed(() => {
  if (locale.value == "ru")
    return {
      year: "Год выпуска",
      trunk_volume: "Объем багажника",
      capacity: "Мощность",
      fuel_tank_volume: "Объем топливного бака",
      average_consumption: "Средний расход",
      dry_weight: "Сухой вес",
      liters: "Литров",
      fuel_tank_volume_second: "литров / 100 км",
    };
  if (locale.value == "en")
    return {
      year: "Year",
      trunk_volume: "Trunk volume",
      capacity: "Capacity",
      fuel_tank_volume: "Fuel tank volume",
      average_consumption: "Average consumption",
      dry_weight: "Dry weight",
      liters: "liters",
      fuel_tank_volume_second: "liters / 100 km",
    };
});

let bikeImg = computed(() => {
  if (!bike) return "";
  if (!img.value) return bike.value.img;
  return img.value;
});

let bike = computed(() => {
  return {
    ...commercialStore.bikeModelsArray.find((val) => {
      return val.id == globalStore.activeBikeId;
    }),
  };
});
watch(
  () => globalStore.activeBikeModal,
  () => {
    if (globalStore.activeBikeModal) {
      document.body.classList.add("active-bmodal");
    } else {
      document.body.classList.remove("active-bmodal");
      img.value = "";
    }
  }
);
</script>

<style lang="sass">
.bmodal
	position: fixed
	display: grid
	place-items: center
	top: 0
	left: 0
	right: 0
	bottom: 0
	min-height: 100vh
	overflow-x: hidden
	overflow-y: auto
	background: rgba(black, 0.7)
	padding: 127px
	+r(1600)
		padding: 80px
	+r(1440)
		padding: 50px
	+r(990)
		padding: 20px
	+r(600)
		padding: 0
	&-top
		border-bottom: 1px solid rgba(#333333, 0.2)
		padding-left: 25px
		padding-right: 39px
		padding-top: 3px
		background: white
		position: fixed
		top: 0
		left: 0
		right: 0

	&-left
		width: 44.2%
		display: flex
		flex-direction: column
		+r(990)
			width: 100%
		+r(600)
			padding-left: 25px
			padding-right: 25px
			padding-top: 25px
	&-right
		width: 50%
		padding-top: 4px
		+r(990)
			width: 100%
		+r(600)
			padding-left: 25px
			padding-right: 25px
	&-enter-active, &-leave-active
		transition: all 0.2s ease
		.bmodal
			transition: all 0.2s ease
			&-window
				transition: all 0.2s ease
	&-enter-from, &-leave-to
		opacity: 0


	&-list
		display: flex
		flex-direction: column
		row-gap: 8px
		li
			display: flex
			align-items: baseline
			white-space: nowrap
			justify-content: space-between
			color: #111111
			+helvm
			font-size: 14px
	&-window
		box-shadow: 0px 5px 40px rgba(0, 0, 0, 0.07)
		border-radius: 26px
		background-color: white
		padding: 60px
		min-height: 740px
		+r(1440)
			padding: 40px
		+r(990)
			min-height: initial
			padding: 50px
			padding-top: 55px
		+r(600)
			border-radius: 0px
			padding: 0
			padding-top: 58px
			padding-bottom: 30px

	&-img
		display: flex
		flex-grow: 1
		justify-content: center
		margin-bottom: 5px
		+r(990)
			height: 490px
		+r(600)
			height: 326px
		img
			object-fit: contain
	&-title
		+helvb
		font-size: 28px
		text-transform: uppercase
		margin-bottom: 3px
		+r(600)
			margin-bottom: -2px
	&-price
		+helvb
		margin-bottom: 36px
		letter-spacing: 0.1px
	&-close
		position: absolute
		right: 40px
		top: 40px
		+r(990)
			right: 49px
			top: 48px
		+r(600)
			position: static
</style>
