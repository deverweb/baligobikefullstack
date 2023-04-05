<template>
  <div
    ref="order"
    class="order px-[80px] xl:pt-[134px] md:pt-[131px] sm:pt-[66px] md:px-[0px] xl:px-[55px] sm:pb-[70px] md:pb-[150px] pb-[130px] 2xl:pt-[173px] pt-[179px] relative rounded-t-[70px] sm:rounded-t-[44px] bg-dark-700"
  >
    <div v-if="formStore.bike">
      <div
        ref="orderBody"
        class="order-body sm:px-[25px] md:px-[50px] md:min-w-0 min-w-[600px] max-w-[46.6%] xl:max-w-[48.8%] md:max-w-full"
      >
        <h1
          class="order-title sm:text-[28px] tracking-[-1.5px] md:leading-[0.98] xl:tracking-[-1.2px] md:text-center xl:text-[36px] font-Euroblack md:text-[48px] text-[48px] uppercase border-bottom xl:pb-[41px] sm:pb-[34px] md:pb-[42px] pb-[30px]"
        >
          {{ locale == "ru" ? "ОФОРМЛЕНИЕ ЗАКАЗА" : "ORDERING" }}
        </h1>
        <form @submit.prevent="onSubmit">
          <div class="border-bottom order-step sm:pt-[41px] sm:pb-[38px] pt-[50px] pb-[51px]">
            <SectionCustomStep
              class="mb-[48px] sm:mb-[40px]"
              number="1"
              :text="locale == 'ru' ? 'Выберите дополнительную комплектацию' : 'Choose additional equipment'"
            ></SectionCustomStep>
            <p class="font-Helvmed text-[14px] opacity-50 sm:mb-[28px] mb-[36px]">
              {{ locale == "ru" ? "Бесплатная комплектация" : "Free equipment" }}
            </p>
            <SectionCustomSimpleRadioField
              widthClasses="w-[291px] md:w-[256px] sm:w-[161px]"
              class="mb-[40px] sm:mb-[29px]"
              name="adultHelmetCount"
            >
              <SvgSmallHelmetIcon></SvgSmallHelmetIcon>
              <span>
                {{ locale == "ru" ? "Новый взрослый шлем" : "New adult helmet" }}
              </span>
            </SectionCustomSimpleRadioField>
            <SectionCustomSimpleRadioField
              widthClasses="w-[291px] md:w-[256px] sm:w-[161px]"
              class="mb-[40px] sm:mb-[29px]"
              name="childHelmetCount"
            >
              <SvgSmallHelmetIcon></SvgSmallHelmetIcon>
              <span>{{ locale == "ru" ? "Новый детский шлем" : "New children's helmet" }}</span>
            </SectionCustomSimpleRadioField>
            <SectionCustomSimpleRadioField widthClasses="w-[291px] md:w-[256px] sm:w-[161px]" name="rainCoatCount">
              <SvgRainCoat></SvgRainCoat>
              <span>
                {{ locale == "ru" ? "Дождевик стандартный" : "Raincoat standard" }}
              </span>
            </SectionCustomSimpleRadioField>
          </div>

          <div class="border-bottom order-step sm:py-[40px] py-[50px]">
            <SectionCustomStep
              class="mb-[38px] sm:mb-[28px]"
              number="2"
              :text="translate('Введите контактные данные КЛИЕНТА', 'Enter the contact details of the CLIENT')"
            ></SectionCustomStep>
            <div
              class="order-client items-end sm:mb-[43px] mb-[37px] sm:grid-cols-1 sm:gap-y-[43px] grid grid-cols-2 gap-x-[25px] gap-y-[38px]"
            >
              <SectionCustomTextField
                :type="'string'"
                class="ci__payment-form"
                name="clientName"
                :placeholder="translate('Имя и фамилия', 'First and last name')"
                :subTitle="translate('Имя и фамилия', 'First and last name')"
              >
                <SvgPersonIcon></SvgPersonIcon>
              </SectionCustomTextField>
              <SectionCustomPhoneField
                :prefered-countries="['ID', 'RU', 'UA']"
                class=""
                :subTitle="translate('Номер WhatsApp', 'WhatsApp number')"
                type="order"
                name="clientPhone"
              >
                <SvgPhoneIcon fill="#FBFBFD" class="opacity-50"></SvgPhoneIcon>
              </SectionCustomPhoneField>
            </div>
            <SectionCustomFileField
              :name="'passport'"
              :required="false"
              :subTitle="translate('Фото документа', 'Document photo')"
              :defaultLabel="translate('Загрузите фото документа клиента', `Upload a photo of the client's document`)"
            >
              <SvgFileIcon></SvgFileIcon>
            </SectionCustomFileField>
          </div>
          <TheButton class="mt-[50px] md:hidden btn-primary__dark w-full h-[70px] gap-[15px]" type="submit">
            <SvgCalendarIcon></SvgCalendarIcon>
            <span>{{ translate("Забронировать даты и комплектующие", "Book dates and accessories") }} </span>
          </TheButton>
        </form>
      </div>
      <!-- <div class="modal-container max-w-[50%] absolute right-[80px] top-[130px]"> -->
      <SectionPinnedOrder
        class="top-[130px] absolute right-[80px] xl:top-[77px] xl:right-[55px]"
        ref="orderSticky"
        :bike-name="formStore.bike.name"
        :bike-image="formStore.bikeImage"
        :full-price="Number(formStore.computedRupPrice.toFixed(0))"
        :rup="true"
        :day-price-u-s-d="Number(computedDayRupPrice.toFixed(0))"
        :date-dif="formStore.dateDif"
        :date-str-end="formStore.computedDateStrEnd"
        :date-str-start="formStore.computedDateStrStart"
        :fixedOrMonthly="formStore.rate.isMonthly || formStore.rate.isFixed"
      ></SectionPinnedOrder>

      <div class="order-mobile-modal sm:pt-[40px] hidden md:block md:max-w-full md:pt-[50px]">
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
                  <!-- <div v-if="formStore.rate.isMonthly && formStore.dateDif > 30"  class="order-view-item-price sm:ml-auto hidden sm:text-[16px] sm:block">
                    {{ (formStore.rate.dayPriceRUP/30).toFixed(2) }}$
                  </div> -->
                  <div
                    class="order-view-item-price text-[14px] opacity-50 font-Helvmed hiddem: sm:block absolute right-0 sm:text-[12px] bottom-[-15px]"
                  >
                    <!-- {{ formStore.rate.dayPriceUSD }}rup / день -->
                  </div>
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
              <span class="tracking-[-0.6px]">{{ translate("ИТОГОВАЯ СТОИМОСТЬ АРЕНДЫ:", "TOTAL RENTAL COST:") }}</span>
              <span class="tracking-[-0.6px]">{{ formStore.computedRupPrice }} idr</span>
            </div>
            <div class="order-summary-container w-full justify-between hidden xl:flex md:hidden sm:flex">
              <span class="tracking-[-0.6px]">{{ translate("ИТОГО:", "TOTAL:") }}:</span>
              <span class="tracking-[-0.6px]">{{ formStore.computedRupPrice }} idr</span>
            </div>
          </div>
          <div class="sm:px-[25px] md:px-[50px] order-mobile-modal-btn">
            <hr class="hidden md:block sm:my-[40px] opacity-10 w-full my-[50px] h-[2px] bg-light" />
            <TheButton
              @click.prevent="onSubmit"
              class="mt-[50px] sm:mt-0 sm:w-full sm:ml-0 hidden md:flex btn-primary__dark w-full h-[70px] gap-[15px]"
              type="submit"
            >
              <SvgCalendarIcon></SvgCalendarIcon>
              <span class="sm:hidden">{{ $t("buttonBooking") }}</span>
              <span class="hidden sm:block">{{ $t("buttonBooking") }}</span>
            </TheButton>
          </div>
        </div>
      </div>
    </div>
    <div v-else>{{ translate("Загрузка...", "Loading...") }}</div>

    <!-- </div> -->
  </div>
