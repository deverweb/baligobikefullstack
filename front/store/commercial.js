export const useCommercialStore = defineStore("commercial", () => {
  let bikeModelsArray = ref(null);

  const fillData = async () => {
    bikeModelsArray.value = [
      {
        model: "Yamaha Xmax 250cc",
        year: "2023",
        dry_weight: "179",
        trunk_volume: "48",
        capacity: "22,8",
        fuel_tank_volume: "13",
        average_consumption: "3,5",
        engDescription: `The Yamaha Xmax is a stylish and powerful scooter designed for comfortable and convenient city riding. It is equipped with a light and strong frame that provides maneuverability and stability on the road.
				A powerful engine with a volume of 250 cubic centimeters allows you to accelerate to 129 km / h and easily overcome city traffic jams. Independent suspension on the front and rear wheels guarantees a smooth and comfortable ride.
				The Yamaha Xmax is equipped with a spacious underseat storage area that allows you to store a helmet and small items, as well as an additional compartment on the front panel for storing small items.
				This scooter also has many useful features such as a state of the art safety system, traction control system and a full LCD display showing speed and fuel consumption.
				Yamaha Xmax is a reliable and stylish way to get around the city, which allows you to cover any distance with comfort and confidence.`,
        ruDescription: `Yamaha Xmax - это стильный и мощный скутер, созданный для комфортной и удобной езды в городе. Он оснащен легкой и прочной рамой, которая обеспечивает маневренность и устойчивость на дороге.
				Мощный двигатель с объемом 250 кубических сантиметров позволяет разгоняться до 129 км/ч и легко преодолевать городские пробки. Независимая подвеска на переднем и заднем колесах гарантирует плавную и комфортную поездку.
				Yamaha Xmax оснащен просторным багажным отсеком под сиденьем, который позволяет вместить шлем и небольшие предметы, а также дополнительным отсеком на передней панели для хранения мелочей.
				Этот скутер также имеет много полезных функций, таких как современная система безопасности, система контроля тяги и полный ЖК-дисплей с индикацией скорости и расхода топлива.
				Yamaha Xmax - это надежный и стильный способ передвижения в городе, который позволяет с комфортом и уверенностью преодолевать любые расстояния.
				`,
        bikes: [
          {
            id: "1",
            img: "/img/bikes/xmax-cybercity.png",
            drawing: "Cyber City",
          },
          {
            id: "2",
            img: "/img/bikes/xmax-green.png",
            drawing: "Green",
          },
          {
            id: "3",
            img: "/img/bikes/xmax-pink.png",
            drawing: "Pink",
          },
          {
            id: "4",
            img: "/img/bikes/xmax-redbull.png",
            drawing: "Redbull",
          },
          {
            id: "5",
            img: "/img/bikes/xmax-tosca.png",
            drawing: "Tosca",
          },
          {
            id: "6",
            img: "/img/bikes/xmax-yellowblue.png",
            drawing: "Yellow Blue",
          },
        ],
        discount: 20,
        rates: [
          {
            isFixed: true,
            isMonthly: false,
            minDays: 1,
            maxDays: 3,
            dayPriceRUP: 1400000,
            dayPriceUSD: 93,
          },
          {
            isFixed: false,
            minDays: 4,
            maxDays: 7,
            isMonthly: false,
            dayPriceRUP: 500000,
            dayPriceUSD: 33,
          },
          {
            isFixed: false,
            minDays: 8,
            maxDays: 14,
            isMonthly: false,
            dayPriceRUP: 450000,
            dayPriceUSD: 30,
          },
          {
            isFixed: false,
            minDays: 15,
            maxDays: 21,
            isMonthly: false,
            dayPriceRUP: 350000,
            dayPriceUSD: 23,
          },
          {
            isFixed: false,
            isMonthly: true,
            minDays: 22,
            maxDays: 90,
            dayPriceRUP: 7500000,
            dayPriceUSD: 500,
          },
        ],
        id: "yamaha xmax 250cc",
        img: "/img/bikes/xmax-cybercity.png",
        brand: "YAMAHA",
        mark: "Xmax 250cc",
        name: "YAMAHA XMAX 250cc",
      },
      //XMAX
      {
        model: "HONDA PCX 160 CC",
        id: "model 1",
        img: "/img/bikes/pcx-redbull.png",
        year: "2022",
        trunk_volume: "30",
        capacity: "16",
        fuel_tank_volume: "8,1",
        average_consumption: "2,5",
        engDescription: `Honda PCX is one of the most popular maxi scooters in Bali. It is ideal for those who decide to visit every point of the mysterious Bali. Rest assured that you won't get tired riding this modern beauty and you'll have a great riding experience. Due to the low fit, it is comfortable to use for boys and girls.
				The updated fuel distribution system allows you to drive on a full tank up to 250 km. Bright LED optics will help you move comfortably at night. The bike is equipped with a convenient electronic smart-key and has a spacious trunk.`,
        ruDescription: `Honda PCX - один из самых популярных максискутеров на Бали. Он идеально подходит для тех, кто решил побывать в каждой точке загадочного Бали. Будьте уверены, что вы не устанете, перемещаясь на этом современном красавце и получите массу впечатлений от езды. За счёт низкой посадки он комфортен в использовании парням и девушкам.
				Обновленная система топливного распределения позволяет проехать на полном баке до 250 км. Яркая светодиодная оптика поможет с комфортом перемещаться в ночное время. Байк комплектуется удобным электронным smart-ключом и имеет вместительный багажник.`,

        bikes: [
          {
            id: "1",
            img: "/img/bikes/pcx-redbull.png",
            drawing: "Red Bull",
          },
        ],
        rates: [
          {
            isFixed: true,
            isMonthly: false,
            minDays: 1,
            maxDays: 3,
            dayPriceRUP: 700000,
            dayPriceUSD: 47,
          },
          {
            isFixed: false,
            minDays: 4,
            maxDays: 7,
            isMonthly: false,
            dayPriceRUP: 270000,
            dayPriceUSD: 18,
          },
          {
            isFixed: false,
            minDays: 8,
            maxDays: 14,
            isMonthly: false,
            dayPriceRUP: 220000,
            dayPriceUSD: 15,
          },
          {
            isFixed: false,
            minDays: 15,
            maxDays: 21,
            isMonthly: false,
            dayPriceRUP: 170000,
            dayPriceUSD: 11,
          },
          {
            isFixed: false,
            isMonthly: true,
            minDays: 22,
            maxDays: 90,
            dayPriceUSD: 233,
            dayPriceRUP: 3500000,
          },
        ],
        discount: 20,
        brand: "HONDA",
        mark: "PCX 160 CC",
        name: "HONDA PCX 160 CC",
      },
      //PCX160
      {
        model: "Yamaha Nmax 155cc",
        year: "2022",
        dry_weight: "127",
        trunk_volume: "30",
        capacity: "15,1",
        fuel_tank_volume: "7,1",
        average_consumption: "2,5",
        engDescription: `For the 2022 model year, Yamaha has given the NMAX a number of important upgrades to make the popular model even better. The updated NMAX 155 received LED lighting, a sportier fascia and slightly improved ergonomics. The seating position has been slightly wider for the comfort of taller riders, while the handlebars have been raised for a more comfortable and relaxed posture.`,
        ruDescription: `На 2022 модельный год Yamaha одарила NMAX рядом важных доработок, сделав популярную модель ещё лучше. Обновленный NMAX 155 получил диодный свет, более спортивную облицовку и слегка доработанную эргономику. Посадка была сделана чуть просторнее для удобства высоких райдеров, а руль стал выше, обеспечив более удобную и расслабленную позу.Также для водителя предусмотрены удлиненные подножки, благодаря ним ноги можно вытянуть, что создает дополнительное удобство.`,
        bikes: [
          {
            id: "1",
            img: "/img/bikes/nmax-bitcoin.png",
            drawing: "Bitcoin",
          },
          {
            id: "2",
            img: "/img/bikes/nmax-blue.png",
            drawing: "Blue",
          },
          {
            id: "3",
            img: "/img/bikes/nmax-redbull-panther-black-yellow.png",
            drawing: "RedBull Panther",
          },
          {
            id: "4",
            img: "/img/bikes/nmax-redbull.png",
            drawing: "Redbull",
          },
          {
            id: "5",
            img: "/img/bikes/nmax-viva-magenta.png",
            drawing: "Viva Magenta",
          },
        ],
        discount: 20,
        rates: [
          {
            isFixed: true,
            isMonthly: false,
            minDays: 1,
            maxDays: 3,
            dayPriceRUP: 700000,
            dayPriceUSD: 47,
          },
          {
            isFixed: false,
            minDays: 4,
            maxDays: 7,
            isMonthly: false,
            dayPriceRUP: 270000,
            dayPriceUSD: 18,
          },
          {
            isFixed: false,
            minDays: 8,
            maxDays: 14,
            isMonthly: false,
            dayPriceRUP: 220000,
            dayPriceUSD: 15,
          },
          {
            isFixed: false,
            minDays: 15,
            maxDays: 21,
            isMonthly: false,
            dayPriceRUP: 170000,
            dayPriceUSD: 11,
          },
          {
            isFixed: false,
            isMonthly: true,
            minDays: 22,
            maxDays: 90,
            dayPriceRUP: 3500000,
            dayPriceUSD: 233,
          },
        ],
        id: "yamaha nmax 155cc",
        img: "/img/bikes/nmax-bitcoin.png",
        brand: "YAMAHA",
        mark: "NMAX 155cc",
        name: "YAMAHA NMAX 155cc",
      },
      //NMAX
      {
        model: "HONDA VARIO 160 CC",
        engDescription: `Honda Vario 160 - This bike is for those who want something nimble and dynamic. It will be comfortable to move around the city and at the same time easy enough to drive and frisky enough to overtake on the highway. Diode optics and combined brakes set this bike apart from other models in this class. The bike is equipped with an 18L trunk, which freely fits a motorcycle helmet.`,
        ruDescription: `Honda Vario 160 - Этот байк подходит для тех, кто хочет что-то маневренное и динамичное. Он будет комфортен для перемещения по городу и в то же время достаточно лёгкий в управлении и резвый для совершения обгона на трассе. Диодная оптика и комбинированные тормоза выделяют этот байк на фоне других моделей данного класса. Байк оснащен багажником 18л, в который свободно влезает мотошлем.
				`,
        year: "2022",
        trunk_volume: "18",
        capacity: "11,1",
        fuel_tank_volume: "5,5",
        average_consumption: "2,3",

        bikes: [
          {
            id: "honda vario 1",
            img: "/img/bikes/vario-redbull.png",
            drawing: "Redbull",
          },
          {
            id: "honda vario 2",
            img: "/img/bikes/vario-blue-full.png",
            drawing: "Blue Full",
          },
        ],
        discount: 20,
        rates: [
          {
            isFixed: true,
            isMonthly: false,
            minDays: 1,
            maxDays: 3,
            dayPriceRUP: 500000,
            dayPriceUSD: 33,
          },
          {
            isFixed: false,
            minDays: 4,
            maxDays: 7,
            isMonthly: false,
            dayPriceRUP: 200000,
            dayPriceUSD: 13,
          },
          {
            isFixed: false,
            minDays: 8,
            maxDays: 14,
            isMonthly: false,
            dayPriceRUP: 170000,
            dayPriceUSD: 11,
          },
          {
            isFixed: false,
            minDays: 15,
            maxDays: 21,
            isMonthly: false,
            dayPriceRUP: 130000,
            dayPriceUSD: 9,
          },

          {
            isFixed: false,
            isMonthly: true,
            minDays: 22,
            maxDays: 90,
            dayPriceRUP: 2700000,
            dayPriceUSD: 180,
          },
        ],
        id: "9221",
        img: "/img/bikes/vario-blue-full.png",
        brand: "HONDA",
        mark: "VARIO 160 CC",
        name: "HONDA VARIO 160 CC",
      },
      //vARIO
      {
        model: "YAMAHA GEAR 125 CC",
        year: "2022",
        dry_weight: "96",
        trunk_volume: "18",
        capacity: "9,4",
        fuel_tank_volume: "4,2",
        engDescription: `Yamaha Gear is Yamaha's latest scooter, part of a family of automatic scooters with a 125cc Blue Core engine.`,
        ruDescription: `Yamaha Gear - Это новейший скутер Yamaha, входящий в семейство автоматических скутеров с двигателем Blue Core объемом 125 куб.
				Спортивный внешний вид этого мотоцикла можно увидеть по его гладкому дизайну и резким, твердым линиям на корпусе. Его оснастили бескамерными шинами и широким протектором. Он идеально подойдёт для динамичных людей увлекающихся серфингом. Его также можно оснастить креплением для серфборда.
				`,
        bikes: [
          {
            id: "1",
            img: "/img/bikes/gear-blue-motif.png",
            drawing: "Blue Motif",
          },
          {
            id: "2",
            img: "/img/bikes/gear-blue.png",
            drawing: "Blue",
          },
          {
            id: "3",
            img: "/img/bikes/gear-orange-full.png",
            drawing: "Orange Full",
          },
          {
            id: "4",
            img: "/img/bikes/gear-redbull.png",
            drawing: "Redbull",
          },
          {
            id: "5",
            img: "/img/bikes/gear-yellow-full.png",
            drawing: "Yellow Full",
          },
        ],
        discount: 20,
        rates: [
          {
            isFixed: true,
            isMonthly: false,
            minDays: 1,
            maxDays: 3,
            dayPriceRUP: 350000,
            dayPriceUSD: 23,
          },
          {
            isFixed: false,
            minDays: 4,
            maxDays: 7,
            isMonthly: false,
            dayPriceRUP: 150000,
            dayPriceUSD: 10,
          },
          {
            isFixed: false,
            minDays: 8,
            maxDays: 14,
            isMonthly: false,
            dayPriceRUP: 120000,
            dayPriceUSD: 8,
          },
          {
            isFixed: false,
            minDays: 15,
            maxDays: 21,
            isMonthly: false,
            dayPriceRUP: 90000,
            dayPriceUSD: 6,
          },

          {
            isFixed: false,
            isMonthly: true,
            minDays: 22,
            maxDays: 90,
            dayPriceRUP: 2000000,
            dayPriceUSD: 133,
          },
        ],
        id: "yamaha gear 125 CC",
        img: "/img/bikes/gear-orange-full.png",
        brand: "YAMAHA",
        mark: "GEAR 125 CC",
        name: "YAMAHA GEAR 125 CC",
      },
      //GEAR

      {
        model: "Yamaha Xride 125cc",
        year: "2023",
        dry_weight: "98",
        trunk_volume: "18",
        capacity: "9,4",
        fuel_tank_volume: "4,2",
        ruDescription: `Yamaha Xride - это скутер из создан, как для твёрдового покрытия так и для бездорожья. Он оснащён двигателем Blue Core объёмом 125 куб, что делает его очень динамичным. Он идеально подходит для тех кто увлекается серфингом, его также можно оснастить креплением для серфборда.				`,
        engDescription: `The Yamaha Xride is a scooter designed for both hard and off-road use. It is equipped with a 125 cc Blue Core engine, which makes it very dynamic. It is ideal for those who love to surf and can also be equipped with a surfboard attachment.`,
        bikes: [
          {
            id: "1",
            img: "/img/bikes/xride-blue.png",
            drawing: "No drawing",
          },
        ],
        discount: 20,
        rates: [
          {
            isFixed: true,
            isMonthly: false,
            minDays: 1,
            maxDays: 3,
            dayPriceRUP: 350000,
            dayPriceUSD: 23,
          },
          {
            isFixed: false,
            minDays: 4,
            maxDays: 7,
            isMonthly: false,
            dayPriceRUP: 150000,
            dayPriceUSD: 10,
          },
          {
            isFixed: false,
            minDays: 8,
            maxDays: 14,
            isMonthly: false,
            dayPriceRUP: 120000,
            dayPriceUSD: 8,
          },
          {
            isFixed: false,
            minDays: 15,
            maxDays: 21,
            isMonthly: false,
            dayPriceRUP: 90000,
            dayPriceUSD: 6,
          },

          {
            isFixed: false,
            isMonthly: true,
            minDays: 22,
            maxDays: 90,
            dayPriceRUP: 2000000,
            dayPriceUSD: 133,
          },
        ],
        id: "Yamaha Xride 125cc",
        img: "/img/bikes/xride-blue.png",
        brand: "YAMAHA",
        mark: "Xride 125cc",
        name: "YAMAHA XRIDE 125cc",
      },
      //XRIDE
    ];
  };
  const orderBike = async (bodyData) => {
    let { data } = await useFetch("/api/docs", {
      method: "POST",
      body: {
        sheet: "bigform",
        data: bodyData,
      },
    });
  };
  const smallFormOrder = async (values) => {
    let { data } = await useFetch("/api/docs", {
      method: "POST",
      body: {
        sheet: "smallform",
        data: values,
      },
    });
  };
  const investFormOrder = async (values) => {
    let { data } = await useFetch("/api/docs", {
      method: "POST",
      body: {
        sheet: "investform",
        data: values,
      },
    });
  };
  const agentFormOrder = async (values) => {
    let { data } = await useFetch("/api/docs", {
      method: "POST",
      body: {
        sheet: "agentform",
        data: values,
      },
    });
  };
  return {
    fillData,
    orderBike,
    bikeModelsArray,
    smallFormOrder,
    agentFormOrder,
    investFormOrder,
  };
});
