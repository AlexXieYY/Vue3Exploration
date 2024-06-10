<template>
    <h2 class="">{{ store.helloPinia }}</h2>
    <h4>{{passage}}</h4>
    <button @click="handleClick">点击增加</button>
    <button @click="handleClickActions">点击增加 - actions</button>
    <div class="grid-content bg-purple">
        <router-link to="/">
            <button style="background-color: #eee09a">navbar</button>
        </router-link>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import { mainStore } from "../store/store";

    const passage = ref<string>('index');
    const store = mainStore();

    const handleClick = (): void => {
        store.count++;
        console.log(store.count);
        passage.value = 'index2';
    };

    const handleClickActions = (): void => {
        store.changeState();
    };
</script>



<style scoped lang="sass">

</style>
