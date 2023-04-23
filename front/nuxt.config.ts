// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    // layoutTransition: true,
    // pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: "Baligo",
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
        },
        { "http-equiv": "x-ua-compatible", content: "IE=edge" },
        // {
        // hid: "description",
        // name: "description",
        // content: "Official Nuxt.js starter for CodeSandBox"
        // }
      ],
      script: [
        // {
        // 			src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAqNPzsf4Ee-OuexRYSOddBXzMHQnHuxME&libraries=places",
        // 			async: true,
        // 			defer: true,
        // 		},
        {
          src: "https://www.googletagmanager.com/gtag/js?id=G-VSHN7NHQL4",
          type: "text/javascript",
          async: true,
        },
        {
          type: "text/javascript",
          async: true,
          innerHTML: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);}gtag('js', new Date()); gtag('config', 'G-VSHN7NHQL4');`,
        },
        {
          type: "text/javascript",
          async: true,
          innerHTML: `!function(f,b,e,v,n,t,s)
					{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
					n.callMethod.apply(n,arguments):n.queue.push(arguments)};
					if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
					n.queue=[];t=b.createElement(e);t.async=!0;
					t.src=v;s=b.getElementsByTagName(e)[0];
					s.parentNode.insertBefore(t,s)}(window, document,'script',
					'https://connect.facebook.net/en_US/fbevents.js');
					fbq('init', '1234729477162668');
					fbq('track', 'PageView');
					</script>`,
        },
        {
          type: "text/javascript",
          async: true,
          innerHTML: `window.replainSettings = { id: '1264a380-7025-4ec0-9c79-522e48fd5eff' }; 
					(function(u){var s=document.createElement('script');s.async=true;s.src=u; 
					var x=document.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x); 
					})('https://widget.replain.cc/dist/client.js'); 
					`,
        },
        // {
        // 	children: `<script async src="https://www.googletagmanager.com/gtag/js?id=G-123123123"></>`,
        // },
        // {
        // 	children: `<script>window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);}gtag('js', new Date()); gtag('config', 'G-VSHN7NHQL4');</script>`
        // }
      ],
      // script: [{ src: "https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js" }],
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@import "@/assets/sass/_vars.sass"',
        },
      },
    },
  },

  css: ["@/assets/sass/main.sass"],
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    ["@pinia/nuxt", { autoImports: ["defineStore", "acceptHMRUpdate"] }],
    "nuxt-swiper",
    // "@vueuse/nuxt",
  ],

  plugins: [
    { src: "~/plugins/v-calendar", ssr: false, mode: "client" },
    { src: "~/plugins/vue-tel-input", ssr: false, mode: "client" },
    { src: "~/plugins/slider", ssr: false, mode: "client" },
  ],
  runtimeConfig: {
    CLIENT_ID: process.env.CLIENT_ID,
    SECRET_ID: process.env.SECRET_ID,
    GOOGLE_MAPS_API_KEY: "AIzaSyB-pliMJcE5T6ImjjMfFNzJ3vobhPfuRNs",
    public: {
      CENT_API_TOKEN: process.env.CENT_API_TOKEN,
      CENT_SHOP_ID: process.env.CENT_SHOP_ID,
    },
  },
  swiper: {
    modules: ["navigation"],
    styleLang: "css",
  },
  i18n: {
    strategy: "no_prefix",
    // skipSettingLocaleOnNavigate: true,
    locales: [
      {
        code: "eng",
        iso: "en-US",
        name: "English",
      },
      {
        iso: "ru-RU",
        code: "ru",
        name: "Русский",
      },
      // {
      //   code: "ua",
      //   name: "Український",
      // },
    ],

    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
    vueI18n: {
      legacy: false,
      fallbackLocale: "eng",
      locale: "ru",
      messages: {
        ru: {
          validity: {
            needToSelect: "необходимо выбрать",
          },
          buttonBooking: "Забронировать",
          buttonLearnMore: "Подробнее",
          mainPageFirst: {
            title: "Аренда<br>байков<br>на бали!",
            button: "Забронировать",
            social: {
              onlyNewBike: "Только новые байки!",
              insurance: "Полная страховка!",
            },
          },
          mainPageSecond: {
            title: "Как это работает?",
            subtitle: "Мы принимаем онлайн оплату в рублях, гривнах, долларах, евро и криптовалюте.",
          },
          mainPageSlider: {
            title: "Каталог<br>байков",
            subtitle: "Выберите и забронируйте байк из каталога",
          },
          mainPageForm: {
            title: "Забронируйте байк",
            subtitle: "Мы доставим ваш байк прямо к вилле или вы можете забрать его сами в нашем офисе",
          },
          mainPageServices: {
            title: "КОМПЛЕКСНАЯ<br />УСЛУГА АРЕНДЫ",
          },
          mainPageFaq: {
            title: "Частые<br>вопросы",
            firstTab: "Основные",
            secondTab: "Полезное",
            thirdTab: "Доставка и страховка",
          },
          mainPageInvest: {
            title: "ИНВЕСТИРУЙТЕ БЕЗ РИСКОВ",
            text: "В связи с политической обстановкой в мире, мы решили предложить инвесторам диверсификацию рисков — инвестиции в бизнес аренды скутеров на острове Бали. Индонезия — это один из самых политически стабильных и быстро развивающихся рынков Азии и всего мира.",
            btnText: "Подробнее об инвестициях",
          },
          contactsComponent: {
            title: "Контакты",
            description:
              "Наш офис расположен в самом сердце Убуда. Вы Можете добраться к нам на общественном транспорте или на такси.",
            communication: "Связь с мессенджерах:",
            clickInfo: "Нажмите, чтобы<br>построить маршрут!",
          },
          faqPage: {
            title: "НУЖНО ЗНАТЬ",
            text: "Все что вам нужно знать о нашем сервисе!",
          },
          datePickerComponent: {
            mobileTitle: "Выберите даты брони",
            mobileDescription: "Выберите дату взятия в аренду и дату возврата, чтобы забронировать байк",
          },
          footerRights: {
            termsOfuse: "Пользовательское соглашение",
            rentBike: "Забронировать байк",
            oferta: "Договор оферты",
            terms: "Условия аренды",
            privacyPolicy: "Политика конфиденциальности",
            dev: "Разработка сайта:",
            devName: "Дмитрий Челпанов",
          },
          terms: {
            title: "Условия аренды",
            fullHtmlText:
              "<h2 class='subhead pt-[18px]'>1. СРОК АРЕНДЫ И УСЛОВИЯ БРОНИРОВАНИЯ / ОПЛАТЫ</h2><br />1.1 Минимальный срок аренды транспорта в нашей компании начинаетсяот X дней. Мы можем предоставить транспортное средство на меньший период,однако стоимость услуги будет идентична аренде за Х дней. <br />1.2 Срокаренды транспортного средства определяется исходя из выбранных дат иколичества дней аренды на сайте baligo.bike и указывается в договореаренды при получении транспортного средства. О необходимости продлениясрока аренды необходимо уведомлять минимум за 48 часов до даты возврататранспортного средства. Если используемое клиентом транспортное средствоуже забронировано на последующие даты, мы предложим альтернативную замену,если таковая будет в наличии. Стоимость продления по-умолчаниюрассчитывается из стандартных расценок нашего сервиса. <br />1.3 Оплатааренды должна быть осуществлена в полном объеме непосредственно во времябронирования на сайте baligo.bike либо во время доставки, при получениитранспортного средства на острове Бали. Оплата производится наличными вдолларах США (USD), евро (EURO), австралийских долларах (AUD),индонезийских рупиях (IDR) и других валютах по текущему курсу. <br />1.4Если вы обратились к нам, уже будучи на острове Бали или не успелипредварительно забронировать необходимое транспортное средство мыпостараемся оперативно доставить выбранную модель по факту обращения, еслиона есть в наличии или же предложим подходящую альтернативу. <br />1.5 Придосрочном завершении аренды по инициативе клиента мы возвращаем 50% отстоимости оставшегося срока аренды транспортного средства. Возвратденежных средств невозможен в следующих случаях:<ul class='list-disc pl-[27px]'>	<li>При аренде на минимальный срок (Х дней)</li>	<li>		При аренде на длительный срок (до 30 дней) с фиксированной стоимостью,		если текущий срок аренды до отмены составил более 12 дней.	</li></ul><h2 class='subhead uppercase'>	2. Водительские права и политика доставки/возврата</h2><br />2.1 Официально на территории Индонезии для управления транспортнымсредством необходимо иметь при себе действующее международное водительскоеудостоверение с соответствующей категорией. <br />2.2 В стоимость арендынашей техники включены бесплатная доставка и возврат при выполненииследующих условий: <br /><ul class='list-disc pl-[27px]'>	<li>		Время доставки и возврата находится в пределах от 9 до 19:00 по Бали.	</li>	<li>		Арендатор должен предоставить локацию для доставки / возврата, удобное		время и другие детали не позднее чем за 24 часа.	</li>	<li>		Место доставки и возврата должно находиться в пределах 25 км езды от		офиса нашей компании, расположенной в районе Чангу (Canggu). В зону		бесплатной доставки попадают следующие районы Бали: Кута, Семиньяк,		Керобокан, Чангу, Нуса Дуа, Джимбаран, Санур, Букит, южная часть		Убуда, Денпасар	</li></ul>2.3 Для уточнения возможности и стоимости доставки в отдаленные районы(Амед, Чандидаса, Ловина, Балиан, Медеви, северный Убуд) или для доставки/ возврата в часы, не совпадающие с работой нашего офиса пожалуйстапроконсультируйтесь заранее с нашими менеджерами. <br />2.4 Если уарендатора нет возможности осуществить возврат транспортного средствалично, необходимо заранее уведомить нашего менеджера для согласованияпроцедуры возврата. <br /><h2 class='subhead'>	3. СТРАХОВКА ТРАНСПОРТНОГО СРЕДСТВА И ОТВЕТСТВЕННОСТЬ КЛИЕНТА</h2><br />3.1 Наша компания предоставляет бесплатную опцию с полной страховкойот повреждений в результате дтп / падения и угона транспортного средствана всю мототехнику (скутеры и мотоциклы). <br />3.2 Страховка на мототехнику не покрывает ущерб в следующих случаях:<ul class='list-disc pl-[55px] sm:pl-[25px]'>	<li>		Повреждение покрышек вследствие прокола или пореза по вине арендатора,		ответственность по устранению повреждений (заклеить, накачать		покрышку) несет арендатор. Если покрышка требует замены по причине		износа (нет маркировки, стерт протектор, сама покрышка разорвана), то		это ответственность нашей компании.	</li>	<li>		Необходимая замена аккумулятора по причине его полной разрядки по вине		арендатора (включенные фары, габариты и т.д.).	</li>	<li>Умышленная порча транспортного средства.</li>	<li>		Использование транспортного средства при выезде с дорог общего		пользования (например, пляж, горы, поле, джунгли и т.д.).	</li></ul>3.3 В случае инцидента, при котором пострадало арендованное транспортноесредство клиент обязан известить арендодателя в течение 24 часов с моментааварии и предоставить необходимую информацию. Если необходимая информацияне была предоставлена в отведенный срок арендатор берет на себя всюответственность за повреждения. <br />3.4 Запрещено ремонтироватьарендованное ТС самостоятельно или в любом сервисе (включая официальныхдилеров) без разрешения со стороны арендодателя. Наша компания не будетпокрывать расходы на ремонт, выполненный без согласования, а также вправеналожить штраф на арендатора в размере 100 USD + сумма нанесенного ущерба.<br />3.5 Арендатор несет полную ответственность в случае нанесения ущербатретьей стороне в результате инцидента. <br />3.6 Арендатор несет полнуюответственность за транспортное средство и любые последствия, вызванныепередачей транспортного средства третьему лицу, не указанному в договореаренды. <br />3.7 Арендатор несет полную ответственность за любой ущербтранспортного средства при выезде с дорог общего пользования (например,пляж, горы, поле, джунгли и т.д.). <br />3.8 В случае утери илизначительных повреждений мото шлема арендатор обязан возместить стоимостьпокупки нового аналога, чтобы следующему клиенту достался также отличныйшлем. <br />3.9 В случае потери ключа от транспортного средства арендаторобязан возместить стоимость восстановления нового аналога. <br />3.10 Всеарендуемые автомобили и мототехника предоставляются вместе с оригиналомрегистрации транспортного средства, в случае утери документов с клиентавзимается штраф 80$. <br />3.11 В случае, если арендатор нарушает условияданного соглашения, арендодатель имеет право немедленно забратьтранспортное средство без возмещения стоимости аренды. <br />3.12 Нашакомпания не несет ответственности за ущерб, убытки, травмы и смерть,нанесенные арендатору или арендатором другим участникам движения,водителям или пассажирам, участвующим в авариях. Арендодатель не несетответственности за неспособность выполнить свои обязательства вызваннуюпроблемами, находящимися вне разумного контроля компании, включая, помимопрочего, административные действия, пожар, наводнение, эпидемию, войну,беспорядки и терроризм. Наша компания не несет ответственности закакие-либо нелегальные действия или действия против закона РеспубликиИндонезия. <br /><h2 class='subhead uppercase'>4. Дополнительные услуги и возможности</h2><br />4.1 Мы предлагаем ежедневную техническую поддержку с 9:00 до 20:00на Бали. Эта услуга бесплатна, если проблема с оборудованием возникла непо вашей вине. Стоимость услуги, в случае ошибки с вашей стороны,составляет 25 долларов США. <br />4.2 С любым арендованным велосипедомпредоставляются два шлема в хорошем состоянии. Совершенно новые шлемыдоступны по запросу за плату в размере 10 долларов США. Шлемы для детейпредоставляются по запросу без дополнительной оплаты. Пожалуйста, сообщитеменеджеру заранее, если требуется размер шлема S, M или L. В случае, еслишлем не подойдет, будет предоставлена ​​бесплатная замена. <br /><h2 class='subhead'>5. ОГРАНИЧЕНИЯ И ДОПОЛНИТЕЛЬНЫЕ УСЛОВИЯ</h2><br />5.1 Переоформление заключенного договора на другого арендатора ссохранением текущих сроков аренды возможно за дополнительную плату 20$.<br />5.2 Вся предоставляемые в аренду транспортные средства в нашейкомпании сдаются без ограничения по пробегу. <br />5.3 На арендуемойтехнике запрещено покидать пределы острова Бали.",
          },
        },
        eng: {
          validity: {
            needToSelect: "have to select",
          },
          buttonBooking: "Booking",
          buttonLearnMore: "Learn more",
          mainPageFirst: {
            title: "Bike rental<br>in Bali!",
            button: "Booking",
            social: {
              onlyNewBike: "Only new bikes!",
              insurance: "Full insurance!",
            },
          },
          mainPageSecond: {
            title: "How it works?",
            subtitle: "We accept online payments in rubles, hryvnias, dollars and euros.",
          },
          mainPageSlider: {
            title: "Bike<br>catalog",
            subtitle: "Choose and book a bike from the catalog",
          },
          mainPageForm: {
            title: "Book a bike",
            subtitle: "We will deliver your bike directly to the villa or you can pick it up at our office",
          },
          mainPageServices: {
            title: "Complete<br>rental service",
          },
          mainPageFaq: {
            title: "FAQ",
            firstTab: "Main",
            secondTab: "Useful",
            thirdTab: "Delivery and insurance",
          },
          mainPageInvest: {
            title: "INVEST WITHOUT RISK",
            text: "Due to the political situation in the world, we decided to offer investors a diversification of risks - investment in the business of renting scooters in Bali. Indonesia is one of the most politically stable and fastest growing markets in Asia and around the world.",
            btnText: "More about investments",
          },
          contactsComponent: {
            title: "Contacts",
            description: "Our office is located in the heart of Changgu. You can reach us by public transport or taxi.",
            communication: "Communication in messengers:",
            clickInfo: "Click to<br>get directions!",
          },
          faqPage: {
            title: "NEED TO KNOW",
            text: "Everything you need to know about our service!",
          },
          datePickerComponent: {
            mobileTitle: "Select booking dates",
            mobileDescription: "Select your rental date and return date to book your bike",
          },
          footerRights: {
            termsOfuse: "Terms of use",
            rentBike: "Book a bike",
            oferta: "Contract offer",
            terms: "Rent terms",
            privacyPolicy: "Privacy Policy",
            dev: "Website developer: ",
            devName: "Dmitry Chelpanov",
          },
          terms: {
            title: "Rent terms",
            fullHtmlText:
              "<h2 class='subhead pt-[18px]'>1.TERM OF RENTAL AND TERMS AND CONDITIONS OF BOOKING / PAYMENT</h2><br />1.1 The minimum rental period for vehicles in our company starts from X days. We can provide a vehicle for a shorter period, but the cost of the service will be identical to renting for X days. <br />1.2 The rental period of the vehicle is determined based on the selected dates and the number of rental days on the baligo.bike website and is indicated in the rental agreement upon receipt of the vehicle. The need to extend the rental period must be notified at least 48 hours before the date of return of the vehicle. If the vehicle used by the customer is already booked for subsequent dates, we will offer an alternative replacement if available. The cost of renewal by default is calculated from the standard rates of our service. <br />1.3 Payment of the rental must be made in full directly at the time of booking on the baligo.bike website or at the time of delivery, upon receipt of the vehicle in Bali. Payment is made in cash in US dollars (USD), euros (EURO), Australian dollars (AUD), Indonesian rupiahs (IDR) and other currencies at the current rate. <br />1.4 If you contacted us while already on the island of Bali or did not have time to pre-book the necessary vehicle, we will try to promptly deliver the selected model upon request, if it is available, or we will offer a suitable alternative. <br />1.5 In case of early termination of the rental at the initiative of the client, we refund 50% of the cost of the remaining rental period of the vehicle. Refunds are not possible in the following cases:<ul class='list-disc pl-[27px]'>	<li>When renting for a minimum period (X days))</li>	<li>		When renting for a long term (up to 30 days) with a fixed price, if the current rental period before cancellation was more than 12 days.</li></ul><h2 class='subhead uppercase'>	2.DRIVER'S LICENSE AND SHIPPING/RETURN POLICY</h2><br />2.1 Officially, in order to drive a vehicle in Indonesia, you must have a valid international driving license with the appropriate category. <br />2.2 The cost of renting our equipment includes free shipping and returns under the following conditions: <br /><ul class='list-disc pl-[27px]'>	<li>		Delivery and return times are between 9:00 and 19:00 Bali.	</li>	<li>		The tenant must provide the location for delivery / return, convenient time and other details no later than 24 hours.	</li>	<li>		The delivery and return location must be within a 25 km drive from our company office located in Canggu area. The following areas of Bali fall within the free delivery zone: Kuta, Seminyak, Kerobokan, Canggu, Nusa Dua, Jimbaran, Sanur, Bukit, South Ubud, Denpasar</li></ul>2.3 To clarify the possibility and cost of delivery to remote areas (Amed, Candidasa, Lovina, Balian, Medevi, North Ubud) or for delivery / return during hours that do not coincide with the work of our office, please consult our managers in advance. <br />2.4  If the tenant does not have the opportunity to return the vehicle personally, it is necessary to notify our manager in advance to agree on the return procedure. <br /><h2 class='subhead'>	3. VEHICLE INSURANCE AND CUSTOMER LIABILITY</h2><br />3.1 Our company provides a free option with full insurance against damage as a result of an accident / fall and theft of a vehicle for all motor vehicles (scooters and motorcycles). <br />3.2 Motorcycle insurance does not cover damage in the following cases:<ul class='list-disc pl-[55px] sm:pl-[25px]'>	<li>		Damage to tires due to a puncture or cut due to the fault of the lessee, the lessee is responsible for repairing the damage (glue, inflate the tire). If the tire needs to be replaced due to wear (no markings, worn tread, the tire itself is torn), then this is the responsibility of our company.</li>	<li>		Necessary replacement of the battery due to its complete discharge due to the fault of the tenant (headlights on, dimensions, etc.).	</li>	<li>Intentional damage to the vehicle.</li>	<li>		Using the vehicle when leaving public roads (eg beach, mountains, field, jungle, etc.).	</li></ul>3.3 In the event of an incident in which the rented vehicle was damaged, the client is obliged to notify the lessor within 24 hours of the accident and provide the necessary information. If the necessary information was not provided within the allotted time, the tenant assumes all responsibility for damage. <br />3.4 It is forbidden to repair the rented vehicle independently or in any service (including official dealers) without permission from the lessor. Our company will not cover the cost of repairs made without agreement, and also has the right to impose a fine on the tenant in the amount of 100 USD + the amount of damage caused.<br />3.5 The Renter bears full responsibility in case of damage to a third party as a result of the incident. <br />3.6 The Renter is fully responsible for the vehicle and any consequences caused by the transfer of the vehicle to a third party not specified in the rental agreement. <br />3.7 The Renter is fully responsible for any damage to the vehicle when leaving the road.",
          },
        },
      },
    },
  },
});
