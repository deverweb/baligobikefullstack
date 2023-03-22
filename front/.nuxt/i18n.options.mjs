export const localeCodes = ["en","ru"]

export const localeMessages = {
}

export const additionalMessages = Object({"en":[],})

export const resolveNuxtI18nOptions = async (context) => {
  const nuxtI18nOptions = Object({})
  const vueI18nOptionsLoader = async (context) => Object({"legacy":false,"locale":"ru","messages": Object({"ru":{
  "validity": {
    "needToSelect": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["необходимо выбрать"])}
  },
  "buttonBooking": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Забронировать"])},
  "buttonLearnMore": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Подробнее"])},
  "mainPageFirst": {
    "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Аренда<br>байков<br>на бали!"])},
    "button": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Забронировать"])},
    "social": {
      "onlyNewBike": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Только новые байки!"])},
      "insurance": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Полная страховка!"])}
    }
  },
  "mainPageSecond": {
    "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Как это работает?"])},
    "subtitle": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Мы принимаем онлайн оплату в рублях, гривнах, долларах, евро и криптовалюте."])}
  },
  "mainPageSlider": {
    "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Каталог<br>байков"])},
    "subtitle": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Выберите и забронируйте байк из каталога"])}
  },
  "mainPageForm": {
    "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Забронируйте байк"])},
    "subtitle": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Мы доставим ваш байк прямо к вилле или вы можете забрать его сами в нашем офисе"])}
  },
  "mainPageServices": {
    "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["КОМПЛЕКСНАЯ<br />УСЛУГА АРЕНДЫ"])}
  },
  "mainPageFaq": {
    "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Частые<br>вопросы"])},
    "firstTab": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Основные"])},
    "secondTab": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Полезное"])},
    "thirdTab": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Доставка и страховка"])}
  },
  "mainPageInvest": {
    "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["ИНВЕСТИРУЙТЕ БЕЗ РИСКОВ"])},
    "text": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["В связи с политической обстановкой в мире, мы решили предложить инвесторам диверсификацию рисков — инвестиции в бизнес аренды скутеров на острове Бали. Индонезия — это один из самых политически стабильных и быстро развивающихся рынков Азии и всего мира."])},
    "btnText": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Подробнее об инвестициях"])}
  },
  "contactsComponent": {
    "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Контакты"])},
    "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Наш офис расположен в самом сердце Убуда. Вы Можете добраться к нам на общественном транспорте или на такси."])},
    "communication": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Связь с мессенджерах:"])},
    "clickInfo": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Нажмите, чтобы<br>построить маршрут!"])}
  },
  "faqPage": {
    "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["НУЖНО ЗНАТЬ"])},
    "text": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Все что вам нужно знать о нашем сервисе!"])}
  },
  "datePickerComponent": {
    "mobileTitle": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Выберите даты брони"])},
    "mobileDescription": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Выберите дату взятия в аренду и дату возврата, чтобы забронировать байк"])}
  },
  "footerRights": {
    "termsOfuse": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Пользовательское соглашение"])},
    "rentBike": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Забронировать байк"])},
    "oferta": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Договор оферты"])},
    "terms": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Условия аренды"])},
    "privacyPolicy": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Политика конфиденциальности"])},
    "dev": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Разработка сайта:"])},
    "devName": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Дмитрий Челпанов"])}
  },
  "terms": {
    "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Условия аренды"])},
    "fullHtmlText": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["<h2 class='subhead pt-[18px]'>1. СРОК АРЕНДЫ И УСЛОВИЯ БРОНИРОВАНИЯ / ОПЛАТЫ</h2><br />1.1 Минимальный срок аренды транспорта в нашей компании начинаетсяот X дней. Мы можем предоставить транспортное средство на меньший период,однако стоимость услуги будет идентична аренде за Х дней. <br />1.2 Срокаренды транспортного средства определяется исходя из выбранных дат иколичества дней аренды на сайте baligo.bike и указывается в договореаренды при получении транспортного средства. О необходимости продлениясрока аренды необходимо уведомлять минимум за 48 часов до даты возврататранспортного средства. Если используемое клиентом транспортное средствоуже забронировано на последующие даты, мы предложим альтернативную замену,если таковая будет в наличии. Стоимость продления по-умолчаниюрассчитывается из стандартных расценок нашего сервиса. <br />1.3 Оплатааренды должна быть осуществлена в полном объеме непосредственно во времябронирования на сайте baligo.bike либо во время доставки, при получениитранспортного средства на острове Бали. Оплата производится наличными вдолларах США (USD), евро (EURO), австралийских долларах (AUD),индонезийских рупиях (IDR) и других валютах по текущему курсу. <br />1.4Если вы обратились к нам, уже будучи на острове Бали или не успелипредварительно забронировать необходимое транспортное средство мыпостараемся оперативно доставить выбранную модель по факту обращения, еслиона есть в наличии или же предложим подходящую альтернативу. <br />1.5 Придосрочном завершении аренды по инициативе клиента мы возвращаем 50% отстоимости оставшегося срока аренды транспортного средства. Возвратденежных средств невозможен в следующих случаях:<ul class='list-disc pl-[27px]'>\t<li>При аренде на минимальный срок (Х дней)</li>\t<li>\t\tПри аренде на длительный срок (до 30 дней) с фиксированной стоимостью,\t\tесли текущий срок аренды до отмены составил более 12 дней.\t</li></ul><h2 class='subhead uppercase'>\t2. Водительские права и политика доставки/возврата</h2><br />2.1 Официально на территории Индонезии для управления транспортнымсредством необходимо иметь при себе действующее международное водительскоеудостоверение с соответствующей категорией. <br />2.2 В стоимость арендынашей техники включены бесплатная доставка и возврат при выполненииследующих условий: <br /><ul class='list-disc pl-[27px]'>\t<li>\t\tВремя доставки и возврата находится в пределах от 9 до 19:00 по Бали.\t</li>\t<li>\t\tАрендатор должен предоставить локацию для доставки / возврата, удобное\t\tвремя и другие детали не позднее чем за 24 часа.\t</li>\t<li>\t\tМесто доставки и возврата должно находиться в пределах 25 км езды от\t\tофиса нашей компании, расположенной в районе Чангу (Canggu). В зону\t\tбесплатной доставки попадают следующие районы Бали: Кута, Семиньяк,\t\tКеробокан, Чангу, Нуса Дуа, Джимбаран, Санур, Букит, южная часть\t\tУбуда, Денпасар\t</li></ul>2.3 Для уточнения возможности и стоимости доставки в отдаленные районы(Амед, Чандидаса, Ловина, Балиан, Медеви, северный Убуд) или для доставки/ возврата в часы, не совпадающие с работой нашего офиса пожалуйстапроконсультируйтесь заранее с нашими менеджерами. <br />2.4 Если уарендатора нет возможности осуществить возврат транспортного средствалично, необходимо заранее уведомить нашего менеджера для согласованияпроцедуры возврата. <br /><h2 class='subhead'>\t3. СТРАХОВКА ТРАНСПОРТНОГО СРЕДСТВА И ОТВЕТСТВЕННОСТЬ КЛИЕНТА</h2><br />3.1 Наша компания предоставляет бесплатную опцию с полной страховкойот повреждений в результате дтп / падения и угона транспортного средствана всю мототехнику (скутеры и мотоциклы). <br />3.2 Страховка на мототехнику не покрывает ущерб в следующих случаях:<ul class='list-disc pl-[55px] sm:pl-[25px]'>\t<li>\t\tПовреждение покрышек вследствие прокола или пореза по вине арендатора,\t\tответственность по устранению повреждений (заклеить, накачать\t\tпокрышку) несет арендатор. Если покрышка требует замены по причине\t\tизноса (нет маркировки, стерт протектор, сама покрышка разорвана), то\t\tэто ответственность нашей компании.\t</li>\t<li>\t\tНеобходимая замена аккумулятора по причине его полной разрядки по вине\t\tарендатора (включенные фары, габариты и т.д.).\t</li>\t<li>Умышленная порча транспортного средства.</li>\t<li>\t\tИспользование транспортного средства при выезде с дорог общего\t\tпользования (например, пляж, горы, поле, джунгли и т.д.).\t</li></ul>3.3 В случае инцидента, при котором пострадало арендованное транспортноесредство клиент обязан известить арендодателя в течение 24 часов с моментааварии и предоставить необходимую информацию. Если необходимая информацияне была предоставлена в отведенный срок арендатор берет на себя всюответственность за повреждения. <br />3.4 Запрещено ремонтироватьарендованное ТС самостоятельно или в любом сервисе (включая официальныхдилеров) без разрешения со стороны арендодателя. Наша компания не будетпокрывать расходы на ремонт, выполненный без согласования, а также вправеналожить штраф на арендатора в размере 100 USD + сумма нанесенного ущерба.<br />3.5 Арендатор несет полную ответственность в случае нанесения ущербатретьей стороне в результате инцидента. <br />3.6 Арендатор несет полнуюответственность за транспортное средство и любые последствия, вызванныепередачей транспортного средства третьему лицу, не указанному в договореаренды. <br />3.7 Арендатор несет полную ответственность за любой ущербтранспортного средства при выезде с дорог общего пользования (например,пляж, горы, поле, джунгли и т.д.). <br />3.8 В случае утери илизначительных повреждений мото шлема арендатор обязан возместить стоимостьпокупки нового аналога, чтобы следующему клиенту достался также отличныйшлем. <br />3.9 В случае потери ключа от транспортного средства арендаторобязан возместить стоимость восстановления нового аналога. <br />3.10 Всеарендуемые автомобили и мототехника предоставляются вместе с оригиналомрегистрации транспортного средства, в случае утери документов с клиентавзимается штраф 80$. <br />3.11 В случае, если арендатор нарушает условияданного соглашения, арендодатель имеет право немедленно забратьтранспортное средство без возмещения стоимости аренды. <br />3.12 Нашакомпания не несет ответственности за ущерб, убытки, травмы и смерть,нанесенные арендатору или арендатором другим участникам движения,водителям или пассажирам, участвующим в авариях. Арендодатель не несетответственности за неспособность выполнить свои обязательства вызваннуюпроблемами, находящимися вне разумного контроля компании, включая, помимопрочего, административные действия, пожар, наводнение, эпидемию, войну,беспорядки и терроризм. Наша компания не несет ответственности закакие-либо нелегальные действия или действия против закона РеспубликиИндонезия. <br /><h2 class='subhead uppercase'>4. Дополнительные услуги и возможности</h2><br />4.1 Мы предлагаем ежедневную техническую поддержку с 9:00 до 20:00на Бали. Эта услуга бесплатна, если проблема с оборудованием возникла непо вашей вине. Стоимость услуги, в случае ошибки с вашей стороны,составляет 25 долларов США. <br />4.2 С любым арендованным велосипедомпредоставляются два шлема в хорошем состоянии. Совершенно новые шлемыдоступны по запросу за плату в размере 10 долларов США. Шлемы для детейпредоставляются по запросу без дополнительной оплаты. Пожалуйста, сообщитеменеджеру заранее, если требуется размер шлема S, M или L. В случае, еслишлем не подойдет, будет предоставлена ​​бесплатная замена. <br /><h2 class='subhead'>5. ОГРАНИЧЕНИЯ И ДОПОЛНИТЕЛЬНЫЕ УСЛОВИЯ</h2><br />5.1 Переоформление заключенного договора на другого арендатора ссохранением текущих сроков аренды возможно за дополнительную плату 20$.<br />5.2 Вся предоставляемые в аренду транспортные средства в нашейкомпании сдаются без ограничения по пробегу. <br />5.3 На арендуемойтехнике запрещено покидать пределы острова Бали."])}
  }
},"en":{
  "validity": {
    "needToSelect": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["have to select"])}
  },
  "buttonBooking": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Booking"])},
  "buttonLearnMore": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Learn more"])},
  "mainPageFirst": {
    "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Bike rental<br>in Bali!"])},
    "button": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Booking"])},
    "social": {
      "onlyNewBike": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Only new bikes!"])},
      "insurance": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Full insurance!"])}
    }
  },
  "mainPageSecond": {
    "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["How it works?"])},
    "subtitle": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["We accept online payments in rubles, hryvnias, dollars and euros."])}
  },
  "mainPageSlider": {
    "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Bike<br>catalog"])},
    "subtitle": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Choose and book a bike from the catalog"])}
  },
  "mainPageForm": {
    "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Book a bike"])},
    "subtitle": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["We will deliver your bike directly to the villa or you can pick it up at our office"])}
  },
  "mainPageServices": {
    "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Complete<br>rental service"])}
  },
  "mainPageFaq": {
    "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["FAQ"])},
    "firstTab": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Main"])},
    "secondTab": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Useful"])},
    "thirdTab": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Delivery and insurance"])}
  },
  "mainPageInvest": {
    "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["INVEST WITHOUT RISK"])},
    "text": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Due to the political situation in the world, we decided to offer investors a diversification of risks - investment in the business of renting scooters in Bali. Indonesia is one of the most politically stable and fastest growing markets in Asia and around the world."])},
    "btnText": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["More about investments"])}
  },
  "contactsComponent": {
    "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Contacts"])},
    "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Our office is located in the heart of Changgu. You can reach us by public transport or taxi."])},
    "communication": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Communication in messengers:"])},
    "clickInfo": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Click to<br>get directions!"])}
  },
  "faqPage": {
    "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["NEED TO KNOW"])},
    "text": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Everything you need to know about our service!"])}
  },
  "datePickerComponent": {
    "mobileTitle": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Select booking dates"])},
    "mobileDescription": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Select your rental date and return date to book your bike"])}
  },
  "footerRights": {
    "termsOfuse": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Terms of use"])},
    "rentBike": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Book a bike"])},
    "oferta": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Contract offer"])},
    "terms": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Rent terms"])},
    "privacyPolicy": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Privacy Policy"])},
    "dev": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Website developer: "])},
    "devName": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Dmitry Chelpanov"])}
  },
  "terms": {
    "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Rent terms"])},
    "fullHtmlText": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["<h2 class='subhead pt-[18px]'>1.TERM OF RENTAL AND TERMS AND CONDITIONS OF BOOKING / PAYMENT</h2><br />1.1 The minimum rental period for vehicles in our company starts from X days. We can provide a vehicle for a shorter period, but the cost of the service will be identical to renting for X days. <br />1.2 The rental period of the vehicle is determined based on the selected dates and the number of rental days on the baligo.bike website and is indicated in the rental agreement upon receipt of the vehicle. The need to extend the rental period must be notified at least 48 hours before the date of return of the vehicle. If the vehicle used by the customer is already booked for subsequent dates, we will offer an alternative replacement if available. The cost of renewal by default is calculated from the standard rates of our service. <br />1.3 Payment of the rental must be made in full directly at the time of booking on the baligo.bike website or at the time of delivery, upon receipt of the vehicle in Bali. Payment is made in cash in US dollars (USD), euros (EURO), Australian dollars (AUD), Indonesian rupiahs (IDR) and other currencies at the current rate. <br />1.4 If you contacted us while already on the island of Bali or did not have time to pre-book the necessary vehicle, we will try to promptly deliver the selected model upon request, if it is available, or we will offer a suitable alternative. <br />1.5 In case of early termination of the rental at the initiative of the client, we refund 50% of the cost of the remaining rental period of the vehicle. Refunds are not possible in the following cases:<ul class='list-disc pl-[27px]'>\t<li>When renting for a minimum period (X days))</li>\t<li>\t\tWhen renting for a long term (up to 30 days) with a fixed price, if the current rental period before cancellation was more than 12 days.</li></ul><h2 class='subhead uppercase'>\t2.DRIVER'S LICENSE AND SHIPPING/RETURN POLICY</h2><br />2.1 Officially, in order to drive a vehicle in Indonesia, you must have a valid international driving license with the appropriate category. <br />2.2 The cost of renting our equipment includes free shipping and returns under the following conditions: <br /><ul class='list-disc pl-[27px]'>\t<li>\t\tDelivery and return times are between 9:00 and 19:00 Bali.\t</li>\t<li>\t\tThe tenant must provide the location for delivery / return, convenient time and other details no later than 24 hours.\t</li>\t<li>\t\tThe delivery and return location must be within a 25 km drive from our company office located in Canggu area. The following areas of Bali fall within the free delivery zone: Kuta, Seminyak, Kerobokan, Canggu, Nusa Dua, Jimbaran, Sanur, Bukit, South Ubud, Denpasar</li></ul>2.3 To clarify the possibility and cost of delivery to remote areas (Amed, Candidasa, Lovina, Balian, Medevi, North Ubud) or for delivery / return during hours that do not coincide with the work of our office, please consult our managers in advance. <br />2.4  If the tenant does not have the opportunity to return the vehicle personally, it is necessary to notify our manager in advance to agree on the return procedure. <br /><h2 class='subhead'>\t3. VEHICLE INSURANCE AND CUSTOMER LIABILITY</h2><br />3.1 Our company provides a free option with full insurance against damage as a result of an accident / fall and theft of a vehicle for all motor vehicles (scooters and motorcycles). <br />3.2 Motorcycle insurance does not cover damage in the following cases:<ul class='list-disc pl-[55px] sm:pl-[25px]'>\t<li>\t\tDamage to tires due to a puncture or cut due to the fault of the lessee, the lessee is responsible for repairing the damage (glue, inflate the tire). If the tire needs to be replaced due to wear (no markings, worn tread, the tire itself is torn), then this is the responsibility of our company.</li>\t<li>\t\tNecessary replacement of the battery due to its complete discharge due to the fault of the tenant (headlights on, dimensions, etc.).\t</li>\t<li>Intentional damage to the vehicle.</li>\t<li>\t\tUsing the vehicle when leaving public roads (eg beach, mountains, field, jungle, etc.).\t</li></ul>3.3 In the event of an incident in which the rented vehicle was damaged, the client is obliged to notify the lessor within 24 hours of the accident and provide the necessary information. If the necessary information was not provided within the allotted time, the tenant assumes all responsibility for damage. <br />3.4 It is forbidden to repair the rented vehicle independently or in any service (including official dealers) without permission from the lessor. Our company will not cover the cost of repairs made without agreement, and also has the right to impose a fine on the tenant in the amount of 100 USD + the amount of damage caused.<br />3.5 The Renter bears full responsibility in case of damage to a third party as a result of the incident. <br />3.6 The Renter is fully responsible for the vehicle and any consequences caused by the transfer of the vehicle to a third party not specified in the rental agreement. <br />3.7 The Renter is fully responsible for any damage to the vehicle when leaving the road."])}
  }
},}),})
  nuxtI18nOptions.vueI18n = await vueI18nOptionsLoader(context)
  nuxtI18nOptions.locales = [Object({"code":"en","iso":"en-US","name":"English"}),Object({"iso":"ru-RU","code":"ru","name":"Русский"})]
  nuxtI18nOptions.defaultLocale = ""
  nuxtI18nOptions.defaultDirection = "ltr"
  nuxtI18nOptions.routesNameSeparator = "___"
  nuxtI18nOptions.trailingSlash = false
  nuxtI18nOptions.defaultLocaleRouteNameSuffix = "default"
  nuxtI18nOptions.strategy = "no_prefix"
  nuxtI18nOptions.lazy = false
  nuxtI18nOptions.langDir = null
  nuxtI18nOptions.rootRedirect = null
  nuxtI18nOptions.detectBrowserLanguage = Object({"alwaysRedirect":false,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","redirectOn":"root","useCookie":true})
  nuxtI18nOptions.differentDomains = false
  nuxtI18nOptions.baseUrl = ""
  nuxtI18nOptions.dynamicRouteParams = false
  nuxtI18nOptions.customRoutes = "page"
  nuxtI18nOptions.pages = Object({})
  nuxtI18nOptions.skipSettingLocaleOnNavigate = false
  nuxtI18nOptions.onBeforeLanguageSwitch = (() => "")
  nuxtI18nOptions.onLanguageSwitched = (() => null)
  nuxtI18nOptions.types = undefined
  nuxtI18nOptions.debug = false
  return nuxtI18nOptions
}

export const nuxtI18nOptionsDefault = Object({vueI18n: undefined,locales: [],defaultLocale: "",defaultDirection: "ltr",routesNameSeparator: "___",trailingSlash: false,defaultLocaleRouteNameSuffix: "default",strategy: "prefix_except_default",lazy: false,langDir: null,rootRedirect: null,detectBrowserLanguage: Object({"alwaysRedirect":false,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","redirectOn":"root","useCookie":true}),differentDomains: false,baseUrl: "",dynamicRouteParams: false,customRoutes: "page",pages: Object({}),skipSettingLocaleOnNavigate: false,onBeforeLanguageSwitch: (() => ""),onLanguageSwitched: (() => null),types: undefined,debug: false})

export const nuxtI18nInternalOptions = Object({__normalizedLocales: [Object({"code":"en","iso":"en-US","name":"English"}),Object({"iso":"ru-RU","code":"ru","name":"Русский"})]})
export const NUXT_I18N_MODULE_ID = "@nuxtjs/i18n"
export const isSSG = false
export const isSSR = true
