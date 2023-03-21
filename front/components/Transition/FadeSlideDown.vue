<template>
  <Transition name="fade-slide-down">
    <slot></slot>
  </Transition>
</template>

<script setup></script>

<style lang="sass">

.fade-slide-down-enter-active,
.fade-slide-down-leave-active
	transition: transform 0.3s ease, opacity 0.3s ease


.fade-slide-down-enter-from,
.fade-slide-down-leave-to
	opacity: 0
	transform: translateY(-25px)
</style>
