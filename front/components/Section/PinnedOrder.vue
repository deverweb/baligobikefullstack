<template>
  <div
    ref="orderSticky"
    :class="{ 'max-w-[60%]': props.rup }"
    class="order-sticky max-w-[60%] md:hidden md:max-w-full md:pt-[50px] xl:max-w-[350px]"
  >
    <div class="order-sticky-container">
      <div
        class="order-view px-[40px] md:pb-[36px] md:items-center md:flex-col xl:pl-[22px] pb-[27px] xl:pb-[30px] flex md:rounded-t-[44px] rounded-t-[17px] bg-dark-300 md:pt-[68px] pt-[42px]"
      >
        <div class="order-view-text shrink-0 md:text-center">
          <div class="font-Euroblack uppercase md:mb-[80px] md:text-[30px] mb-[48px] xl:mb-[36px] tracking-[-0.6px]">
            {{ translate("Ваш заказ:", "Your order:") }}
          </div>
          <div class="order-view-list md:hidden">
            <div class="order-view-item mb-[38px] xl:mb-[32px] flex items-start">
              <SvgBikeIcon :fill="'#30B21B'"></SvgBikeIcon>
              <div class="ml-[15px] order-view-item-container">
                <div class="order-view-item-name font-Helvmed text-[16px] mb-[7px] xl:mb-[4px] leading-[1]">
                  {{ props.bikeName }}
                </div>
                <div
                  v-if="!props.fixedOrMonthly || props.dateDif > 30"
                  class="order-view-item-price text-[14px] opacity-50 font-Helvmed"
                >
                  {{ props.dayPriceUSD }} {{ !props.rup ? "$" : " idr" }} / {{ translate("день", "day") }} ({{
                    props.fullPrice
                  }}
                  {{ !props.rup ? "$" : " idr" }} {{ translate("итого", "total") }} )
                </div>
                <div
                  v-if="props.fixedOrMonthly && props.dateDif <= 30"
                  class="order-view-item-price text-[14px] opacity-50 font-Helvmed"
                >
                  {{ props.dayPriceUSD }} {{ translate("итого", "total") }}
                </div>
              </div>
            </div>

            <div class="order-view-item flex items-start">
              <SvgCalendarIcon :fill="'#30B21B'"></SvgCalendarIcon>
              <div class="ml-[18px] order-view-item-container">
                <div class="order-view-item-name font-Helvmed text-[16px] mb-[5px] leading-[20px]">
                  {{ translate("с", "from") }} {{ props.dateStrStart }} <br />{{ translate("по", "to") }}
                  {{ props.dateStrEnd }}
                </div>
                <div
                  v-if="!props.fixedOrMonthly || props.dateDif > 30"
                  class="order-view-item-price text-[14px] opacity-50 font-Helvmed"
                >
                  {{ props.dayPriceUSD }} {{}} x {{ props.dateDif }} {{ translate("суток", "days") }}
                </div>
                <div
                  v-if="props.fixedOrMonthly && props.dateDif <= 30"
                  class="order-view-item-price text-[14px] opacity-50 font-Helvmed"
                >
                  {{ props.dateDif }} {{ translate("суток", "days") }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="order-view-images w-[50%] md:mb-[90px] md:max-h-[360px] md:flex xl:hidden md:ml-0 flex ml-auto">
          <img class="h-[230px] object-contain" :src="props.bikeImage" alt="" />
        </div>
        <div class="order-view-list hidden md:self-start md:gap-x-[54px] md:pl-[8px] md:flex md:items-start">
          <div class="order-view-item md:mb-0 mb-[38px] xl:mb-[32px] flex items-start">
            <SvgBikeIcon :fill="'#30B21B'"></SvgBikeIcon>
            <div class="ml-[15px] order-view-item-container">
              <div class="order-view-item-name font-Helvmed text-[16px] mb-[7px] xl:mb-[4px] leading-[1]">
                {{ props.bikeName }}
              </div>
              <div v-if="!props.fixedOrMonthly" class="order-view-item-price text-[14px] opacity-50 font-Helvmed">
                {{ props.dayPriceUSD }} {{}} / {{ translate("день", "day") }} ({{ props.fullPrice }}
                {{ !props.rup ? "$" : " idr" }} {{ translate("итого", "total") }})
              </div>
              <div v-if="props.fixedOrMonthly" class="order-view-item-price text-[14px] opacity-50 font-Helvmed">
                {{ props.dayPriceUSD }} {{}} {{ translate("итого", "total") }})
              </div>
            </div>
          </div>

          <div class="order-view-item flex items-start">
            <SvgCalendarIcon :fill="'#30B21B'"></SvgCalendarIcon>
            <div class="ml-[18px] order-view-item-container">
              <div class="order-view-item-name font-Helvmed text-[16px] mb-[5px] leading-[20px]">
                {{ translate("с", "from") }} {{ props.dateStrStart }} <br />
                {{ translate("по", "to") }}
                {{ props.dateStrEnd }}
              </div>
              <div v-if="!props.fixedOrMonthly" class="order-view-item-price text-[14px] opacity-50 font-Helvmed">
                {{ props.dayPriceUSD }} x {{ props.dateDif }} {{}} {{ translate("суток", "days") }}
              </div>
              <div v-if="props.fixedOrMonthly" class="order-view-item-price text-[14px] opacity-50 font-Helvmed">
                {{ props.dayPriceUSD }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="order-summary px-[40px] bg-green md:px-[50px] md:text-dark flex justify-between items-center font-Euroblack text-[14px] h-[92px] uppercase md:rounded-b-[44px] rounded-b-[12px]"
      >
        <div class="order-summary-container flex justify-between w-full xl:hidden md:flex">
          <span class="tracking-[-0.6px] mr-[10px]">
            {{ translate(" ИТОГОВАЯ СТОИМОСТЬ АРЕНДЫ:", "TOTAL RENTAL COST:") }}
          </span>
          <span class="tracking-[-0.6px]">{{ props.fullPrice }} {{ !props.rup ? "$" : " idr" }}</span>
        </div>
        <div class="order-summary-container w-full justify-between hidden xl:flex md:hidden">
          <span class="tracking-[-0.6px] mr-[10px]">{{ translate("ИТОГО", "TOTAL") }}:</span>
          <span class="tracking-[-0.6px]">{{ props.fullPrice }} {{ !props.rup ? "$" : " idr" }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { locale } = useI18n();

const translate = (ruStr, enStr) => {
  if (locale.value == "ru") return ruStr;
  return enStr;
};

const props = defineProps({
  bikeName: String || Number,
  bikeImage: String || Number,
  fullPrice: Number,
  dayPriceUSD: Number,
  dateStrStart: String || Number,
  dateStrEnd: String || Number,
  dateDif: Number,
  fixedOrMonthly: Boolean,
  rup: {
    default: false,
    type: Boolean,
  },
});

const orderSticky = ref(null);

defineExpose({
  orderSticky,
});
</script>

<style lang="sass"></style>
