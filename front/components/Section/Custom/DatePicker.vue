<template>
  <div ref="root" class="dp form-field select-none relative" :class="{ 'z-[5]': isActivePicker }">
    <SectionCustomFieldBtn
      @click="isActivePicker = !isActivePicker"
      :style-type="props.styleType"
      :label="computedLabel"
      :active="isActivePicker"
    >
      <SvgCalendarIcon :fill="'#111111'"></SvgCalendarIcon>
    </SectionCustomFieldBtn>
    <Transition :name="props.transition">
      <div class="date-container lg:h-[374px] lg:flex lg:items-end" v-show="isActivePicker">
        <SectionCustomDatePickerPanel
          @daypick="onDatePick"
          @close="isActivePicker = !isActivePicker"
          :active="isActivePicker"
          class="dp-panel lg:h-[364px] sm:h-auto"
        ></SectionCustomDatePickerPanel>
      </div>
    </Transition>
    <Transition name="text-error">
      <div class="ci-error-container field-error" v-show="errorMessage">
        <div class="ci-error">
          <span>{{ errorMessage }}</span>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { useField } from "vee-validate";
let { locale } = useI18n();
let root = ref(null);

const props = defineProps({
  name: String,
  styleType: String,

  transition: {
    type: String,
  },
});
let isActivePicker = ref(false);

let choosedDate = ref("");
let computedLabel = computed(() => {
  if (choosedDate.value == "") {
    if (locale.value == "ru") return "От какого — До какого";
    if (locale.value == "eng") return "From - To";
    return "От какого — До какого";
  } else {
    return choosedDate.value;
  }
});
const handleOutsideClicks = (e) => {
  if (e.target.closest(".phone-datepicker")) return;
  if (!root.value.isEqualNode(e.target.closest(".dp"))) isActivePicker.value = false;
};
onMounted(() => {
  document.addEventListener("click", handleOutsideClicks);
});
onUnmounted(() => {
  document.removeEventListener("click", handleOutsideClicks);
});

const emit = defineEmits(["update:selectedDate"]);
const onDatePick = (payload) => {
  isActivePicker.value = false;
  choosedDate.value = payload.str;
  value.value = payload.date;
  emit("update:selectedDate", payload.date);
};

const isRequired = (value) => {
  if (!value) {
    if (locale.value == "ru") return "Необходимо выбрать";
    if (locale.value == "eng") return "Have to select";
  }
  return true;
};

const { value, errorMessage } = useField(props.name, isRequired);

// const formatDate = (date) => {
//   const yyyy = date.getFullYear()
//   let mm = date.getMonth() + 1 // Months start at 0!
//   let dd = date.getDate()

//   if (dd < 10) dd = "0" + dd
//   if (mm < 10) mm = "0" + mm
//   return `${dd}.${mm}.${yyyy}`
// }
</script>

<style lang="sass">
.widget-date-enter-active, .widget-date-leave-active
	z-index: 5
	transition: .2s all ease-in-out
	+r(1200)
		max-height: 374px
		transition: 0.3s all
	+r(768)
		transition: 0.2s all
		max-height: initial
		z-index: 150
.widget-date-enter-from, .widget-date-leave-to
	opacity: 0
	transform: translateX(20px)
	+r(1200)
		max-height: 0px
	+r(768)
		max-height: initial
		transform: scale(0.5)
.slide-right-enter-active,.slide-right-leave-active
	transition: .3s all linear
	overflow: hidden
	+r(768)
		transition: 0.2s all ease-in
.slide-right-enter-from, .slide-right-leave-to
	opacity: 0
	transform: translateX(-20px)
	+r(1200)
		// transform: translateY(-20px)
		transform: none
		height: 0px
	+r(768)
		height: auto

		transform: scale(0.8)

:root
	--green-600: $green

.dp
	.vc-container
		+helvr
		--green-600: #{$green}
		+r(1200)
			width: 100%
		+r(600)
			width: 100%
			height: 100%
			border: none
	.vc-day-content
		width: 40px
		height: 40px
		transition: 0.2s ease all

	.vc-header
		margin-bottom: 20px
	.vc-weeks
		padding: 20px
	&.dp__widget-form
		.date-container
			position: absolute
			top: 0
		.datepicker-panel
			position: absolute
		.dp-panel
			right: calc(100% + 55px)
			top: 0
		.vc-pane
			min-width: auto
		.ci-error-container
			position: absolute
			bottom: 0
			z-index: 5
		.ci-error
			color: rgb(220,38, 38)
			font-size: 12px
	&.dp__index-form
		.date-container
			position: absolute
			left: calc(100% + 25px)
			top: 0

			+r(1200)
				width: 100%
				left: 0
				top: initial
				bottom: 0
				position: static
			.dp-panel
				+r(1200)
					width: 100%
		.ci-error
			color: #dc2626
			font-size: 14px
			padding-top: 4px
			padding-left: 6px
	// &.dp__order-form
	// &.dp__widget-form
</style>
