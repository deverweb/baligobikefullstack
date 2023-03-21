<template>
  <section class="service z-[6] rounded-b-[70px] sm:rounded-b-[44px] md:pb-[46px] relative top-[-70px] pt-[190px] md:pt-[145px] pb-[100px] bg-light text-dark">
    <div class="service-container mx-auto max-w-[1433px] px-[7px] md:px-[40px] xsm:px-[20px]">
      <h2 v-html="$t('mainPageServices.title')" class="section-title service-title text-center mb-[79px] md:mb-[67px]"></h2>
      <div class="service-items grid grid-cols-4 xsm:grid-cols-1 md:grid-cols-2 md:gap-x-[11px] items-stretch gap-x-[50px] md:gap-y-[5px] gap-y-[39px]">
        <div class="service-item md:flex md:px-[20px] md:flex-col md:items-center md:text-center py-[30px] md:pt-[26px] pl-[25px] rounded-[10px]" v-for="(service, i) in services" :key="i">
          <div class="service-item-img xsm:mb-[30px] md:mb-[38px] mb-[36px] flex gap-[22px]">
            <img :src="img" class="h-[44px]" :key="i" v-for="(img, i) in service.svg" />
          </div>

          <p
            class="service-item-text md:text-[20px] xsm:text-[16px] xsm:leading-[1.2] xsm:tracking-[-0.8px] xsm:max-w-[250px] md:tracking-[-0.6px] text-[18px] md:max-w-full xl:max-w-[90%] lg:max-w-full max-w-[67%] leading-[1.3] tracking-[-0.9px] font-Helvmed text-black"
          >
            {{ service.text }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
let { locale } = useI18n()
const services = computed(() => {
  if (locale.value == "ru") return ruServices
  if (locale.value == "en") return enServices
})
const ruServices = [
  {
    svg: ["/svg/services/helmet.svg", "/svg/services/clothes.svg"],
    text: "1-2 новых шлема и дождевик включены в стоимость аренды",
  },
  {
    svg: ["/svg/services/phone.svg"],
    text: "Байки оборудованы держателем для телефона или камеры",
  },
  {
    svg: ["/svg/services/insurance.svg"],
    text: "Страховка от угона и поломок включена в стоимость",
  },
  {
    svg: ["/svg/services/repair.svg"],
    text: "Техническая поддержка и беслпатные онлайн-консультации",
  },
  {
    svg: ["/svg/services/bike.svg"],
    text: "Все байки новые - 2022 года выпуска",
  },
  {
    svg: ["/svg/services/surf.svg"],
    text: "Байки оборудованы держателями для серфа (опционально)",
  },
  {
    svg: ["/svg/services/support.svg"],
    text: "Круглосуточная поддержка клиентов и помощь в дороге",
  },
  {
    svg: ["/svg/services/carrepair.svg"],
    text: "Оперативный выезд команды для ремонта или замены байка",
  },
]
const enServices = [
  {
    svg: ["/svg/services/helmet.svg", "/svg/services/clothes.svg"],
    text: "1-2 new helmets included in the rental price.",
  },
  {
    svg: ["/svg/services/phone.svg"],
    text: "Bikes are equipped with a phone and camera holder.",
  },
  {
    svg: ["/svg/services/insurance.svg"],
    text: "Theft and breakdown insurance is included in the price.",
  },
  {
    svg: ["/svg/services/repair.svg"],
    text: "Technical support and free online consultations.",
  },
  {
    svg: ["/svg/services/bike.svg"],
    text: "All bikes are new, 2022 release.",
  },
  {
    svg: ["/svg/services/surf.svg"],
    text: "Bikes are equipped with surf holders (optional).",
  },
  {
    svg: ["/svg/services/support.svg"],
    text: "24/7 customer support and roadside assistance.",
  },
  {
    svg: ["/svg/services/carrepair.svg"],
    text: "Prompt departure of the team to repair or replace the bike.",
  },
]
</script>

<style lang="sass">


.service
	&-item
		position: relative
		transition: all 0.2s ease
		&::before
			content:""
			position: absolute
			left: 0
			right: 0
			top: 0
			bottom: 0
			opacity: 0
			transition: all 0.2s ease
			box-shadow: 10px 10px 40px rgba(0, 0, 0, 0.05)
			border-radius: 10px

		&:hover
			transform: translate(-10px, -10px)
			+r(600)
				transform: translate(0px, -10px)
			&::before
				transform: translate(-10px, -10px)
				+r(600)
					transform: translate(0px, -10px)
				opacity: 1
</style>
