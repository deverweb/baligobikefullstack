<template>
  <main class="flex-grow">
    <div class="rules pt-[211px] pb-[144px] md:pb-[120px] sm:pb-[80px] md:pt-[93px] xsm:pt-[79px] min-h-screen rounded-t-[70px] sm:rounded-t-[44px] bg-dark-700">
      <div class="container">
        <h2 class="section-title text-center mb-[25px] md:mb-[26px] xsm:mb-[30px]">
          {{ $t("faqPage.title") }}
        </h2>
        <h3 class="section-subtitle text-center mb-[60px] md:mb-[26px] xsm:mb-[30px]">
          {{ $t("faqPage.text") }}
        </h3>
      </div>
      <SectionFaqMain class="rounded-t-[70px] bg-transparent sm:rounded-t-[44px]" :questions="questions"></SectionFaqMain>
    </div>
  </main>
</template>

<script setup>
let { locale } = useI18n()
let questions = computed(() => {
  if (locale.value == "ru") return ruQuestions
  if (locale.value == "en") return enQuestions
})

const ruQuestions = [
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
const enQuestions = [
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
</script>

<style lang="sass"></style>
