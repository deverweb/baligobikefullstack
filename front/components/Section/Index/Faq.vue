<template>
  <section class="pb-[60px]">
    <h2 v-html="$t('mainPageFaq.title')" class="section-title text-center mb-[90px] md:mb-[66px] xsm:mb-[30px]"></h2>
    <div class="container mb-[40px]">
      <ul class="faq-tabs sm:hidden flex items-center">
        <li :class="{ active: activeSlide == 1 }" class="text-center" @click="changeTab(1)">
          {{ $t("mainPageFaq.firstTab") }}
        </li>
        <li :class="{ active: activeSlide == 2 }" class="text-center" @click="changeTab(2)">
          {{ $t("mainPageFaq.secondTab") }}
        </li>
        <li :class="{ active: activeSlide == 3 }" class="text-center" @click="changeTab(3)">
          {{ $t("mainPageFaq.thirdTab") }}
        </li>
      </ul>
      <div class="faq-phone-tabs hidden font-Euroblack text-[12px] sm:block">
        <div @click="activeTabList = !activeTabList" class="faq-phone-current px-[30px]">
          <span>{{ currentTabText }}</span>
          <SvgArrowDownIcon class="transition-transform" :class="{ 'rotate-180': activeTabList }"></SvgArrowDownIcon>
        </div>
        <ul class="faq-phone-list" :class="{ 'mt-[10px]': activeTabList }" v-show="activeTabList">
          <li @click="changeTab(1)" :class="{ active: activeSlide == 1 }" class="pl-[30px] h-[60px] flex items-center">
            {{ $t("mainPageFaq.firstTab") }}
          </li>
          <li @click="changeTab(2)" :class="{ active: activeSlide == 2 }" class="pl-[30px] h-[60px] flex items-center">
            {{ $t("mainPageFaq.secondTab") }}
          </li>
          <li @click="changeTab(3)" :class="{ active: activeSlide == 3 }" class="pl-[30px] h-[60px] flex items-center">
            {{ $t("mainPageFaq.thirdTab") }}
          </li>
        </ul>
      </div>
    </div>
    <div class="faq-questions-inner">
      <SectionFaqMain class="mt-[50px] pt-[0px] top-0" :questions="questions1" v-if="activeSlide == 1"></SectionFaqMain>

      <SectionFaqMain class="mt-[50px] pt-[0px] top-0" :questions="questions2" v-if="activeSlide == 2"></SectionFaqMain>

      <SectionFaqMain class="mt-[50px] pt-[0px] top-0" :questions="questions3" v-if="activeSlide == 3"></SectionFaqMain>
    </div>
  </section>
</template>

<script setup>
let { locale } = useI18n()
let activeSlide = ref(1)
let activeTabList = ref(false)
const changeTab = (slide) => {
  activeSlide.value = slide
}

watch(
  () => activeSlide.value,
  () => {
    activeTabList.value = false
  }
)
const ruSlide = [
  {
    slide: 1,
    text: "Основное",
  },
  {
    slide: 2,
    text: "Полезное",
  },
  {
    slide: 3,
    text: "Доставка и страховка",
  },
]
const enSlide = [
  {
    slide: 1,
    text: "Main",
  },
  {
    slide: 2,
    text: "Useful",
  },
  {
    slide: 3,
    text: "Delivery and insurance",
  },
]
let slide = computed(() => {
  if (locale.value == "ru") {
    return ruSlide
  }
  if (locale.value == "en") {
    return enSlide
  }
})
let currentTabText = computed(() => {
  return slide.value.find((val) => val.slide == activeSlide.value).text
})
const questions1 = computed(() => {
  if (locale.value == "ru") return ruQuestions1
  if (locale.value == "en") return enQuestions1
})
const questions2 = computed(() => {
  if (locale.value == "ru") return ruQuestions2
  if (locale.value == "en") return enQuestions2
})
const questions3 = computed(() => {
  if (locale.value == "ru") return ruQuestions3
  if (locale.value == "en") return enQuestions3
})

