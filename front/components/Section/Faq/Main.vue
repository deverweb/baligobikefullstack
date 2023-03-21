<template>
  <div class="faq z-[5] rounded-b-[70px] sm:rounded-b-[44px] relative text-light">
    <div class="container">
      <div class="faq-questions grid grid-cols-2 gap-x-[20px] md:grid-cols-1 md:max-w-full md:w-full md:mx-auto">
        <div class="faq-questions-col gap-y-[10px] flex flex-col md:mb-[10px]">
          <SectionFaqQuestion v-for="(question, i) in props.questions.slice(0, Math.ceil(props.questions.length / 2))" :question="question"></SectionFaqQuestion>
        </div>
        <div class="faq-questions-col gap-y-[10px] col-start-2 md:col-start-auto flex flex-col">
          <SectionFaqQuestion v-for="(question, i) in props.questions.slice(Math.ceil(props.questions.length / 2, props.questions.length / 2))" :question="question"></SectionFaqQuestion>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
let props = defineProps({
  questions: {
    required: true,
    type: Array,
  },
})
</script>

<style lang="sass"></style>
