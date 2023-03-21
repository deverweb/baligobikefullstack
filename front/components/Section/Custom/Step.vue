<template>
  <div class="order-number flex sm:items-start items-center sm:pl-0 pl-[2px]">
    <div class="order-number-circle text-[14px] sm:text-[11px] flex-shrink-0 rounded-full flex sm:mr-[15px] mr-[30px] sm:w-[25px] sm:h-[25px] items-center justify-center w-[32px] h-[32px] bg-green text-light">
      {{ props.number }}
    </div>
    <div class="order-number-text sm:relative sm:top-[2px] sm:leading-[1.27] sm:text-[16px] font-Helvmed">
      {{ props.text }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  number: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
})
</script>

<style lang="sass"></style>
