<template>
  <nav class="nav whitespace-nowrap">
    <ul class="flex gap-[50px] lg:gap-[30px]">
      <li v-for="link in props.links">
        <NuxtLink class="relative" :to="link.to">{{ link.label }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const props = defineProps({
  links: {
    type: Array,
    required: true,
  },
})
</script>

<style lang="sass">
.nav
	a
		&.router-link-active
			+helvm
			&::before
				transform: scaleX(1)

		&:hover
			&::before
				transform: scaleX(1)
		&::before
			content: ""
			position: absolute
			left: 0
			right: 0
			bottom: -5px
			height: 1px
			background-color: $light
			transition: transform 0.2s ease
			transform: scaleX(0)
</style>
