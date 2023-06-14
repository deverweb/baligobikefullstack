<template>
  <div class="sm:mt-[-40px]">
    <section class="agent-slider">
      <SectionSliderAgent
        class="agent pt-[100px] md:pt-[40px] sm:pt-[20px] text-white rounded-[70px] md:rounded-[44px]"
      ></SectionSliderAgent>
    </section>
    <section class="agent-form order sm:py-[50px] lg:py-[60px] lg:pb-[0] py-[101px]">
      <div class="container flex justify-between md:flex-col">
        <div class="agent-form-left mb-[40px] sm:min-w-[initial] min-w-[360px]">
          <div class="relative z-[7] text-light">
            <div class="flex lg:flex-col lg:items-center lg:text-center">
              <div class="order-content lg:max-w-full">
                <form @submit.prevent="onSubmit" class="form">
                  <div class="max-w-[360px] lg:mx-auto lg:text-left">
                    <SectionCustomDatePicker
                      v-model:selectedDate="selectedDate"
                      name="date"
                      styleType="index"
                      transition="slide-right"
                      class="mb-[10px] dp__index-form"
                    >
                    </SectionCustomDatePicker>
                    <SectionCustomSelectField
                      :styleType="'index'"
                      class="mb-[10px] cs__index-form"
                      transition="widget-date"
                      v-model:selectedOption="indexFormStore.selectedOption"
                      :name="'bike'"
                      :defaultLabel="'Bike Model'"
                      :options="commercialStore.bikeModelsArray"
                    >
                      <SvgBikeIcon></SvgBikeIcon>
                    </SectionCustomSelectField>
                    <SectionCustomTextField
                      type="string"
                      validation="name"
                      class="ci__index-form mb-[10px]"
                      :name="'hotel_name'"
                      :placeholder="'Hotel/villa name'"
                    >
                      <SvgPersonIcon opacity="1" fill="#111111"></SvgPersonIcon>
                    </SectionCustomTextField>
                    <SectionCustomPhoneField
                      class="mb-[10px]"
                      :prefered-countries="['ID']"
                      type="index"
                      name="agent_number"
                    >
                      <SvgPhoneIcon></SvgPhoneIcon>
                    </SectionCustomPhoneField>

                    <TheButton class="w-[360px] btn-primary__dark black sm:w-full sm:max-w-full h-[70px] gap-[9px]">
                      <SvgCalendarIcon></SvgCalendarIcon>
                      <span class="relative top-[1px]">{{ $t("buttonBooking") }}</span>
                    </TheButton>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div
          class="agent-form-pinned md:hidden max-w-[100%] lg:w-[500px] w-[650px]"
          v-if="indexFormStore.selectedOption && selectedDate && formStore.rate"
        >
          <SectionPinnedOrder
            class="static agent-pinned"
            :rup="true"
            :bike-name="indexFormStore.selectedOption.name"
            :bike-image="indexFormStore.selectedOption.img"
            :full-price="formStore.computedRupPrice"
            :day-price-u-s-d="computedDayPriceRup"
            :date-dif="formStore.dateDif"
            :date-str-end="formStore.computedDateStrEnd"
            :date-str-start="formStore.computedDateStrStart"
          >
          </SectionPinnedOrder>
        </div>
        <div
          v-if="formStore.bike && selectedDate && formStore.rate"
          class="order-mobile-modal sm:pt-[40px] hidden md:block md:max-w-full md:pt-[0px]"
        >
          <div class="order-mobile-container hidden md:block">
            <div
              class="order-view sm:pb-[8px] sm:px-[25px] px-[40px] md:pb-[36px] md:items-center md:flex-col xl:pl-[42px] pb-[27px] xl:pb-[10px] flex md:rounded-t-[44px] rounded-t-[17px] bg-dark-300 sm:pt-[40px] md:pt-[68px] pt-[42px]"
            >
              <div class="order-view-text md:text-center">
                <div
                  class="font-Euroblack uppercase md:mb-[80px] md:text-[30px] sm:mb-[40px] sm:text-[24px] mb-[48px] xl:mb-[36px] tracking-[-0.6px]"
                >
                  {{ translate("Ваш заказ:", "Your order:") }}
                </div>
              </div>
              <div
                class="order-view-images md:justify-center md:mb-[90px] sm:mb-[52px] md:max-h-[360px] md:flex xl:hidden md:ml-0 flex ml-auto flex-shrink-0"
              >
                <img
                  class="flex-shrink-0 object-contain sm:w-[85%] sm:mr-[25px] sm:object-contain mr-[25px] md:mr-0"
                  :src="formStore.bike.img"
                  alt=""
                />
                <img
                  v-if="false"
                  class="flex-shrink-0 sm:w-[20%] sm:object-contain"
                  src="/img/order/modal-surf.png"
                  alt=""
                />
              </div>
              <div
                class="order-view-list md:justify-center md:w-full sm:flex-col sm:pl-0 hidden md:self-start md:gap-x-[54px] md:flex md:items-start"
              >
                <div
                  class="order-view-item sm:w-full sm:mb-[39px] md:mb-0 mb-[38px] xl:mb-[32px] flex items-start sm:items-center"
                >
                  <SvgBikeIcon :fill="'#30B21B'"></SvgBikeIcon>
                  <div class="ml-[18px] sm:w-full sm:flex sm:items-center sm:relative order-view-item-container">
                    <div class="order-view-item-name font-Helvmed text-[16px] mb-[7px] xl:mb-[4px] leading-[1]">
                      {{ formStore.bike.name }}
                    </div>
                    <div
                      v-if="!formStore.rate.isMonthly && !formStore.rate.isFixed"
                      class="order-view-item-price text-[14px] sm:hidden opacity-50 font-Helvmed"
                    >
                      {{ formStore.rate.dayPriceRUP }} idr / {{ translate("день", "day") }} ({{
                        formStore.computedRupPrice
                      }}
                      idr {{ translate("итого", "total") }})
                    </div>
                    <div
                      v-if="formStore.rate.isMonthly && formStore.dateDif > 30"
                      class="order-view-item-price text-[14px] sm:hidden opacity-50 font-Helvmed"
                    >
                      {{ (formStore.rate.dayPriceRUP / 30).toFixed(2) }} idr / {{ translate("день", "day") }} ({{
                        formStore.computedRupPrice
                      }}
                      idr {{ translate("итого", "total") }})
                    </div>
                    <div
                      v-if="(formStore.rate.isMonthly || formStore.rate.isFixed) && formStore.dateDif <= 30"
                      class="order-view-item-price text-[14px] sm:hidden opacity-50 font-Helvmed"
                    >
                      {{ formStore.computedRupPrice }} idr {{ translate("итого", "total") }}
                    </div>
                    <div class="order-view-item-price sm:ml-auto hidden sm:text-[16px] sm:block">
                      {{ formStore.computedRupPrice }} idr
                    </div>

                    <div
                      class="order-view-item-price text-[14px] opacity-50 font-Helvmed hiddem: sm:block absolute right-0 sm:text-[12px] bottom-[-15px]"
                    ></div>
                  </div>
                </div>

                <div class="order-view-item sm:w-full sm:mb-[39px] flex items-start sm:items-center">
                  <SvgCalendarIcon :fill="'#30B21B'"></SvgCalendarIcon>
                  <div class="ml-[18px] sm:w-full sm:flex sm:items-center sm:relative order-view-item-container">
                    <div class="order-view-item-name font-Helvmed text-[16px] mb-[4px] leading-[1]">
                      {{ translate("с", "from") }} {{ formStore.computedDateStrStart }} {{ translate("по", "to") }}
                      {{ formStore.computedDateStrEnd }}
                    </div>

                    <div
                      v-if="!formStore.rate.isMonthly && !formStore.rate.isFixed"
                      class="order-view-item-price text-[14px] sm:hidden opacity-50 font-Helvmed"
                    >
                      {{ formStore.rate.dayPriceRUP }} idr x {{ formStore.dateDif }} {{ translate("суток", "days") }}
                    </div>
                    <div
                      v-if="formStore.rate.isMonthly && formStore.dateDif > 30"
                      class="order-view-item-price text-[14px] sm:hidden opacity-50 font-Helvmed"
                    >
                      {{ (formStore.rate.dayPriceRUP / 30).toFixed(2) }} idr x {{ formStore.dateDif }}
                      {{ translate("суток", "days") }}
                    </div>
                    <div
                      v-if="(formStore.rate.isMonthly || formStore.rate.isFixed) && formStore.dateDif <= 30"
                      class="order-view-item-price text-[14px] sm:hidden opacity-50 font-Helvmed"
                    >
                      {{ formStore.dateDif }} {{ translate("суток", "days") }}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="order-summary sm:px-[25px] px-[40px] bg-green md:px-[50px] flex justify-between items-center font-Euroblack text-[16px] h-[92px] uppercase md:rounded-b-[44px] rounded-b-[12px]"
            >
              <div class="order-summary-container flex justify-between w-full xl:hidden md:flex sm:hidden">
                <span class="tracking-[-0.6px]">{{
                  translate("ИТОГОВАЯ СТОИМОСТЬ АРЕНДЫ:", "TOTAL RENTAL COST:")
                }}</span>
                <span class="tracking-[-0.6px]">{{ formStore.computedRupPrice }} idr</span>
              </div>
              <div class="order-summary-container w-full justify-between hidden xl:flex md:hidden sm:flex">
                <span class="tracking-[-0.6px]">{{ translate("ИТОГО", "TOTAL") }}:</span>
                <span class="tracking-[-0.6px]">{{ formStore.computedRupPrice }} idr</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useForm } from "vee-validate";
