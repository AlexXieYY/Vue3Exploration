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
                            <button style="background-color: #eee09a">test</button>
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

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'Index'
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
    background-color: #efafad;
    width: 90%;
    border-radius: 20px;
  }

</style>
