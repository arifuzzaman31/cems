import { createApp } from "vue";
import App from "./App.vue";
import store from "./stores/index.js";
import './assets/style.css';

createApp(App).use(store).mount("#app");