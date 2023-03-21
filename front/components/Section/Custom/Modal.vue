<template>
  <div @click="handleModalClick" class="V_MODAL" :class="{ V_MODAL_ACTIVE: props.active }">
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  active: {
    default: false,
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["disable"]);

const handleModalClick = (event) => {
  if (event.target.classList.contains("V_MODAL")) {
    emit("disable");
  }
};
</script>

<style lang="sass">

.V_MODAL
	position: fixed
	display: none
	place-items: center
	top: 0
	left: 0
	right: 0
	bottom: 0
	min-height: 100vh
	overflow-x: hidden
	overflow-y: auto
	background: rgba(black, 0.7)
	&_ACTIVE
		display: grid
		z-index: 1000
</style>
