<template>
  <section class="min-h-[800px] rounded-t-[70px] flex items-center md:rounded-t-[44px] text-light bg-[#202020]">
    <div class="container text-center">
      <h1
        class="font-Euroblack sm:text-[30px] mb-[30px] sm:leading-[1] text-[62px] leading-[60px] tracking-[-0.6px] uppercase"
      >
        Order successfully completed
      </h1>
      <p class="mb-[58px] sm:text-[14px]">Application accepted for work</p>
      <NuxtLink class="flex justify-center" to="/agent/">
        <TheButton class="btn-primary__dark w-[300px] h-[70px]">
          <span>Comeback to Mainpage</span>
        </TheButton>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
const { locale } = useI18n();

locale.value = "eng";

definePageMeta({
  layout: "agent",
});
</script>

<style lang="sass"></style>
