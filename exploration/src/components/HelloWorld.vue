<template>
    <el-skeleton />
    <div class="grid-content bg-purple">
        <router-link to="/">
            <button style="background-color: #eee09a">navbar</button>
        </router-link>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'

    const count = ref(0)
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