const ruQuestions1 = [
  {
    title: "Как арендовать байк?",
    text: "Вы можете сделать это, оставив заявку на сайте baligo.bike или написать нам в WatsApp или Telegram. С вами свяжется менеджер для подтверждения заказа, а также ответит на все интересующие вопросы.",
  },
  {
    title: "Как я могу оплатить за аренду байка?",
    text: "Для Вас мы предусмотрели самые удобные варианты оплаты, в частности вы можете оплатить на сайте или у нас в офисе:<br>Банковскими картами Visa, Mastercard, Мир;<br>Криптовалютой;<br>Наличными в офисе или при доставке байка;",
  },
  {
    title: "Что входит в аренду байка?",
    text: `<div>В стоимость аренды байка по умолчанию входит:
			<ul class="list-disc">
				<li> - Полная страховка (угон и повреждения байка);</li>
				<li> - 2 новых стандартных шлема;</li>
				<li> - Держатель для телефона;</li>
				<li> - Дождевик;</li>
				<li> - Аптечка;</li>
			</ul>
			<br>Также дополнительные аксессуары Вы можете заказать при бронировании байка</div>`,
  },

  {
    title: "Можно уехать на соседний остров?",
    text: "На всей арендованной технике пределы острова Бали покидать запрещено.",
  },
  {
    title: "Как понять, какой байк мне подходит?",
    text: "Всё зависит от Вас, но есть несколько критериев, которые могут Вам помочь выбрать нужную модель:<br>- Если Вы планируете поездки на небольшие расстояния вдвоём или только водитель, то Вам подойдут мини скутеры: Honda Vario, Yamaha Lexi, Yamaha Gear, Yamaha Mio M3, Yamaha Free Go, Yamaha XRide<br>- Если Ваши поездки будут дальними и/или с пассажиром, то рекомендуем выбрать более мощные и комфортные байки - Yamaha Aerox, Yamaha Nmax, Honda PCX, Honda AVD",
  },
  {
    title: "Что делать если я арендовал байк, но мне не удобно/ не нравится?",
    text: "Если вы арендовали у нас байк и он вас не устраивает, то можно всегда с доплатой поменять его на байк лучше либо же просто вернуть транспорт и получить остаток суммы аренды по нашей политике возвратов",
  },
]
const ruQuestions2 = [
  {
    title: "Что делать если я попал в ДТП, а виноват местный. Как договариваться?",
    text: "Важно понимать, что если на Бали происходит дорожное происшествие без серьезного ущерба здоровью, никто не вызывает полицейскую службу и все расходятся полюбовно. В случае конфликтной ситуации на дороге, - самое главное не паниковать и уведомить владельца или компанию по аренде, для скорейшей помощи и решения ситуации.",
  },
  {
    title: "Какие основные штрафы за нарушение ПДД есть на Бали?",
    text: "Пересечение СТОП-ЛИНИИ на красном сигнале светофора -  штраф от 500.000 до 1.000.000 IDR<br>Управление байком без шлема - штраф от 250.000 до 500.000 IDR<br>Пассажир на байке без шлема - штраф от 250.000 до 500.000 IDR<br>Передвижение на байке втроем - штраф от 250.000 до 500.000 IDR<br>Управление байком без МВУ (категория 'А') штраф от 1.000.000 до 1.500.000 IDR.",
  },
  {
    title: "Нужны ли права для аренды байка?",
    text: "Мы не требуем от Вас наличие категории А в водительском удостоверении.Но учтите, что по закону наличие прав для вождения байка с соответствующей категорией обязательно.",
  },
  {
    title: "Что делать, если меня остановила полиция, а прав нет?",
    text: "Если у вас нет прав, то мы советуем откладывать 100 тысяч рупий отдельно в карман для таких ситуаций чтобы оперативно на нейтрально-позитивной волне решать вопрос маленьким пожертвованием полицейским.",
  },
  {
    title: "Можно ли ездить по острову с правами другой страны?",
    text: "Если Ваши водительские права нового образца - пластик и с переводом на английский язык, то они котируются в Индонезии.При возможности желательно сделать международные права( книжечка) перед отлетом, так как даже при наличии прав нового образца полиция может захотеть облегчить ваши карманы.",
  },
  {
    title: "Можно ли сделать местные права?",
    text: "На данный момент можно получить только туристические права, которые будут действовать год по всей Индонезии. Выдают их в полиции без каких либо тестов, обращайтесь и мы поделимся с вами контактом",
  },
  {
    title: "Каким бензином лучше всего заправляться и где это делать?",
    text: "На Бали есть только одна сеть заправок - Pertamania. Вам нужен Pertamax(92) синего цвета. Бензин также можно приобрести практически в любом районе у местных, но он будет дороже, чем на заправке. Они выставляют стеклянные бутылки вдоль дороги или маленькую колонку при своем магазине.",
  },
]
const ruQuestions3 = [
  {
    title: "Бесплатно ли доставляют транспорт ?",
    text: "Любой транспорт арендованный у нас мы доставляем/принимаем в радиусе 25 км от нашего автопарка в Чангу, в наше рабочее время. Дальние доставки или доставка/возврат вне рабочего времени возможны, но за дополнительную плату.",
  },
  {
    title: "Есть ли у вас страховка техники и на каких условиях?",
    text: "На все байки мы предоставляем полную страховку от угона и повреждений, которая входит в стоимость аренды. Мы не предоставляем технику в аренду без полной страховки.",
  },
  {
    title: "Что делать, если украли байк?",
    text: "На все наши байки мы предоставляем полную страховку от угона и повреждений. Если байк украли - необходимо известить нас и мы организуем замену.",
  },
  {
    title: "Могу ли я передать арендованный байк другому лицу?",
    text: "Если срок аренды еще не подошел к концу и Вы решили, что Вам транспорт больше не нужен, то у Вас есть возможность передать байк другому лицу. Для этого Вам надо обратиться к нашему менеджеру и попросить переоформить договор на другого человека. Стоимость процедуры переоформления - $10",
  },
  {
    title: "Правила возврата денежных средств",
    text: "Если по каким-либо причинам у Вас сдвинулись даты поездки, то Вы можете не переживать за произведенную оплату. Оплатой можно воспользоваться позже или подарить  другому человеку. Оплата не сгорает и ей можно воспользоваться в любой момент.",
  },
]

