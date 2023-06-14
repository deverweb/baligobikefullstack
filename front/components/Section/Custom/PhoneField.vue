<template>
  <div :class="classes" class="items-start pf form-field">
    <div class="ci-subtitle font-Helvmed text-[14px] mb-[9px] opacity-50" v-if="props.subTitle">
      {{ props.subTitle }}
    </div>

    <div class="pf-container">
      <div class="pf-icon-container">
        <slot></slot>
      </div>

      <ClientOnly>
        <vue-tel-input
          class="ml-[7px] phone-input"
          v-model="phoneValue"
          mode="international"
          @country-changed="handleCountryChange"
          @on-input="handleInput"
          :preferredCountries="props.preferedCountries"
          :validCharactersOnly="true"
          :autoFormat="false"
          :autoDefaultCountry="false"
          :dropdownOptions="{
            showFlags: true,
            showSearchBox: false,
            showDialCodeInList: true,
            disabled: !isDDdisabled,
          }"
          :inputOptions="{
            maxlength: 22,
            name: props.name,
            showDialCode: true,
            placeholder: placeholder,
          }"
        ></vue-tel-input>
      </ClientOnly>
    </div>
    <Transition name="text-error">
      <div class="ci-error-container field-error" v-if="errorMessage">
        <div class="ci-error text-red-600">
          <span>{{ errorMessage }}</span>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { useField, useIsFormTouched, useIsSubmitting } from "vee-validate";

const { locale } = useI18n();
let isFormTouched = useIsFormTouched();
let isSubmitting = useIsSubmitting();
let placeholder = computed(() => {
  if (locale.value == "eng") return "Phone number";
  if (locale.value == "ru") return "Номер телефона";
});
let ctCode = ref(0);
let translate = (ruStr, engStr) => {
  return locale.value == "ru" ? ruStr : engStr;
};

let isRequired = () => {
  if (!isSubmitting.value && !isFormTouched.value) {
    return true;
  }

  if (phoneValue.value && ctCode.value == "62" && phoneValue.value.replace(/\s/g, "").length - 3 != 11) {
    return translate("Неправильный номер", "Not a valid number");
  }
  if (phoneValue.value && ctCode.value == "380" && phoneValue.value.replace(/\s/g, "").length - 1 != 12) {
    return translate("Неправильный номер", "Not a valid number");
  }
  if (phoneValue.value && ctCode.value == "7" && phoneValue.value.replace(/\s/g, "").length != 12) {
    return translate("Неправильный номер", "Not a valid number");
  }

  return true;
};
let { errorMessage, value: phoneValue } = useField(props.name, isRequired);

const handleCountryChange = (obj) => {
  ctCode.value = obj.dialCode;
  phoneValue.value = `+${ctCode.value}`;
};

const handleInput = (num, obj) => {
  phoneValue.value = num.replace(/\s/g, "");
  if (ctCode.value == "62" && phoneValue.value.length > 14) {
    phoneValue.value = num.slice(0, Number(phoneValue.value.length - num.length + 1) * -1);

    return;
  }
  if (ctCode.value == "380" && phoneValue.value.length > 13) {
    phoneValue.value = num.slice(0, Number(phoneValue.value.length - num.length + 1) * -1);
    return;
  }
  if (ctCode.value !== "62" && ctCode.value !== "380" && phoneValue.value.length - ctCode.value.length > 11) {
    phoneValue.value = num.slice(0, Number(phoneValue.value.length - num.length + 1) * -1);
    return;
  }
  // if (ctCode.value == "380" && phoneValue.value.replace(/\s/g, "").length - 1 >= 13) {
  //   phoneValue.value = num.slice(0, -1);
  // }
  let regexp = new RegExp("^[0-9 ]+$");
  if (regexp.test(num.slice(1))) {
  } else {
    phoneValue.value = num.slice(0, -1);
  }
  if (num.length < ctCode.value.length + 1) {
    phoneValue.value = "+" + ctCode.value;
  }
};

