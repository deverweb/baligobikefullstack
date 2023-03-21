<template>
  <div class="gamb hidden md:block" @click="activeMobileMenu = !activeMobileMenu">
    <button :class="{ active: activeMobileMenu }" class="bg-green gamb-btn rounded-full w-[58px] h-[60px] sm:w-[50px] sm:h-[50px]"><span></span><span></span></button>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia"
import { useGlobalStore } from "~~/store/global"

let store = useGlobalStore()

let { activeMobileMenu } = storeToRefs(store)
</script>

<style lang="sass">

.gamb
	.router-link-active
		color: $green
	&-btn
		transition: 0.2s all ease
		position: relative
		&:active
			transform: scale(0.9)
		span
			border: none
			width: 21px
			height: 2px
			background-color: white
			position: absolute
			transition: 0.2s ease all
			left: 50%
			transform: translate(-50%, 0)
			+r(768)
				width: 18px
				height: 2px
			&:first-child
				top: 25px
				+r(768)
					top: 20px

			&:last-child
				top: 34px
				+r(768)
					top: 28px
		&.active
			background: white
			span
				background: $green
				&:first-child
					transform: translate(-50%, 0%) rotate(45deg)
					top: 30px
					+r(768)
						top: 24px
				&:last-child
					transform: translate(-50%, 0%) rotate(-45deg)
					top: 30px
					+r(768)
						top: 24px
</style>
