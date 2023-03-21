<template>
  <section class="min-h-screen rounded-t-[70px] md:rounded-t-[44px] text-light bg-[#202020]">
    <div class="container text-center">
      <h1 class="font-Euroblack text-[62px] leading-[60px] tracking-[-0.6px] uppercase">Заказ успешно оформлен</h1>
      <p class="mb-[58px]">
        Вы успешно забронировали байк на указанные даты. Ожидайте сообщения менеджера BaliGo для дальнейших инструкций!
      </p>
      <NuxtLink to="/">
        <TheButton class="btn-primary__dark w-[300px] h-[70px]">
          <span>Вернуться на сайт</span>
        </TheButton>
      </NuxtLink>
      <hr class="w-[50%] h-[2px]" />
    </div>
  </section>
</template>

<script setup>
import { useFormStore } from "~~/store/form";

const formStore = useFormStore();

onMounted(() => {
  formStore.resetData();
});
</script>

<style lang="sass"></style>
