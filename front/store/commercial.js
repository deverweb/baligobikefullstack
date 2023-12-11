export const useCommercialStore = defineStore("commercial", () => {
  let bikeModelsArray = ref(null);

  const fillData = async (bikes) => {
    if (bikes) {
      bikeModelsArray.value = bikes.map((bike, i) => {
        let rates = [];
        for (const key in bike.bike_rates) {
          // if (key == "first") return;
          // if (key == "first") {
          //   return;
          // }
          let isFixed = key == "first" ? true : false;
          let isMonthly = key == "fifth" ? true : false;
          let minDays;
          let maxDays;
          switch (key) {
            // case "first":
            //   minDays = 1;
            //   maxDays = 3;
            //   break;
            case "second":
              minDays = 3;
              maxDays = 7;

              break;
            case "third":
              minDays = 8;
              maxDays = 14;

              break;
            case "fourth":
              minDays = 15;
              maxDays = 21;

              break;
            case "fifth":
              minDays = 22;
              maxDays = 90;

              break;
          }
          let dayPriceRUP = Number(bike.bike_rates[key]["idr"]);
          let dayPriceUSD = Number(bike.bike_rates[key]["usd"]);
          let rate = {
            isFixed,
            isMonthly,
            minDays,
            maxDays,
            dayPriceRUP,
            dayPriceUSD,
          };
          if (key != "first") {
            rates.push(rate);
          }
        }
        let bikes = bike.bike_drawings.map((draw, id) => {
          let idString = id.toString();
          return {
            id: idString,
            drawing: draw.title,
            ...draw,
          };
        });
        return {
          model: bike.bike_title,
          name: bike.bike_title,
          settings: bike.bike_settings,
          bikes,
          id: bike.bike_title,
          rates,
          img: bike.bike_main_img,
          discount: 20,
          ruDescription: bike.bike_description["ru"],
          engDescription: bike.bike_description["eng"],
        };
      });
    } else {
      return [];
    }
  };
  const orderBike = async (bodyData) => {
    let { data } = await useFetch("/api/docs", {
      method: "POST",
      body: {
        sheet: "bigform",
        data: bodyData,
      },
    });
    return data.value;
  };
  const smallFormOrder = async (values) => {
    let { data } = await useFetch("/api/docs", {
      method: "POST",
      body: {
        sheet: "smallform",
        data: values,
      },
    });
    return false;
  };

  const investFormOrder = async (values) => {
    let { data } = await useFetch("/api/docs", {
      method: "POST",
      body: {
        sheet: "investform",
        data: values,
      },
    });
    return data.value;
  };
  const agentFormOrder = async (values) => {
    let { data } = await useFetch("/api/docs", {
      method: "POST",
      body: {
        sheet: "agentform",
        data: values,
      },
    });
    return data.value;
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