const enQuestions1 = [
  {
    title: "How to rent a bike?",
    text: "You can do this by leaving a request on the baligo.bike website or write to us on WatsApp or Telegram. The manager will contact you to confirm the order, as well as answer all your questions.",
  },
  {
    title: "How can I pay for bike rental?",
    text: "For you, we have provided the most convenient payment options, in particular, you can pay on the website or in our office:<br>- Bank cards Visa, Mastercard, Mir;<br>- Cryptocurrency;<br>- Cash at the office or upon delivery of the bike.",
  },
  {
    title: "What is included in the bike rental?",
    text: `<div>The default bike rental price includes:
			<ul class="list-disc">
				<li> - Full insurance (theft and damage to the bike);</li>
				<li> - 2 new standard helmets;</li>
				<li> - Holder for your mobile phone;</li>
				<li> - Raincoat;</li>
				<li> - First aid kit.</li>
			</ul>
			<br>You can also order additional accessories when booking a bike.</div>`,
  },

  {
    title: "Can I go to a neighboring island?",
    text: "On all rented equipment it is forbidden to leave the island of Bali.",
  },
  {
    title: "How do I know which bike is right for me?",
    text: `It all depends on you, but there are several criteria that can help you choose the right model:
		<br>- If you plan to travel short distances together or only the driver, then mini scooters are suitable for you: Honda Vario, Yamaha Lexi, Yamaha Gear, Yamaha Mio M3, Yamaha Free Go, Yamaha XRide.
		<br>- If your trips are long and/or with a passenger, we recommend choosing more powerful and comfortable bikes - Yamaha Aerox, Yamaha Nmax, Honda PCX, Honda AVD.`,
  },
  {
    title: "What should I do if I rented a bike, but I don’t feel comfortable / don’t like it?",
    text: "If you have rented a bike from us and it does not suit you, then you can always exchange it for a bike with a surcharge, or simply return the vehicle and receive the rest of the rental amount according to our return policy.",
  },
]
const enQuestions2 = [
  {
    title: "What to do if I got into an accident, and the local is to blame. How to negotiate?",
    text: "It is important to understand that if a traffic accident occurs in Bali without serious damage to health, no one calls the police service and everyone disperses amicably. In the event of a conflict situation on the road, the most important thing is not to panic and notify the owner or the rental company so that they can help and resolve the situation as soon as possible.",
  },
  {
    title: "What are the main fines for traffic violations in Bali?",
    text: `- Crossing the STOP LINE at a red traffic light - fine from 500.000 to 1.000.000 IDR.
		<br>- Riding a bike without a helmet - fine from 250.000 to 500.000 IDR.
		<br>- A passenger on a bike without a helmet - fine from 250.000 to 500.000 IDR.
		<br>- Riding a bike in three - fine from 250.000 to 500.000 IDR.
		<br>- Driving a bike without an IDP (category "A") fine from 1.000.000 to 1.500.000 IDR.`,
  },
  {
    title: "Do I need a license to rent a bike?",
    text: "We do not require you to have a category A driver's license. But please note that according to the law, it is mandatory to have a license to drive a bike with the appropriate category.",
  },
  {
    title: "What should I do if the police stopped me, but I don’t have my license?",
    text: "If you do not have rights, then we advise you to set aside 100 thousand rupees separately in your pocket for such situations in order to quickly resolve the issue on a neutral-positive wave with a small donation to the police.",
  },
  {
    title: "Is it possible to drive around the island with the rights of another country?",
    text: "If your new driver's license is plastic and translated into English, then it is quoted in Indonesia. If possible, it is advisable to make an international license (booklet) before departure, since even if you have a new type of license, the police may want to lighten your pockets.",
  },
  {
    title: "Is it possible to get a local driver's license?",
    text: "At the moment, you can only get a tourist license, which will be valid for a year throughout Indonesia. They are issued by the police without any tests, contact us and we will share the contact with you.",
  },
  {
    title: "What kind of gasoline is best to refuel and where to do it?",
    text: "There is only one gas station network in Bali - Pertamania. You need Pertamax(92) in blue. Gasoline can also be purchased in almost any area from locals, but it will be more expensive than at a gas station. They display glass bottles along the road or a small column at their store.",
  },
]
const enQuestions3 = [
  {
    title: "Is transport delivered free of charge?",
    text: "We deliver/receive any transport rented from us within a radius of 25 km from our fleet in Canggu, during our working hours. Long-distance deliveries or delivery/returns outside business hours are possible, but at an additional cost.",
  },
  {
    title: "Do you have equipment insurance and under what conditions?",
    text: "For all bikes we provide full insurance against theft and damage, which is included in the rental price. We do not rent equipment without full insurance.",
  },
  {
    title: "What to do if the bike was stolen?",
    text: "We provide full insurance against theft and damage for all our bikes. If the bike is stolen - you need to notify us and we will arrange a replacement.",
  },
  {
    title: "Can I transfer the rented bike to another person?",
    text: "If the rental period has not yet expired and you decide that you no longer need transport, then you have the opportunity to transfer the bike to another person. To do this, you need to contact our manager and ask to renew the contract for another person. The cost of the renewal procedure is $10.",
  },
  {
    title: "Refund policy",
    text: "If for some reason your travel dates have shifted, then you can not worry about the payment made. Payment can be used later or presented to another person. Payment does not expire and can be used at any time",
  },
]
</script>

<style lang="sass">

.faq
	&-phone
		&-list
			border-radius: 12px
			background-color: #181818
			li
				opacity: 0.2
				transition: 0.2s ease all
				&:hover
					opacity: 1
				&.active
					opacity: 1
		&-tabs
			cursor: pointer
		&-current
			cursor: pointer
			border-radius: 12px
			height: 60px
			border: 1px solid #909090
			display: flex
			align-items: center
			justify-content: space-between
	&-tabs
		display: flex
		align-items: center
		white-space: nowrap
		+r(768)
			display: none
		li
			flex-grow: 1
			flex-basis: 0px
			text-transform: uppercase
			+eu
			font-size: 20px
			color: $light
			padding-bottom: 30px
			opacity: 0.2
			transition: all 0.2s ease
			cursor: pointer
			border-bottom: 2px solid rgba($light, 0.2)
			+r(1200)
				font-size: 16px
			&.active
				opacity: 1
				border-bottom: 2px solid $light
</style>
