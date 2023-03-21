<template>
  <div :class="active ? 'z-[5]' : 'z-[4]'" class="tooltip absolute flex items-center justify-center rounded-full bg-light w-[52px] h-[52px] md:w-[39px] md:h-[39px]">
    <div class="tooltip-icon flex items-center justify-center w-full h-full" @mouseover="active = true" @mouseleave="active = false">
      <img :src="tooltip.svg" class="relative left-[-4.3%] bottom-[-3%] md:w-[20px]" alt="" />
      <SvgPlusIcon class="absolute top-[13px] right-[11px] md:w-[5px] md:right-[8px] md:top-[7px]"></SvgPlusIcon>
    </div>
    <Transition>
      <div
        v-show="active"
        class="tooltip-popup top-0 md:top-auto md:bottom-[110%] absolute w-[240px] md:w-[150px] md:text-[12px] md:leading-[1.3] md:px-[5px] md:py-[16px] rounded-[13px] bg-dark-200 py-[28px] pl-[24px] pr-[16px] text-[16px] text-light leading-[21px]"
      >
        <svg width="31" height="20" viewBox="0 0 31 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute top-0 max-w-full xsm:hidden">
          <path d="M31 20L-8.74228e-07 1.90735e-06L31 5.52296e-07L31 20Z" fill="#1E1E1E" />
        </svg>

        {{ tooltip.info }}
      </div>
    </Transition>
  </div>
</template>

<script setup>
let active = ref(false)

const props = defineProps({
  tooltip: {
    type: Object,
    required: true,
  },
})
</script>

<style lang="sass" scoped>
@mixin r($screenWidth)
	@media only screen and (max-width: $screenWidth + 'px')
		@content


@mixin rmin($screenWidth)
	@media only screen and (min-width: $screenWidth + 'px')
		@content
.v-enter-active,
.v-leave-active
	transition: transform 0.2s ease, opacity 0.2s ease


.v-enter-from,
.v-leave-to
	opacity: 0
	transform: translateX(-5px)
	z-index: 4
	+r(990)
		transform: translateY(10px)
.tooltip
	&-popup
		left: calc(100% + 18px)
		+r(769)
			left: initial
		svg
			left: calc(0% - 15px)
			+r(769)
				display: none
</style>
