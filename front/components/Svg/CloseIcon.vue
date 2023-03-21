<template>
  <svg
    width="19"
    height="19"
    viewBox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 16.9741L16.9741 2.00005"
      :stroke="props.fill"
      stroke-width="2.49136"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17.0002 16.9741L2.02617 2.00005"
      :stroke="props.fill"
      stroke-width="2.49136"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script setup>
const props = defineProps({
  fill: {
    type: String,
    default: "#FBFBFD",
  },
});
</script>

<style lang="sass"></style>
