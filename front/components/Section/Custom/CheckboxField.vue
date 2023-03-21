<template>
  <div
    class="order-checkbox sm:items-start select-none items-center flex justify-between"
  >
    <div class="order-checkbox-container cursor-pointer">
      <input
        @change="handleCheckboxChange"
        v-model="value"
        class="hidden"
        :id="props.name"
        type="checkbox"
        :name="props.name"
      />
      <label
        class="text-[18px] sm:text-[16px] sm:items-start sm:leading-[21px] cursor-pointer flex items-center"
        :for="props.name"
      >
        <div class="order-checkbox-icon relative mr-[19px]">
          <div
            class="order-checkbox-circle w-[15px] h-[15px] rounded-full border-[1px] border-solid border-[green]"
          ></div>
          <SvgMarkIcon
            class="absolute top-[-2px] w-[15px] h-[15px] left-[3px]"
          ></SvgMarkIcon>
        </div>
        <slot></slot>
      </label>
    </div>

    <span
      class="text-[16px] font-Helvmed"
      v-if="props.price && props.addText"
      >{{ props.priceText }}</span
    >
    <span
      class="text-[16px] font-Helvmed opacity-30 sm:hidden"
      v-if="!props.price && props.addText"
      >(включено в стоимость)</span
    >
  </div>
</template>

<script setup>
import { useField } from "vee-validate";

let { value } = useField(props.name);

value.value = props.checked;

const props = defineProps({
  name: {
    required: true,
    type: String,
  },
  checked: {
    required: true,
    type: Boolean,
  },
  isChecked: {
    type: Boolean,
    required: false,
  },
  addText: Boolean,
  price: {
    required: false,
    type: String,
  },
  priceText: {
    required: false,
    type: String,
  },
});

let emit = defineEmits([, "update:isChecked"]);

const handleCheckboxChange = () => {
  emit("update:isChecked", value.value);
};
</script>

<style lang="sass">
.order-checkbox

	label
		cursor: pointer
	&-icon
		svg
			opacity: 0
			transition: 0.2s all ease
			transform: scale(0)
	input
		+ label
			.order-checkbox-icon
				opacity: 0.8
		&:checked

			+ label
				.order-checkbox-icon
					opacity: 1
					svg
						opacity: 1
						transform: scale(1)

	label
		cursor: inherit
</style>
