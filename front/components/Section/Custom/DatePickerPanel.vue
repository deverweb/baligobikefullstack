<template>
  <div
    class="datepicker-panel xsm:px-[25px] xsm:flex xsm:flex-col xsm:bg-[#181818]"
    :class="{ 'z-[50]': props.active }"
  >
    <Teleport to="body">
      <Transition name="slide-right">
        <div
          :class="{ 'z-[150]': props.active }"
          v-show="props.active"
          class="phone-datepicker overflow-auto pt-0 dp hidden bg-dark-300 p-[25px] sm:flex flex-col left-0 right-0 bottom-0 top-0 w-full fixed"
        >
          <div
            class="datepicker-head items-center shrink-0 justify-between sm:flex h-[66px] w-full border-[#333333] border-b-[1px] border-solid"
          >
            <Logo class="text-[20px]"></Logo>
            <button @click="handleClose" class="datepicker-head-close">
              <SvgCloseIcon></SvgCloseIcon>
            </button>
          </div>
          <div class="datepicker-body items-center pt-[45px] mb-[40px] sm:flex sm:flex-col text-center">
            <div class="datepicker-body-title uppercase max-w-[340px] text-center mb-[15px] font-Euroblack text-[32px]">
              {{ $t("datePickerComponent.mobileTitle") }}
            </div>
            <div class="datepicker-body-text max-w-[340px] text-center">
              {{ $t("datePickerComponent.mobileDescription") }}
            </div>
          </div>
          <div class="phone-datepicker-panel max-w-[340px] mx-auto flex flex-col items-center">
            <client-only>
              <DatePicker
                :min-date="new Date()"
                is-range
                :locale="locale"
                v-model="range"
                color="green"
                @update:modelValue="listenMobile"
              ></DatePicker>
            </client-only>
          </div>
        </div>
      </Transition>
    </Teleport>
    <div class="desktop-dp sm:hidden">
      <client-only>
        <DatePicker
          :min-date="new Date()"
          is-range
          v-model="range"
          color="green"
          :locale="locale"
          @update:modelValue="listen"
        ></DatePicker>
      </client-only>
    </div>
  </div>
</template>

<script setup>
import { DatePicker } from "v-calendar";
let { locale } = useI18n();
const props = defineProps({
  active: {
    type: Boolean,
    required: true,
  },
});

let range = ref({
  start: new Date(),
  end: null,
});

let emit = defineEmits(["daypick", "close"]);
const handleClose = () => {
  emit("close");
};

const listenMobile = (date) => {
  let str = "";
  if (locale.value == "ru") {
    str = `с ${formatDate(range.value.start)} — до ${formatDate(range.value.end)}`;
  }
  if (locale.value == "eng") {
    str = `from ${formatDate(range.value.start)} — to ${formatDate(range.value.end)}`;
  }
};

const listen = (date) => {
  let str = "";
  if (locale.value == "ru") {
    str = `с ${formatDate(range.value.start)} — до ${formatDate(range.value.end)}`;
  }
  if (locale.value == "eng") {
    str = `from ${formatDate(range.value.start)} — to ${formatDate(range.value.end)}`;
  }
  emit("daypick", { str, date });
};

const formatDate = (date) => {
  const yyyy = date.getFullYear();
  let mm = date.getMonth() + 1; // Months start at 0!
  let dd = date.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;
  return `${dd}.${mm}.${yyyy}`;
};

watch(
  () => props.active,
  () => {
    if (props.active) {
      document.body.classList.add("active-datepicker");
    } else {
      document.body.classList.remove("active-datepicker");
    }
  }
);
</script>

<style lang="sass">
:root
	--green-600: $green
.datepicker
	&-head
		&-close
			position: relative
			cursor: pointer
			span
				height: 21px
				width: 2px
				border-radius: 4px
				background: $light
				position: absolute
				display: block
				top: -10px
				right: 10px
				&:first-child
					transform: rotate(45deg)
				&:last-child
					transform: rotate(-45deg)
.datepicker-panel
	+r(600)
		position: fixed
		top: 0
		left: 0
		right: 0
		bottom: 0

	.vc-container
		+helvr
		--green-600: #{$green}
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
</style>
