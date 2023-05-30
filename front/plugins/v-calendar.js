import VCalendar from "v-calendar";
import "v-calendar/dist/style.css";
// import "v-calendar/style.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VCalendar, {});
});
