import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VueSmoothScroll from 'vue3-smooth-scroll';
const app = createApp(App);
app.use(VueSmoothScroll);

app.mount('#app');