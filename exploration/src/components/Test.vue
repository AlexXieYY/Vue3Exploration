<template>
    <div>
        <h1>{{ title }}</h1>
        <p>{{ content }}</p>
        <h4>{{ store.count }}</h4>
        <button @click="handleClick">Click me!</button>
        <div class="grid-content bg-purple">
            <router-link to="/">
                <button style="background-color: #eee09a">navbar</button>
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, ref } from 'vue';
    import {mainStore} from "../store/store";

    export default defineComponent({
        name: 'Test',
        setup() {
            // 定义响应式数据
            const title = ref('Test Component');
            const content = ref('This is a test component.');

            // 定义点击事件处理函数
            const handleClick = () => {
                console.log('Button clicked!');
            };

            const store = mainStore();

            return {
                title,
                content,
                store,
                handleClick
            };
        }
    });
</script>

<style scoped>
    /* Add your styles here */
    h1 {
        color: #eee09a;
    }
</style>