</template>

<script setup>
import { useForm, useFormErrors } from "vee-validate";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useFormStore } from "~~/store/form";
import { useCommercialStore } from "~~/store/commercial";
const router = useRouter();
const { locale } = useI18n();
locale.value = "en";
const formErrors = useFormErrors();
gsap.registerPlugin(ScrollTrigger);
const commercialStore = useCommercialStore();
const formStore = useFormStore();
// formStore.fillForm({
//   date: {
//     start: "2023-02-23T17:19:12.706Z",
//     end: "2023-03-27T17:19:12.706Z",
//   },
//   bike: {
//     model: "HONDA VARIO 160 CC",
//     engDescription:
//       "Honda Vario 160 - This bike is for those who want something nimble and dynamic. It will be comfortable to move around the city and at the same time easy enough to drive and frisky enough to overtake on the highway. Diode optics and combined brakes set this bike apart from other models in this class. The bike is equipped with an 18L trunk, which freely fits a motorcycle helmet.",
//     ruDescription:
//       "Honda Vario 160 - Этот байк подходит для тех, кто хочет что-то маневренное и динамичное. Он будет комфортен для перемещения по городу и в то же время достаточно лёгкий в управлении и резвый для совершения обгона на трассе. Диодная оптика и комбинированные тормоза выделяют этот байк на фоне других моделей данного класса. Байк оснащен багажником 18л, в который свободно влезает мотошлем.\n\t\t\t\t",
//     year: "2022",
//     trunk_volume: "18",
//     capacity: "11,1",
//     fuel_tank_volume: "5,5",
//     average_consumption: "2,3",
//     bikes: [
//       {
//         id: "honda vario 1",
//         img: "/img/bikes/vario-redbull.png",
//         drawing: "Redbull",
//       },
//       {
//         id: "honda vario 2",
//         img: "/img/bikes/vario-blue-full.png",
//         drawing: "Blue Full",
//       },
//     ],
//     discount: 20,
//     rates: [
//       {
//         isFixed: true,
//         isMonthly: false,
//         minDays: 1,
//         maxDays: 3,
//         dayPriceRUP: 700000,
//         dayPriceUSD: 47,
//       },
//       {
//         isFixed: false,
//         minDays: 4,
//         maxDays: 7,
//         isMonthly: false,
//         dayPriceRUP: 270000,
//         dayPriceUSD: 18,
//       },
//       {
//         isFixed: false,
//         minDays: 8,
//         maxDays: 14,
//         isMonthly: false,
//         dayPriceRUP: 220000,
//         dayPriceUSD: 15,
//       },
//       {
//         isFixed: false,
//         minDays: 15,
//         maxDays: 21,
//         isMonthly: false,
//         dayPriceRUP: 170000,
//         dayPriceUSD: 11,
//       },
//       {
//         isFixed: false,
//         isMonthly: true,
//         minDays: 22,
//         maxDays: 90,
//         dayPriceUSD: 233,
//         dayPriceRUP: 3500000,
//       },
//     ],
//     id: "9221",
//     img: "/img/bikes/vario-redbull.png",
//     brand: "HONDA",
//     mark: "VARIO 160 CC",
//     name: "HONDA VARIO 160 CC",
//   },
//   client_name: "12312312",
//   client_phone: "+62 31 2312312",
// });

