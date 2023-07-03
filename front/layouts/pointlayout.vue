<template>
  <div
    class="layout point-layout p-[20px] sm:pb-0 md:pt-[40px] sm:pt-[20px] relative sm:px-0 bg-dark flex flex-col min-h-screen text-light text-[18px] font-Helvreg"
  >
    <slot></slot>
  </div>
</template>

<script setup>
const { locale } = useI18n();

locale.value = "eng";
</script>

<style lang="sass">
.point-layout
	#__replain_widget
		opacity: 0
		visibility: hidden
		pointer-events: none
</style>
