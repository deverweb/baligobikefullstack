<template>
  <Transition name="full-slide-down">
    <slot></slot>
  </Transition>
</template>

<script setup></script>

<style lang="sass">

.full-slide-down-enter-active,
.full-slide-down-leave-active
	transition: transform 0.4s ease, opacity 0.4s ease


.full-slide-down-enter-from,
.full-slide-down-leave-to
	// opacity: 0
	transform: translateY(-100%)
</style>
