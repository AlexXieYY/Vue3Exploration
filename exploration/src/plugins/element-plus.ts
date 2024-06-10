import { App } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css';

export default {
    install(app: App): void {
        app.use(ElementPlus);
    }
};
