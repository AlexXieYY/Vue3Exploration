import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router/router';
import ElementPlus from './plugins/element-plus';
import { createPinia } from 'pinia'

const app = createApp(App);

app.use(router);
app.use(ElementPlus);
app.use(createPinia())

// 挂载应用
app.mount('#app');

