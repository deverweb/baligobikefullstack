<template>
  <button :disabled="props.loading" :class="{ 'select-none pointer-events-none ': props.loading }" class="btn-primary relative flex items-center justify-center rounded-[12px]">
    <div class="btn-primary-loading grid place-items-center" v-if="props.loading">
      <svg class="spinner" viewBox="0 0 50 50">
        <circle class="path" cx="25" cy="25" r="20" stroke="white" fill="none" stroke-width="5"></circle>
      </svg>
    </div>
    <slot v-else></slot>
  </button>
</template>

<script setup>
const props = defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
})
</script>

<style lang="sass">

.btn-primary
	transition: all 0.2s ease
	background-color: $green
	border: 1px solid transparent
	svg, path
		transition: all 0.2s ease
	&__blue
		background-color: #20A0E1
		&:hover
			background-color: transparent
			color: $light
			border: 1px solid #20A0E1
	&__dark
		&:hover
			background-color: transparent
			color: $light
			border: 1px solid $light
	&__light
		&:hover
			background-color: $light
			color: $dark
			border: 1px solid $dark
			svg
				// stroke: $dark300
				fill: $dark300
				path
					// stroke: $dark300
					fill: $dark300
	&__blur
		color: $light
		border: 1px solid $green
		&:hover
			border: 1px solid $light
			background-color: rgba($green, 0)
			backdrop-filter: blur(4px)
	.spinner
		animation: rotate 2s linear infinite
		z-index: 2
		width: 30px
		height: 30px
		.path
			stroke: white
			stroke-linecap: round
			animation: dash 1.5s ease-in-out infinite




@keyframes rotate
	100%
		transform: rotate(360deg)



@keyframes dash
	0%
		stroke-dasharray: 1, 150
		stroke-dashoffset: 0

	50%
		stroke-dasharray: 90, 150
		stroke-dashoffset: -35

	100%
		stroke-dasharray: 90, 150
		stroke-dashoffset: -124
</style>
