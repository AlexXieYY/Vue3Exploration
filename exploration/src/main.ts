import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router/router';
import ElementPlus from './plugins/element-plus';
import { createPinia } from 'pinia'
import * as Cesium from 'cesium'
// import '../Build/Cesium/Widgets/widgets.css'

const app = createApp(App);

app.use(router);
app.use(ElementPlus);
app.use(createPinia())

// 将Cesium挂载到Vue原型上
app.config.globalProperties.$Cesium = Cesium
// 挂载应用
app.mount('#app');

