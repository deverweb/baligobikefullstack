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
          <TheButton
            :loading="loading"
            class="mt-[50px] md:hidden btn-primary__dark w-full h-[70px] gap-[15px]"
            type="submit"
          >
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
              :loading="loading"
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
locale.value = "eng";
let loading = ref(false);
gsap.registerPlugin(ScrollTrigger);
const commercialStore = useCommercialStore();
const formStore = useFormStore();
// formStore.fillBikeInfo({
//   model: "HONDA PCX 160 CC",
//   name: "HONDA PCX 160 CC",
//   settings: [
//     {
//       name: {
//         ru: "Год выпуска",
//         eng: "Year",
//       },
//       value: {
//         ru: "2022",
//         eng: "2022",
//       },
//     },
//     {
//       name: {
//         ru: "Объем багажника",
//         eng: "Trunk volume",
//       },
//       value: {
//         ru: "30 литров",
//         eng: "30 liters",
//       },
//     },
//     {
//       name: {
//         ru: "Мощность",
//         eng: "Capacity",
//       },
//       value: {
//         ru: "16 л.с.",
//         eng: "16 hp",
//       },
//     },
//     {
//       name: {
//         ru: "Объем топливного бака",
//         eng: "Fuel tank volume",
//       },
//       value: {
//         ru: "8,1 Литров",
//         eng: "8,1 liters",
//       },
//     },
//     {
//       name: {
//         ru: "Средний расход",
//         eng: "Average consumption",
//       },
//       value: {
//         ru: "2,5 литров / 100 км",
//         eng: "2,5 liters / 100 km",
//       },
//     },
//   ],
//   bikes: [
//     {
//       id: "0",
//       drawing: "Red Bull",
//       title: "Red Bull",
//       img: "https://admin.baligo.bike/wp-content/uploads/2023/04/pcx-redbull.png",
//     },
//   ],
//   id: "HONDA PCX 160 CC",
//   rates: [
//     {
//       isFixed: true,
//       isMonthly: false,
//       minDays: 1,
//       maxDays: 3,
//       dayPriceRUP: 700000,
//       dayPriceUSD: 47,
//     },
//     {
//       isFixed: false,
//       isMonthly: false,
//       minDays: 4,
//       maxDays: 7,
//       dayPriceRUP: 270000,
//       dayPriceUSD: 18,
//     },
//     {
//       isFixed: false,
//       isMonthly: false,
//       minDays: 8,
//       maxDays: 14,
//       dayPriceRUP: 220000,
//       dayPriceUSD: 15,
//     },
//     {
//       isFixed: false,
//       isMonthly: false,
//       minDays: 15,
//       maxDays: 21,
//       dayPriceRUP: 170000,
//       dayPriceUSD: 11,
//     },
//     {
//       isFixed: false,
//       isMonthly: true,
//       minDays: 22,
//       maxDays: 90,
//       dayPriceRUP: 3500000,
//       dayPriceUSD: 233,
//     },
//   ],
//   img: "https://admin.baligo.bike/wp-content/uploads/2023/04/pcx-redbull.png",
//   discount: 20,
//   ruDescription:
//     "Honda PCX - один из самых популярных максискутеров на Бали. Он идеально подходит для тех, кто решил побывать в каждой точке загадочного Бали. Будьте уверены, что вы не устанете, перемещаясь на этом современном красавце и получите массу впечатлений от езды. За счёт низкой посадки он комфортен в использовании парням и девушкам.\r\n\t\t\t\tОбновленная система топливного распределения позволяет проехать на полном баке до 250 км. Яркая светодиодная оптика поможет с комфортом перемещаться в ночное время. Байк комплектуется удобным электронным smart-ключом и имеет вместительный багажник.",
//   engDescription:
//     "Honda PCX is one of the most popular maxi scooters in Bali. It is ideal for those who decide to visit every point of the mysterious Bali. Rest assured that you won't get tired riding this modern beauty and you'll have a great riding experience. Due to the low fit, it is comfortable to use for boys and girls.\r\n\t\t\t\tThe updated fuel distribution system allows you to drive on a full tank up to 250 km. Bright LED optics will help you move comfortably at night. The bike is equipped with a convenient electronic smart-key and has a spacious trunk.",
// });
// formStore.fillDateInfo({
//   start: "2023-04-23T10:00:53.590Z",
//   end: "2023-04-28T10:00:53.590Z",
// });
// formStore.fillAgentForm({
//   date: {
//     start: "2023-04-23T09:42:24.776Z",
//     end: "2023-04-27T09:42:24.776Z",
//   },
//   bike: {
//     model: "YAMAHA NMAX 155 CC",
//     name: "YAMAHA NMAX 155 CC",
//     settings: [
//       {
//         name: {
//           ru: "Год выпуска",
//           eng: "Year",
//         },
//         value: {
//           ru: "2022",
//           eng: "2022",
//         },
//       },
//       {
//         name: {
//           ru: "Сухой вес",
//           eng: "Dry weight",
//         },
//         value: {
//           ru: "127 кг",
//           eng: "127 kg",
//         },
//       },
//       {
//         name: {
//           ru: "Объем багажника",
//           eng: "Trunk volume",
//         },
//         value: {
//           ru: "30 литров",
//           eng: "30 liters",
//         },
//       },
//       {
//         name: {
//           ru: "Мощность",
//           eng: "Capacity",
//         },
//         value: {
//           ru: "15,1 л.с.",
//           eng: "15,1 hp",
//         },
//       },
//       {
//         name: {
//           ru: "Объем топливного бака",
//           eng: "Fuel tank volume",
//         },
//         value: {
//           ru: "7,1 Литров",
//           eng: "7,1 liters",
//         },
//       },
//       {
//         name: {
//           ru: "Средний расход",
//           eng: "Average consumption",
//         },
//         value: {
//           ru: "2,5 литров / 100 км",
//           eng: "2,5 liters / 100 km",
//         },
//       },
//     ],
//     bikes: [
//       {
//         id: "0",
//         drawing: "Bitcoin",
//         title: "Bitcoin",
//         img: "https://admin.baligo.bike/wp-content/uploads/2023/04/nmax-bitcoin.png",
//       },
//       {
//         id: "1",
//         drawing: "Blue",
//         title: "Blue",
//         img: "https://admin.baligo.bike/wp-content/uploads/2023/04/nmax-blue.png",
//       },
//       {
//         id: "2",
//         drawing: "RedBull Panther",
//         title: "RedBull Panther",
//         img: "https://admin.baligo.bike/wp-content/uploads/2023/04/nmax-redbull-panther-black-yellow.png",
//       },
//       {
//         id: "3",
//         drawing: "Redbull",
//         title: "Redbull",
//         img: "https://admin.baligo.bike/wp-content/uploads/2023/04/nmax-redbull.png",
//       },
//       {
//         id: "4",
//         drawing: "Viva Magenta",
//         title: "Viva Magenta",
//         img: "https://admin.baligo.bike/wp-content/uploads/2023/04/nmax-viva-magenta.png",
//       },
//     ],
//     id: "YAMAHA NMAX 155 CC",
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
//         isMonthly: false,
//         minDays: 4,
//         maxDays: 7,
//         dayPriceRUP: 270000,
//         dayPriceUSD: 18,
//       },
//       {
//         isFixed: false,
//         isMonthly: false,
//         minDays: 8,
//         maxDays: 14,
//         dayPriceRUP: 220000,
//         dayPriceUSD: 15,
//       },
//       {
//         isFixed: false,
//         isMonthly: false,
//         minDays: 15,
//         maxDays: 21,
//         dayPriceRUP: 170000,
//         dayPriceUSD: 11,
//       },
//       {
//         isFixed: false,
//         isMonthly: true,
//         minDays: 22,
//         maxDays: 90,
//         dayPriceRUP: 3500000,
//         dayPriceUSD: 233,
//       },
//     ],
//     img: "https://admin.baligo.bike/wp-content/uploads/2023/04/nmax-bitcoin.png",
//     discount: 20,
//     ruDescription:
//       "На 2022 модельный год Yamaha одарила NMAX рядом важных доработок, сделав популярную модель ещё лучше. Обновленный NMAX 155 получил диодный свет, более спортивную облицовку и слегка доработанную эргономику. Посадка была сделана чуть просторнее для удобства высоких райдеров, а руль стал выше, обеспечив более удобную и расслабленную позу. Также для водителя предусмотрены удлиненные подножки, благодаря ним ноги можно вытянуть, что создает дополнительное удобство.\r\n",
//     engDescription:
//       "For the 2022 model year, Yamaha has given the NMAX a number of important upgrades to make the popular model even better. The updated NMAX 155 received LED lighting, a sportier fascia and slightly improved ergonomics. The seating position has been slightly wider for the comfort of taller riders, while the handlebars have been raised for a more comfortable and relaxed posture.\r\n",
//   },
//   hotel_name: "123123213123",
//   agent_number: "+6221312312312",
// });
definePageMeta({
  layout: "agent",
});
const formatDate = (date, addTime) => {
  const day = date.getDate().toString().padStart(2, "0"); // добавляем ведущий ноль, если день меньше 10
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // добавляем ведущий ноль, если месяц меньше 10
  const year = date.getFullYear().toString();
  if (addTime) {
    const hours = date.getUTCHours().toString().padStart(2, "0"); // добавляем ведущий ноль, если час меньше 10
    const minutes = date.getUTCMinutes().toString().padStart(2, "0"); // добавляем ведущий ноль, если минуты меньше 10
    const seconds = date.getUTCSeconds().toString().padStart(2, "0"); // добавляем ведущий ноль, если секунды меньше 10

    const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}:${seconds} UTC`;
    return formattedDate;
  } else {
    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
  }
};
const computedDayPrice = computed(() => {
  if (formStore.dateDif > 30 && (formStore.rate.isMonthly || formStore.rate.isFixed)) {
    return Number((formStore.rate.dayPriceUSD / 30).toFixed(2));
  } else {
    return formStore.rate.dayPriceUSD;
  }
});

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

const { handleSubmit } = useForm();
let order = ref(null);
let orderSticky = ref(null);
let orderBody = ref(null);

onMounted(() => {
  if (!formStore.bike) {
    router.push("/agent/");
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
});
const onSubmit = handleSubmit(
  async (values) => {
    loading.value = true;
    let formData = new FormData();
    formData.append("file", values.passport);
    let { data } = await useFetch("https://admin.baligo.bike/wp-json/markers/v1/save-file", {
      method: "POST",

      body: formData,
    });
    let fileUrl;
    if (data.value) {
      fileUrl = data.value;
    } else {
      fileUrl = null;
    }

    await commercialStore.agentFormOrder({
      order_date: formatDate(new Date(), true),
      villa_name: formStore.hotelName,
      agent_wa: " +" + formStore.agentNumber.substring(1),
      client_name: values.clientName,
      client_wa: " +" + values.clientPhone.substring(1),
      order_date_start: formatDate(new Date(formStore.dates.start)),
      order_date_end: formatDate(new Date(formStore.dates.end)),
      bike_model: formStore.bike.name,
      adult_helmets: values.adultHelmetCount,
      kid_helmets: values.childHelmetCount,
      raincoats: values.rainCoatCount,
      fullprice: formStore.computedRupPrice,
      file: fileUrl != null ? fileUrl.file_url : " ",
    });
    loading.value = false;
    useRouter().push("/agentsuccess/");
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
