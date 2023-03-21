<template>
  <Transition name="slide-down">
    <slot></slot>
  </Transition>
</template>

<script setup></script>

<style lang="sass">

.slide-down-enter-active,
.slide-down-leave-active
	transition: transform 0.2s ease, opacity 0.2s ease


.slide-down-enter-from,
.slide-down-leave-to
	opacity: 0
	transform: translateY(-25px)
</style>
