import { createApp } from "vue";
import "normalize.css";
import "@/style.less";
import router from "@/router";
import App from "./App.vue";
import i18n from "@/i18n";

// create the app instance with the router and i18n instance
// then mount it to the DOM
const app = createApp(App);
app.config.globalProperties.$t = i18n.global.t;

app.use(router);
app.use(i18n);

app.mount("#app");
