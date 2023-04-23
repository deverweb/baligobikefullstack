<template>
  <div class="order-radio" :class="classes">
    <div class="flex flex-wrap sm:gap-x-[20px] order-radio-top sm:gap-y-[17px] items-baseline md:gap-[28px] gap-[21px]">
      <div :data-id="option.id" ref="root" class="order-option flex flex-col" v-for="(option, i) in props.options">
        <input
          class="hidden cursor-pointer"
          :id="props.name + option.id"
          type="radio"
          :checked="handleChecked(option, i)"
          :name="props.name"
          v-model="radioValue"
          :value="option"
          @change="handleChange(option)"
        />
        <label :for="props.name + option.id" class="order-option-container cursor-pointer">
          <div
            :class="{ 'bg-[#1B1B1B]  hover:bg-[#262626]': props.bg }"
            class="order-option-card justify-center overflow-hidden flex sm:mb-[13px] mb-[16px] rounded-[13px] sm:w-[100px] sm:h-[100px] w-[104px] h-[104px]"
          >
            <img class="h-full object-cover" :src="option.img" alt="" />
          </div>
          <div class="order-option-name font-Helvmed text-[14px] text-center">
            {{ option.drawing }}
          </div>
          <div
            v-if="props.showPrice"
            class="order-option-price opacity-50 font-Helvmed text-[14px] mt-[2px] text-center"
          >
            {{ option.price }}$ / день
          </div>
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useField } from "vee-validate";

const { value: radioValue } = useField(props.name);

const props = defineProps({
  options: {
    required: true,
    type: Array || null || undefined,
  },
  choosedDrawing: {
    required: false,
    type: String || null,
  },
  name: {
    required: true,
    type: String,
  },
  type: String,
  bg: {
    required: true,
    type: Boolean,
  },
  showPrice: {
    required: true,
    type: Boolean,
  },
});
let checkedAttr = ref(null);
// if(props.choosedDrawing)
const emit = defineEmits(["bikeImgChanged"]);

const handleChecked = (id, i) => {
  if (!props.choosedDrawing && i == 0) {
    return true;
  }
  return id.id == props.choosedDrawing ? true : null;
};

const classes = computed(() => {
  if (props.type == "bmodal") return "bmodal-radio";
});

const handleChange = (value) => {
  if (value) {
    emit("bikeImgChanged", value);
  }
};
let checked = ref(null);

if (props.options[0]) checked.value = props.options[0];

watch(
  () => {
    checked.value = props.options[0];
    handleChange(props.options[0]);
    return props.options;
  },
  () => {}
);
</script>

<style lang="sass">
.order
	&-radio
		&.bmodal-radio
			color: $dark

			input
				&:checked
					+ label
						.order-option-card, .order-option-name
							opacity: 1
						.order-option-card
							opacity: 1
							img
								border: 2px solid $green
			.order-radio-top
				+r(990)
					column-gap: 29px
				+r(600)
					column-gap: 7px
			.order-option-container
				max-width: 80px
			.order-option-card
				opacity: 1
				width: 80px
				height: 80px
				margin-bottom: 13px
			.order-option-name
				opacity: 1
				font-size: 12px
	label
		cursor: inherit
	&-option
		cursor: pointer
		&:hover
			.order-option-card,, .order-option-name
				opacity: 1
		&-card
			background-repeat: no-repeat
			background-size: 105%
			background-position: center center
			opacity: 0.5
			transition: all 0.2s ease
			img
				border-radius: 13px
				border: 2px solid transparent
		&-name
			opacity: 0.5
			transition: all 0.2s ease
		input
			&:checked
				+ label
					.order-option-card, .order-option-name
						opacity: 1
					.order-option-card
						opacity: 1
						img
							border: 2px solid $green
</style>
