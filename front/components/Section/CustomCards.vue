<template>
  <div class="how">
    <div class="container">
      <div class="how-blocks flex flex-wrap md:grid justify-center gap-[24px] md:grid-cols-1 md:items-center sm:gap-[22px] md:gap-[29px]">
        <div
          v-for="(action, i) in props.blocks"
          :key="i"
          :class="action.text ? 'py-[36px] sm:pt-[29px] sm:pb-[40px]' : 'pt-[33px] pb-[30px] sm:pt-[29px] sm:pb-[36px]'"
          class="how-block rounded-[12px] bg-light flex flex-col items-center md:max-w-[440px] md:w-[100%] md:mx-auto"
        >
          <span class="how-block-num w-[32px] h-[32px] font-Helvbold rounded-full bg-green flex items-center justify-center text-[14px] text-light mb-[10px]">{{ `0${i + 1}` }}</span>
          <div class="how-block-title px-[15px] md:max-w-[100%] leading-[1.2] max-w-[80%] xl:max-w-[80%] sm:max-w-full text-center text-[22px] sm:text-[18px] text-dark font-Helvbold" :class="{ 'mb-[6px] md:mb-[10px]': action.text }">
            {{ action.title }}
          </div>
          <div v-if="action.text" v-html="action.text" class="how-block-text sm:max-w-[280px] md:max-w-[320px] text-[16px] sm:text-[14px] leading-[20px] sm:leading-[18px] max-w-[80%] lg:max-w-[90%] text-center text-dark"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  subtitleWidth: {
    type: Number,
    required: false,
    default: 370,
  },
  blocks: {
    type: Array,
    required: true,
  },
})
</script>

<style lang="sass">

.how-block
	position: relative
	flex-basis: calc(33% - 24px)
	&::before
		content: ""
		background-color: rgba($light, 0.3)
		position: absolute
		left: 100%
		top: 50%
		transform: translate(0, -50%)
		height: 1px
		width: 50%
		+r(990)
			height: 50%
			top: 100%
			left: 50%
			transform: translate(-50%, 0)
			width: 1px

	&:nth-child(3n)
		&::before
			display: none
			+r(990)
				display: block
	&:last-child
		&::before
			display: none
			+r(990)
</style>
