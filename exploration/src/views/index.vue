<template>
    <div class="container">
        <h1>Index Page</h1>
        <div class="main">
            <el-row class="mainRow">
                <el-col :span="5" class="mainCol">1<div class="grid-content bg-purple"></div></el-col>
                <el-col :span="5" class="mainCol">2<div class="grid-content bg-purple-light"></div></el-col>
                <el-col :span="5" class="mainCol">3<div class="grid-content bg-purple"></div></el-col>
                <el-col :span="5" class="mainCol">4<div class="grid-content bg-purple-light"></div></el-col>
            </el-row>
        </div>

        <div class="navbar">
            <el-row :gutter="20">
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <router-link to="/digitalRoom">
                            <button style="background-color: #eee09a">project1</button>
                        </router-link>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <router-link to="/test">
                            <button style="background-color: #eee09a">project2</button>
                        </router-link>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <router-link to="/count">
                            <button style="background-color: #eee09a">pinia</button>
                        </router-link>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <button type="primary" plain>Button2</button>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { ref, onMounted } from 'vue';
    import axios from 'axios'

    // 定义数据类型
    interface DataItem {
        id: number;
        name: string;
    }

    // 创建一个响应式变量存储数据
    const data = ref<DataItem[]>([]);

    // 定义获取数据的函数
    const fetchData = async () => {
        try {
            const response = await axios.get<DataItem[]>('http://localhost:3000/api/data');
            // data.value = response.data;
            console.log(response.data)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // 在组件挂载时调用fetchData函数
    onMounted(() => {
        fetchData();
    });

</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    background: #5e7987;
  }
  .navbar {
    /* 可以添加其他样式 */
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 10%;
    z-index: 99;
    top:50rem
  }
  .main{
    height: 70%
  }
  .mainRow{
    height: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
  }
  .mainCol{
    height: 90%;
    margin: 10px;
    //background-color: #efafad;
    background-color: white;
    width: 90%;
    border-radius: 20px;
  }

</style>
