<template>
  <div
    class="pt-[220px] md:pt-[100px] sm:pt-[70px] pb-[80px] px-[80px] sm:px-[25px] xl:px-[50px] payment bg-[#202020] rounded-t-[74px] md:rounded-t-[44px]"
  >
    <div class="payment-body relative" v-if="formStore.bike">
      <div class="payment-left w-[54%] md:w-full xl:w-[65%] lg:w-[70%]">
        <div
          class="payment-title mb-[50px] pb-[50px] sm:mb-[40px] sm:text-center lil:text-[24px] xsm:text-[28px] sm:pb-[30px] sm:text-[36px] text-[48px] font-Euroblack"
        >
          {{ locale == "ru" ? "ОПЛАТА ЗАКАЗА" : "ORDER PAYMENT" }}
        </div>

        <div class="payment-form">
          <SectionCustomStep class="mb-[38px]" number="6" :text="langObj.choosePayment"></SectionCustomStep>
          <div class="payment-checkboxbody">
            <SectionCustomNormalRadioField
              field-value="consult"
              name="payment"
              :checked="true"
              class="mb-[30px] ml-[30px] sm:ml-0"
              v-model:isChecked="paymentType"
            >
              <span class="sm:leading-[1] text-[18px] sm:text-[15px]">
                {{
                  locale == "ru"
                    ? "Оплата после консультации менеджера "
                    : "Payment after consultation with the manager"
                }}
              </span>
            </SectionCustomNormalRadioField>
            <!-- <SectionCustomNormalRadioField
              field-value="russiacard"
              name="payment"
              :checked="false"
              class="mb-[30px] ml-[30px] sm:ml-0"
              v-model:isChecked="paymentType"
            >
              <span class="sm:leading-[1] text-[18px] sm:text-[15px]">
                {{ locale == "ru" ? "Оплата картой на сайте (Россия)" : "Payment by card on the site (Russia)" }}
              </span>
            </SectionCustomNormalRadioField> -->
            <!-- <SectionOrderNormalRadioField
              field-value="worldcard"
              name="payment"
              :checked="false"
              class="mb-[30px] ml-[30px] sm:ml-0"
              v-model:isChecked="paymentType"
            >
              <span class="sm:leading-[1] text-[18px] sm:text-[15px]">{{
                locale == "ru"
                  ? "Оплата картой на сайте (для всего мира)"
                  : "Payment by card on the site (for the whole world)"
              }}</span>
            </SectionOrderNormalRadioField>
            <SectionOrderNormalRadioField
              field-value="binance"
              name="payment"
              :checked="false"
              class="ml-[30px] sm:ml-0"
              v-model:isChecked="paymentType"
            >
              <span class="sm:leading-[1] text-[18px] sm:text-[15px]">
                {{
                  locale == "ru" ? "Оплата криптовалютой через Binance Pay" : "Cryptocurrency payment via Binance Pay"
                }}
              </span>
            </SectionOrderNormalRadioField> -->
          </div>
          <a :href="paymentLink">
            <TheButton
              @click="onSubmit"
              class="w-[300px] xsm:h-[67px] xsm:max-w-[300px] xsm:w-full gap-[15px] sm:mt-[50px] mt-[70px] h-[70px] btn-primary__dark"
            >
              <SvgMoneyIcon class="sm:hidden" fill="#ffffff"></SvgMoneyIcon>
              <span class="sm:text-[16px]">
                {{ locale == "ru" ? "Оплатить заказ" : "Pay for the order" }}
              </span>
            </TheButton>
          </a>
        </div>
      </div>
      <div class="payment-sticky absolute w-full right-0 top-0">
        <SectionPinnedOrder
          class="top-0 right-0 absolute"
          ref="orderSticky"
          :bike-name="formStore.bike.name"
          :bike-image="formStore.bikeImage"
          :full-price="formStore.computedPrice"
          :day-price-u-s-d="formStore.rate.dayPriceUSD"
          :date-dif="formStore.dateDif"
          :date-str-end="formStore.computedDateStrEnd"
          :date-str-start="formStore.computedDateStrStart"
        >
        </SectionPinnedOrder>
      </div>
    </div>
    <div v-else>Загрузка</div>
  </div>
</template>

<script setup>
import { useFormStore } from "~~/store/form";

const { locale } = useI18n();
const formStore = useFormStore();
const router = useRouter();
let paymentType = ref("consult");
const config = useRuntimeConfig();

onBeforeMount(() => {
  if (formStore.bike == null) {
    router.push("/");
  }
});
let langObj = computed(() => {
  if (locale.value == "ru")
    return {
      choosePayment: "Выберите метод оплаты",
    };
  if (locale.value == "eng")
    return {
      choosePayment: "Select a Payment Method",
    };
});
let paymentLink = ref("#");
// formStore.fillForm({
//   date: {
//     start: "2022-12-30T04:34:23.560Z",
//     end: "2022-12-31T04:34:23.560Z",
//   },
//   bike: {
//     model: "HONDA VARIO 160 CC",
//     bikes: [
//       {
//         id: "9221",
//         hourPriceUsd: "15",
//         img: "https://rentsyst.com/static/cache/vehicle/22441/vehicle_list_33445.jpg",
//         brand: "HONDA",
//         mark: "VARIO 160 CC",
//         name: "HONDA VARIO 160 CC",
//         drawing: "Red Bull",
//       },
//     ],
//     discount: 20,
//     rates: [
//       {
//         minDays: 1,
//         maxDays: 4,
//         dayPriceUSD: 15,
//         dayPriceRUP: 210000,
//       },
//       {
//         minDays: 5,
//         maxDays: 7,
//         dayPriceUSD: 14,
//         dayPriceRUP: 210000,
//       },
//       {
//         minDays: 8,
//         maxDays: 14,
//         dayPriceUSD: 11,
//         dayPriceRUP: 170000,
//       },
//       {
//         minDays: 15,
//         maxDays: 21,
//         dayPriceUSD: 9,
//         dayPriceRUP: 130000,
//       },
//       {
//         minDays: 22,
//         maxDays: 90,
//         dayPriceUSD: 7,
//         dayPriceRUP: 100000,
//       },
//     ],
//     id: "9221",
//     hourPriceUsd: "15",
//     img: "https://rentsyst.com/static/cache/vehicle/22441/vehicle_list_33445.jpg",
//     brand: "HONDA",
//     mark: "VARIO 160 CC",
//     name: "HONDA VARIO 160 CC",
//     drawing: "Red Bull",
//   },
//   client_name: "23333333",
//   client_phone: "+62 22 2222222",
// });
// formStore.bikeImage = "https://rentsyst.com/static/cache/vehicle/22441/vehicle_list_33445.jpg";

const onSubmit = () => {
  if (paymentType.value == "consult") {
    router.push("/success/");
  }
  if (paymentType.value == "russiacard") {
    fetch("https://cent.app/api/v1/bill/create", {
      body: `amount=${formStore.computedPrice}&description=${
        formStore.bike.model
      }&order_id=${Date.now()}&type=multi&shop_id=${config.public.CENT_SHOP_ID}&custom=123&currency_in=USD`,
      headers: {
        Authorization: `Bearer ${config.public.CENT_API_TOKEN}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      method: "POST",
    })
      .then((data) => {
        return data.json();
      })
      .then((result) => {
        window.open(result.link_page_url, "_blank").focus();
      });
  }
};
</script>

<style lang="sass">
.payment-title
	border-bottom: 1px solid rgba(#FBFBFD, 0.1)
</style>
