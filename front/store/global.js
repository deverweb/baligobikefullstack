export const useGlobalStore = defineStore("global", () => {
  let { setLocale } = useI18n()
  let router = useRouter()
  let activeLangSwitcher = ref(false)

  const switchLang = (lang) => {
    setLocale(lang.code)
    activeLangSwitcher.value = false
  }

  let activeBikeModal = ref(false)
  let activeBikeId = ref(null)

  const setActiveBikeModal = (bikeId) => {
    activeBikeId.value = bikeId
    activeBikeModal.value = true
  }

  let activeInvestModal = ref(false)

  const setActiveInvestModal = () => {
    activeInvestModal.value = true
  }

  let activeMobileMenu = ref(false)

  const ruNavigationLinks = [
    {
      label: "Аренда",
      to: "/",
    },

    {
      label: "Частые вопросы",
      to: "/faq",
    },

    {
      label: "О компании",
      to: "/about",
    },
    {
      label: "Инвестиции",
      to: "/invest",
    },

    {
      label: "Контакты",
      to: "/contacts",
    },
  ]
  const enNavigationLinks = [
    {
      label: "Rent",
      to: "/",
    },
    {
      label: "FAQ",
      to: "/faq",
    },
    {
      label: "About",
      to: "/about",
    },

    {
      label: "Investments",
      to: "/invest",
    },
    {
      label: "Contacts",
      to: "/contacts",
    },
  ]

  return {
    activeLangSwitcher,
    switchLang,
    activeMobileMenu,
    ruNavigationLinks,
    enNavigationLinks,
    activeBikeId,
    activeBikeModal,
    setActiveBikeModal,
    activeInvestModal,
    setActiveInvestModal,
  }
})
