<template>
    <div class="grid-content bg-purple">
        <router-link to="/">
            <button style="background-color: #eee09a">navbar</button>
        </router-link>
    </div>
</template>

<script setup lang="ts">
    import axios from 'axios';
    import { reactive, toRefs } from 'vue';

    interface DataItem {
        id: number;
        name: string;
        age: number;
    }

    // 创建响应式对象
    const data = reactive({
        userInfo: [] as DataItem[],
    });

    // 异步函数请求数据
    const fetchData = async () => {
        try {
            // 请求数据时指定泛型参数为DataItem[]
            const response = await axios.get<DataItem[]>('http://localhost:3000/api');
            // 将响应数据赋值给响应式对象
            data.userInfo = response.data as DataItem[];  // 确保类型匹配
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // 调用fetchData函数以请求数据
    fetchData();

</script>

<style scoped lang="sass">

</style>
