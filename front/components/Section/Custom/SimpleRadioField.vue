<template>
  <div class="order-simple-radio sm:relative items-center flex justify-between">
    <div class="order-simple-radio-container sm:w-full flex items-center">
      <div
        :class="props.widthClasses"
        class="sm:mr-[20px] xsm:mr-[10px] order-simple-radio-text leading-[21px] sm:items-start flex items-center"
      >
        <slot></slot>
      </div>
      <div class="order-simple-radio-list cursor-pointer sm:ml-auto flex items-center">
        <div class="order-simple-radio-option text-[14px] order-simple-radio-option__first flex items-center">
          <input
            v-model="value"
            class="hidden"
            type="radio"
            checked
            :id="props.name + 0"
            :name="props.name"
            value="0"
          />
          <label :for="props.name + 0">{{ 0 }}</label>
        </div>
        <div class="order-simple-radio-option text-[14px] order-simple-radio-option__second flex items-center">
          <input v-model="value" class="hidden" type="radio" :id="props.name + 1" :name="props.name" value="1" />
          <label :for="props.name + 1">{{ 1 }}</label>
        </div>
        <div class="order-simple-radio-option text-[14px] order-simple-radio-option__third flex items-center">
          <input v-model="value" class="hidden" type="radio" :id="props.name + 2" :name="props.name" value="2" />
          <label :for="props.name + 2">{{ 2 }}</label>
        </div>
      </div>
    </div>
    <span class="text-[16px] font-Helvmed sm:text-[14px] sm:absolute sm:right-0 sm:bottom-[-27px]" v-if="props.price">{{
      props.priceText
    }}</span>
    <span class="text-[16px] font-Helvmed opacity-30 sm:hidden" v-else>{{
      translate("(включено в стоимость)", "(included in price)")
    }}</span>
  </div>
</template>

<script setup>
import { useField } from "vee-validate";

const { locale } = useI18n();

const { value } = useField(props.name);
value.value = 0;

const translate = (ruStr, engStr) => {
  if (locale.value == "ru") return ruStr;
  if (locale.value == "eng") return engStr;
};

const props = defineProps({
  name: {
    required: true,
    type: String,
  },
  widthClasses: String,
  price: Number,
  showPrice: Boolean,
  priceText: String,
});

let checked = ref(0);
</script>

<style lang="sass">
.order-simple-radio
	svg
		flex-shrink: 0
		width: 16px
		height: 16px
		margin-right: 19px
	&-text
		span
			font-size: 16px
			+r(768)
				position: relative
				top: -3px
			+r(480)
				font-size: 14px
	input
		&:checked
			background: $green
			+ label
				background-color: $green
				border-color: $green
	&-option
		label
			border: 1px solid #626262
			height: 41px
			text-align: center
			display: flex
			align-items: center
			padding: 0 20px
			transition: all 0.2s linear
			+r(480)
				padding: 0 14px
		&__first
			label
				border-bottom-left-radius: 8px
				border-top-left-radius: 8px
		&__second
			label
				border: 1px solid #626262
				border-left: none
				border-right: none
		&__third
			label
				border-bottom-right-radius: 8px
				border-top-right-radius: 8px
</style>
