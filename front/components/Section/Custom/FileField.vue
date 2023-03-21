<template>
  <div class="cf cursor-pointer">
    <div class="cf-subtitle font-Helvmed text-[14px] mb-[10px] opacity-50" v-if="props.subTitle">
      {{ props.subTitle }}
    </div>
    <label
      for="passport"
      class="quiz-question-file w-full sm:pl-[24px] sm:pr-[25px] pl-[26px] pr-[32px] flex items-center cursor-pointer rounded-[12px] border-[#69696A] border-[1px] border-solid h-[67px]"
    >
      <SvgFileIcon class="mr-[19px] sm:hidden"></SvgFileIcon>
      <span class="text-[16px] sm:text-[14px] text-light">{{ useCurrentLabel }}</span>
      <input :name="props.name" id="passport" class="hidden" type="file" @change="handleChange" @blur="handleBlur" />
      <SvgDownloadIcon class="ml-auto"></SvgDownloadIcon>
    </label>
    <div class="error absolute text-red-600 text-[14px] pt-[4px] pl-[6px]">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script setup>
import { useField } from "vee-validate";

const isRequired = (values) => {
  if (props.required === false) return true;
  if (!value.value) return "Необходимо заполнить";
  return true;
};

let { value, errorMessage } = useField(props.name, isRequired);

const props = defineProps({
  defaultLabel: String,
  subTitle: String,
  name: String,
  required: Boolean,
});

let currentLabel = ref(null);

const handleChange = (event) => {
  value.value = event.target.files[0];
  currentLabel.value = event.target.files[0].name;
};

const useCurrentLabel = computed(() => {
  if (value.value) return currentLabel.value;
  else return props.defaultLabel;
});

// let useCurrentLabel = computed(() => {
//   if (!currentLabel.value) {
//     return "Загрузите фото загранпаспорта";
//   } else return currentLabel.value;
// });
</script>

<style lang="sass"></style>
