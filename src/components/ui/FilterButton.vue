<template>
    <button class="btn" @click="$emit('toggleFilters')">
        <span v-if="showFilters">✖</span>
        <span v-else>
            <img src="/icons/Filter.png" alt="Filter Icon">
        </span> Фильтры
    </button>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps(['showFilters']);
</script>

<style scoped>
.btn {
    padding: 18px 24px;
    background-color: #f60;
    border-radius: 16px;
    color: #fff;
    font-size: 16px;
    border: none;
    cursor: pointer;
}

.btn:hover {
    background-color: #e55500;
}
</style>
