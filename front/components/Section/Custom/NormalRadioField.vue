<template>
  <div
    class="order-checkbox sm:items-start select-none items-center flex justify-between"
  >
    <div class="order-checkbox-container cursor-pointer">
      <input
        @change="handleCheckboxChange"
        class="hidden"
        :checked="attr"
        :id="props.fieldValue"
        :value="props.fieldValue"
        type="radio"
        :name="props.name"
      />
      <label
        class="text-[18px] sm:text-[16px] sm:items-center sm:leading-[21px] cursor-pointer flex items-center"
        :for="props.fieldValue"
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
  </div>
</template>

<script setup>
let attr = ref(null);
if (props.checked) attr.value = true;

const props = defineProps({
  fieldValue: {
    required: true,
    type: String,
  },
  name: {
    required: true,
    type: String,
  },
  checked: {
    required: true,
    type: Boolean,
  },
  isChecked: {
    type: String,
    required: false,
  },
});

let emit = defineEmits([, "update:isChecked"]);

const handleCheckboxChange = () => {
  emit("update:isChecked", props.fieldValue);
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
