<template>
    <div>
        <div id="cesiumContainer" ref="cesiumContainer"></div>
    </div>
</template>

<script setup>
    import { onMounted, ref } from 'vue';
    import * as Cesium from 'cesium';

    const cesiumContainer = ref(null);

    onMounted(() => {
        Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJjNmM1NjA1MC0xMTJjLTQwY2EtOGI4My0yMTM0MzQ0YTZlNjYiLCJpZCI6MTg4MDI1LCJpYXQiOjE3MTk3OTQ1NTV9.JRKPo04nBnQu1T-pNNxYABGn4OjdBB1OeXpw8WaVCWs';

        // 广州市增城区
        const Cartesian = Cesium.Cartesian3.fromDegrees(113.83228, 23.29013, 10000);
        // console.log(Cartesian, 'Cartesian');

        var viewer = new Cesium.Viewer(cesiumContainer.value, {
            geocoder: true,  // 是否显示地名查找工具
            homeButton: true,    // 是否显示首页位置工具
            sceneModePicker: true,   // 是否显示视角模式切换工具
            baseLayerPicker: true,   // 是否显示默认图层选择工具
            navigationHelpButton: true,  // 是否显示导航帮助工具
            animation: true, // 是否显示动画工具
            timeline: true,  // 是否显示时间轴工具
            fullscreenButton: true,  // 是否显示全屏按钮工具
        });

        viewer.camera.setView({
            destination: Cartesian, // 初始位置
            orientation: { // 初始方向
                heading: Cesium.Math.toRadians(-50), // 初始方向
                pitch: Cesium.Math.toRadians(-50), // 初始方向
                roll: Cesium.Math.toRadians(0),
            }
        });
    });
</script>

<style>
    #cesiumContainer {
        width: 100%;
        height: 100vh;
    }
</style>
<!--<template>-->
<!--    <div>-->
<!--&lt;!&ndash;        <h1>{{ title }}</h1>&ndash;&gt;-->
<!--&lt;!&ndash;        <p>{{ content }}</p>&ndash;&gt;-->
<!--&lt;!&ndash;        <h4>{{ store.count }}</h4>&ndash;&gt;-->
<!--&lt;!&ndash;        <button @click="handleClick">Click me!</button>&ndash;&gt;-->
<!--&lt;!&ndash;        <div class="grid-content bg-purple">&ndash;&gt;-->
<!--&lt;!&ndash;            <router-link to="/">&ndash;&gt;-->
<!--&lt;!&ndash;                <button style="background-color: #eee09a">navbar</button>&ndash;&gt;-->
<!--&lt;!&ndash;            </router-link>&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--        <div id="cesiumContainer" ref="cesiumContainer"></div>-->
<!--    </div>-->
<!--</template>-->

<!--<script lang="ts">-->
<!--    import {mainStore} from "../store/store";-->
<!--    import { defineComponent, onMounted, ref, getCurrentInstance } from 'vue'-->

<!--    export default defineComponent({-->
<!--        name: 'Test',-->
<!--        setup() {-->
<!--            // 定义响应式数据-->
<!--            const title = ref('Test Component');-->
<!--            const content = ref('This is a test component.');-->

<!--            // 定义点击事件处理函数-->
<!--            const handleClick = () => {-->
<!--                console.log('Button clicked!');-->
<!--            };-->

<!--            const store = mainStore();-->

<!--            return {-->
<!--                title,-->
<!--                content,-->
<!--                store,-->
<!--                handleClick-->
<!--            };-->
<!--        }-->

<!--    });-->
<!--</script>-->

<!--<style scoped>-->
<!--    /* Add your styles here */-->
<!--    h1 {-->
<!--        color: #eee09a;-->
<!--    }-->
<!--</style>-->