const props = defineProps({
  name: {
    default: "phone",
    type: String,
  },

  type: String,
  subTitle: String,
  preferedCountries: {
    type: Array,
    required: true,
  },
  choosedCountries: {
    type: Array,
    required: false,
  },
  autoFormat: {
    type: Boolean,
    required: false,
    default: true,
  },
});

const isDDdisabled = computed(() => {
  return props.preferedCountries.length > 1;
});

const classes = computed(() => {
  return props.type + "-phone";
});
</script>

<style lang="sass">
.pf

	&:focus-within
		box-shadow: none
		input
			border: none
			&:focus
				border: none
			&:active
				border: none
	&.order-phone
		color: $light
		font-size: 16px
		background-color: transparent
		z-index: 4
		position: relative
		user-select: none
		border: none

		.ci-error
			color: red
			font-size: 14px
			padding-top: 4px
			padding-left: 6px
		.ci-error-container
			height: 32px
			position: absolute
		.pf-container
			height: 67px
			position: relative
			padding: 23px 21px 20px 20px
			border-radius: 12px
			display: flex
			align-items: center
			border: 1px solid rgba(251, 251, 253, 0.3)
			width: 100%
		.ci-subtitle
			color: $light
			opacity: 0.5
		.phone-input
			border: none
			color: $light
			font-size: 16px
			background-color: transparent
			z-index: 5
			width: 100%

			// padding: 23px 21px 20px 50px
			user-select: none
			display: flex
			align-items: center
			height: 100%
			.vti__dropdown.open
				background-color: $dark300
			.vti__dropdown-item.highlighted
				background-color: $dark300
			.vti__dropdown-list
				background-color: $dark
			.vti__dropdown
				&:hover
					background: transparent
			input
				background: transparent
				color: $light
			&:focus-within
				box-shadow: none

	&.index-phone

		.ci-error
			font-size: 14px
			padding-top: 4px
			padding-left: 2px
		.ci-error-container
			position: static
		.pf-container
			height: 67px

			color: $dark
			font-size: 16px
			background-color: $light
			z-index: 3
			padding: 23px 21px 20px 20px
			user-select: none
			display: flex
			align-items: flex-start
			border-radius: 12px
			border: none
			display: flex
			width: 100%
			position: relative
			align-items: center
		.phone-input
			border: none
			color: $dark
			font-size: 16px
			background-color: $light
			z-index: 3
			width: 100%
			// padding: 23px 21px 20px 50px
			user-select: none
			display: flex
			align-items: center
			border-radius: 12px
			height: 100%
			&:focus-within
				box-shadow: none
	&.invest-phone
		padding-left: 3px

		height: 67px
		position: relative
		padding-right: 30px
		padding-left: 20px
		border-radius: 12px
		border: 1px solid #D6D6D6
		.ci-error
			color: red
			font-size: 12px
		.pf-container
			display: flex
			height: 100%
			align-items: center

		.pf-icon-container
			width: 14px
		.vti__dropdown-list
			z-index: 10
		.vue-tel-input
			border-radius: 0
			border: none
			background: transparent
		.phone-input
			height: 71px
			display: flex
			align-items: center
			color: $dark
			font-size: 16px
			z-index: 10
			&:focus-within
				box-shadow: none
			input
				border: none
				&:focus
					border: none
				&:active
					border: none
	&.widget-phone
		position: relative
		.ci-error
			color: red
			font-size: 12px
		.ci-error-container
			// height: 10px
			bottom: 0
			position: absolute
		.pf-container
			display: flex
			height: 100%
			align-items: center
		.phone-input
			color: $dark
			font-size: 16px
			height: 76px
			+helvr
			border: none
			.vti__dropdown-list
				z-index: 5
				+r(600)
					max-width: calc(100vw - 70px)
					left: -22px
					top: 40px
			&:focus-within
				box-shadow: none
			input
				border: none
				&:focus
					border: none
				&:active
					border: none
</style>
