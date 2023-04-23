<template>
  <section class="pb-[60px]">
    <h2
      v-html="wpData.main_page.faq_title[locale]"
      class="section-title text-center mb-[90px] md:mb-[66px] xsm:mb-[30px]"
    ></h2>
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
import { useWordpressStore } from "~~/store/wordpressStore";

let { locale } = useI18n();
let wpStore = useWordpressStore();
let wpData = wpStore.wpData;
let activeSlide = ref(1);
let activeTabList = ref(false);
const changeTab = (slide) => {
  activeSlide.value = slide;
};

watch(
  () => activeSlide.value,
  () => {
    activeTabList.value = false;
  }
);
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
];
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
];
let slide = computed(() => {
  if (locale.value == "ru") {
    return ruSlide;
  }
  if (locale.value == "eng") {
    return enSlide;
  }
});
let currentTabText = computed(() => {
  return slide.value.find((val) => val.slide == activeSlide.value).text;
});
const questions1 = computed(() => {
  if (locale.value == "ru") return ruQuestions1;
  if (locale.value == "eng") return engQuestions1;
});
const questions2 = computed(() => {
  if (locale.value == "ru") return ruQuestions2;
  if (locale.value == "eng") return engQuestions2;
});
const questions3 = computed(() => {
  if (locale.value == "ru") return ruQuestions3;
  if (locale.value == "eng") return engQuestions3;
});

const createQuestions = (questionArr, langStr) => {
  return questionArr.map((questionObj) => {
    if (questionObj.answer.hasOwnProperty(langStr)) {
      return {
        title: questionObj.question[langStr],
        text: questionObj.answer[langStr],
      };
    }
  });
};
const ruQuestions1 = createQuestions(wpData.main_page.faq_question_main.questions, "ru");
const engQuestions1 = createQuestions(wpData.main_page.faq_question_main.questions, "eng");
const ruQuestions2 = createQuestions(wpData.main_page.faq_question_good.questions, "ru");
const ruQuestions3 = createQuestions(wpData.main_page.faq_question_delivery.questions, "ru");
const engQuestions2 = createQuestions(wpData.main_page.faq_question_good.questions, "eng");
const engQuestions3 = createQuestions(wpData.main_page.faq_question_delivery.questions, "eng");
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
