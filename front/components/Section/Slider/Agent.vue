<template>
  <section
    class="catalog z-[1] relative md:pb-[50px] xsm:pb-[37px] sm:flex sm:flex-col pb-[79px] xsm:flex xsm:flex-col bg-dark-300 text-dark"
  >
    <div class="container">
      <div class="catalog-wrapper mb-[24px] xsm:mb-0 xsm:relative">
        <div
          class="catalog-drag xsm:flex hidden justify-end xsm:max-h-[35px] xsm:absolute xsm:right-0 xsm:bottom-[-38px]"
        >
          <SvgDragAnim class="max-h-full"></SvgDragAnim>
        </div>
      </div>
    </div>

    <div
      class="catalog-arrows pointer-events-none sm:w-full w-[90%] sm:self-center translate-y-[-50%] translate-x-[-50%] left-[50%] gap-[0px] absolute top-[47%] md:top-[35%] justify-between flex select-none z-[2]"
    >
      <div class="catalog-arrows-prev pointer-events-auto cursor-pointer">
        <svg
          width="160"
          class="w-[135px] md:w-[100px] xsm:w-[60px]"
          height="160"
          viewBox="0 0 160 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_1451_814)">
            <circle cx="80" cy="76" r="50" fill="#30B21B" />
          </g>
          <path d="M84 62L70 76L84 90" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          <defs>
            <filter
              id="filter0_d_1451_814"
              x="0"
              y="0"
              width="160"
              height="160"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="15" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1451_814" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1451_814" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
      <div class="catalog-arrows-next pointer-events-auto cursor-pointer">
        <svg
          class="w-[135px] md:w-[100px] xsm:w-[60px]"
          width="160"
          height="160"
          viewBox="0 0 160 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_1451_815)">
            <circle cx="80" cy="76" r="50" transform="rotate(-180 80 76)" fill="#30B21B" />
          </g>
          <path d="M76 90L90 76L76 62" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          <defs>
            <filter
              id="filter0_d_1451_815"
              x="0"
              y="0"
              width="160"
              height="160"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="15" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1451_815" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1451_815" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>

    <div class="catalog-bikes bikes lg:gap-[36px] lg:grid-cols-1" v-if="store.bikeModelsArray">
      <Swiper
        class=""
        :modules="[Navigation]"
        :navigation="{
          nextEl: '.catalog-arrows-next',
          prevEl: '.catalog-arrows-prev',
        }"
        :loop="true"
        :centeredSlides="true"
        :slides-per-view="'auto'"
        :space-between="24"
        :breakpoints="{
          769: {},
          990: {},
          1600: {},
        }"
      >
        <SwiperSlide class="max-w-[440px] xsm:max-w-[340px] xsm:w-[100%]" v-for="(bike, i) in store.bikeModelsArray">
          <SectionSliderSlide
            :data-index="('slide= ', i)"
            :bikeName="bike.name"
            :imgSrc="bike.img"
            :id="bike.id"
            :rates="bike.rates"
            :discount="bike.discount"
          >
          </SectionSliderSlide>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup>
// import "swiper/css"
import { Navigation } from "swiper";
import { useCommercialStore } from "~~/store/commercial";

let store = useCommercialStore();
</script>

<style lang="sass">
.catalog
	.swiper-slide
		height: auto
	.swiper-wrapper
		padding-top: 40px
		+r(990)
			padding-bottom: 40px
		+r(600)
			padding-top: 44px
			padding-bottom: 43px
	&.agent
		&::before
			content: ""
			display: none
	&::before
		content: ""
		width: 100%
		position: absolute
		left: 0
		right: 0
		height: calc(80% + 102px)
		top: -121px
		background-color: $light
		z-index: -1
		border-radius: 70px
		+r(1201)
			height: calc(100% - 100px)
		+r(991)
			top: -93px
			height: calc(100% + 93px)
		+r(600)
			top: -75px
			height: calc(100% + 50px)
</style>
