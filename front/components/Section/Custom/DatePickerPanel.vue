<template>
  <div
    class="datepicker-panel xsm:px-[25px] xsm:flex xsm:flex-col xsm:bg-[#181818]"
    :class="{ 'z-[10000000000]': props.active }"
  >
    <Teleport to="body">
      <Transition name="slide-right">
        <div
          :class="{ 'z-[10000000000]': props.active }"
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
              <VueDatePicker
                v-model="date"
                :min-date="new Date()"
                @internal-model-change="handleInterval"
                :locale="locale"
                :enable-time-picker="false"
                min-range="2"
                inline
                @update:model-value="listen"
                range
              ></VueDatePicker>
              <!-- <VDatePicker
                :min-date="new Date()"
                :locale="locale"
                v-model.range="range"
                color="green"
                @update:modelValue="listenMobile"
              ></VDatePicker> -->
            </client-only>
          </div>
        </div>
      </Transition>
    </Teleport>
    <div class="desktop-dp sm:hidden">
      <client-only>
        <VueDatePicker
          @internal-model-change="handleInterval"
          :locale="locale"
          :enable-time-picker="false"
          min-range="2"
          inline
          @update:model-value="listen"
          range
          v-model="date"
        ></VueDatePicker>
        <!-- <VDatePicker
          range="range"
          v-model.range="range"
          color="green"
          :locale="locale"
          @update:modelValue="listen"
          :disabled-dates="disabledDates"
          :attributes="attrs"
        ></VDatePicker> -->
      </client-only>
    </div>
  </div>
</template>

<script setup>
// import { DatePicker } from "v-calendar";
import VueDatePicker from "@vuepic/vue-datepicker";
let { locale } = useI18n();

let handleInterval = (res) => {
  if (res != null && res.length == 2) {
    let str = "";
    let date = {
      end: res[1],
      start: res[0],
    };
    if (locale.value == "ru") {
      str = `с ${formatDate(res[0])} — до ${formatDate(res[1])}`;
    }
    if (locale.value == "eng") {
      str = `from ${formatDate(res[0])} — to ${formatDate(res[1])}`;
    }
    emit("daypick", { str, date });
  }
};
const date = ref(null);

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
  emit("daypick", { str, date });
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
	--dp-primary-color: $green
.dp__action_row
	display: none
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
.datepicker-panel, .phone-datepicker
	+r(600)
		position: fixed
		top: 0
		left: 0
		right: 0
		bottom: 0
	.dp__action_row
		display: none
	.dp__outer_menu_wrap
		+r(1200)
			width: 100%
	.dp__month_year_row
		margin-bottom: 10px
	.dp__pointer
		width: 40px
		height: 40px
	.dp__active_date, .dp__range_start, .dp__range_end
		background-color: transparent
		z-index: 10
		&::after
			content: ""
			position: absolute
			top: 0
			left: 0
			right: 0
			bottom: 0
			border-radius: 50%
			z-index: -1
			background-color: #{$green}
	.dp__range_between
		border-radius: 0
	.dp__range_end
		border-radius: 50%
	.dp__range_start, .dp__range_end
		&::before
			position: absolute
			// content: ""
			background-color: #f3f3f3
			top: -1px
			left: 50%
			bottom: 0
			z-index: -1
			right: 0
			width: 60%
			height: 40px
	.dp__range_end
		&::before
			right: 50%
			left: initial
	.dp__range_end, .dp__range_start, .dp__active_date
		--dp-primary-color: #{$green}
		border-radius: 50%
	.dp__today
		border-radius: 50%
	.dp__menu_inner

		+helvm
		padding: 10px 20px 15px
	.dp__menu
		border-radius: 10px
	.dp__month_year_wrap
		display: flex
		gap: 10px
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
