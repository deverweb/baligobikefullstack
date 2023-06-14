<template>
  <div
    class="layout agent-layout p-[20px] sm:pb-0 xsm:pt-[80px] md:pt-[100px] relative sm:px-0 bg-dark flex flex-col min-h-screen text-light text-[18px] font-Helvreg"
  >
    <slot></slot>
    <BikeModal></BikeModal>
  </div>
</template>

<script setup>
const { locale } = useI18n();

locale.value = "eng";
</script>

<style lang="sass">
.agent-layout
	#__replain_widget
		opacity: 0
		visibility: hidden
		pointer-events: none
</style>