definePageMeta({
  layout: "agent",
});

const computedDayPrice = computed(() => {
  if (formStore.dateDif > 30 && (formStore.rate.isMonthly || formStore.rate.isFixed)) {
    return Number((formStore.rate.dayPriceUSD / 30).toFixed(2));
  } else {
    return formStore.rate.dayPriceUSD;
  }
});

// watch(
//   () => activeMobileMenu.value,
//   () => {
//     if (activeMobileMenu.value) {
//       document.body.classList.add("active-popup");
//     } else {
//       document.body.classList.remove("active-popup");
//     }
//   }
// );

const computedDayRupPrice = computed(() => {
  if (formStore.dateDif > 30 && (formStore.rate.isMonthly || formStore.rate.isFixed)) {
    return Number((formStore.rate.dayPriceRUP / 30).toFixed(2));
  } else {
    return formStore.rate.dayPriceRUP;
  }
});

const translate = (ruStr, engStr) => {
  return locale.value == "ru" ? ruStr : engStr;
};

let drawing = ref(formStore.bike.drawing);

const handleBikeImage = (payload) => {
  drawing.value = payload.drawing;
  formStore.bikeImage = payload.img;
};

const { handleSubmit, errors } = useForm();
let order = ref(null);
let orderSticky = ref(null);
let orderBody = ref(null);

onMounted(() => {
  // ScrollTrigger.create({
  //   id: "index",
  //   trigger: ".order-body",
  //   start: "top 180px",
  //   end: () => `+=${getDurationHeight()}`,
  //   pin: ".order-sticky",
  // })

  if (!formStore.bike) {
    router.push("/");
    return;
  }
  let getDurationHeight = () => {
    let computedStyle = getComputedStyle(order.value);
    let elementHeight = order.value.clientHeight;
    elementHeight -= parseFloat(computedStyle.paddingTop) + parseFloat(computedStyle.paddingBottom);
    return elementHeight - orderSticky.value.orderSticky.offsetHeight + 50;
  };
  ScrollTrigger.create({
    id: "index",
    trigger: orderBody.value,
    start: "top 250px",
    end: () => `+=${getDurationHeight()}`,
    pin: orderSticky.value.orderSticky,
  });

  // setTimeout(() => {
  //   ScrollTrigger.create({
  //     id: "index",
  //     trigger: orderBody.value,
  //     start: "top 180px",
  //     end: () => `+=${getDurationHeight()}`,
  //     pin: orderSticky.value,
  //   })
  // }, 500)
  // ScrollTrigger.getById("index").enable()
});

// onBeforeUnmount(() => {
//   ScrollTrigger.getById("index").kill();
// });

const onSubmit = handleSubmit(
  async (values) => {
    commercialStore.agentFormOrder({
      order_date: new Date().toLocaleDateString() + "  " + new Date().toLocaleTimeString().slice(0, -3),
      villa_name: formStore.hotelName,
      agent_wa: " +" + formStore.agentNumber.substring(1),
      client_name: values.clientName,
      client_wa: " +" + values.clientPhone.substring(1),
      order_date_start: new Date(formStore.dates.start).toLocaleDateString(),
      order_date_end: new Date(formStore.dates.end).toLocaleDateString(),
      bike_model: formStore.bike.name,
      adult_helmets: values.adultHelmetCount,
      kid_helmets: values.childHelmetCount,
      raincoats: values.rainCoatCount,
      fullprice: formStore.computedRupPrice,
    });
    useRouter().push("/agentsuccess");
  },
  async (values) => {
    window.scrollTo({
      top: document.querySelectorAll(".field-error")[0].closest(".form-field ").offsetTop - 100,
      behavior: "smooth",
    });
  }
);
</script>

<style lang="sass">
.order-sticky-container
	+r(1660)
		zoom: 0.95
	+r(1100)
		zoom: 0.8
	+r(991)
		zoom: 1
.order-body
	+r(1660)
		zoom: 0.85
	+r(991)
		zoom: 1
.border-bottom
	border-bottom: 2px solid rgba($light, 0.1)
</style>
