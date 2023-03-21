<template>
  <svg
    width="17"
    height="15"
    viewBox="0 0 17 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      :opacity="props.opacity"
      d="M15.6199 0.164168L0.558719 6.05745C-0.0473645 6.33188 -0.252363 6.8815 0.412202 7.17976L4.27608 8.4257L13.6184 2.56717C14.1284 2.19937 14.6507 2.29745 14.2013 2.70203L6.17755 10.0737L5.92549 13.1934C6.15895 13.6751 6.58642 13.6773 6.85907 13.4379L9.07898 11.3066L12.8809 14.1954C13.7639 14.7258 14.2444 14.3835 14.4344 13.4113L16.9281 1.42972C17.187 0.232947 16.7455 -0.294351 15.6199 0.164168Z"
      :fill="props.fill"
    />
  </svg>
</template>

<script setup>
const props = defineProps({
  fill: {
    type: String,
    default: "#FBFBFD",
  },
  opacity: {
    type: String,
    default: "0.3",
  },
});
</script>

<style lang="sass"></style>