import { useCommercialStore } from "~~/store/commercial";
import { useIndexFormStore } from "~~/store/indexform";
import { useFormStore } from "~~/store/form";

const { handleSubmit } = useForm();
const router = useRouter();
const indexFormStore = useIndexFormStore();
const commercialStore = useCommercialStore();
const formStore = useFormStore();
const selectedDate = ref(null);
const { locale } = useI18n();

definePageMeta({
  layout: "agent",
});

const translate = (ruStr, engStr) => {
  return locale.value == "ru" ? ruStr : engStr;
};
// locale.value = "en";

watch(
  () => indexFormStore.selectedOption,
  () => {
    formStore.fillBikeInfo(indexFormStore.selectedOption);
  }
);

watch(
  () => selectedDate.value,
  () => {
    formStore.fillDateInfo(selectedDate.value);
  }
);

// const computedDayPrice = computed(() => {
//   if (formStore.dateDif > 30 && (formStore.rate.isMonthly || formStore.rate.isFixed)) {
//     return Number((formStore.rate.dayPriceUSD / 30).toFixed(2));
//   } else {
//     return formStore.rate.dayPriceUSD;
//   }
// });

const computedIsMonthly = computed(() => {
  if (!formStore.rate) {
    return false;
  } else {
    return formStore.rate.isMonthly;
  }
});

const computedDayPriceRup = computed(() => {
  if (formStore.rate) {
    if (formStore.dateDif > 30 && (formStore.rate.isMonthly || formStore.rate.isFixed)) {
      return Number((formStore.rate.dayPriceRUP / 30).toFixed(2));
    } else {
      return formStore.rate.dayPriceRUP;
    }
  }
});
const onSubmit = handleSubmit((values) => {
  formStore.fillAgentForm(values);

  router.push({ path: "/agentform/" });
});
</script>

<style lang="sass">

.agent
	&-pinned
		max-width: 100%
		width: 700px
</style>
