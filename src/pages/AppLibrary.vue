<template>
    <div class="main">
        <AppHeader />
        <div class="library">
            <h1 class="library-title">Ваши генерации</h1>

            <div class="library-content">
                <!-- Поле поиска -->
                <div class="search">
                    <form @submit.prevent="handleSearch">
                        <input 
                            type="text" 
                            name="search" 
                            id="search" 
                            placeholder="Введите номер или название лекала" 
                            v-model="searchQuery"
                        >
                    </form>
                    <!-- Использование компонента FilterButton -->
                    <FilterButton 
                        :showFilters="showFilters" 
                        @toggleFilters="toggleFilters"
                    />
                </div>

                <!-- Выпадающий список сортировки -->
                <select name="sort" id="sort" v-model="sortOption">
                    <option value="date">По дате</option>
                    <option value="name">По названию</option>
                </select>
            </div>

            <!-- Блок фильтров -->
            <div v-if="showFilters" class="filters">
                <h3>Фильтры</h3>
                <label>
                    <input type="checkbox" v-model="filters.date"> Фильтр по дате
                </label>
                <label>
                    <input type="checkbox" v-model="filters.name"> Фильтр по названию
                </label>
            </div>
        </div>
        <AppFooter />
    </div>
</template>

<script setup>
import AppFooter from '@/components/AppFooter.vue';
import AppHeader from '@/components/AppHeader.vue';
import FilterButton from '@/components/ui/FilterButton.vue';
import { ref } from 'vue';

// Поле для поиска
const searchQuery = ref('');
// Выбранная опция сортировки
const sortOption = ref('date');
// Состояние фильтров
const showFilters = ref(false);
// Фильтры
const filters = ref({
    date: false,
    name: false,
});

// Обработчик поиска
const handleSearch = () => {
    console.log(`Поиск: ${searchQuery.value}`);
};

// Переключение отображения фильтров
const toggleFilters = () => {
    showFilters.value = !showFilters.value;
};
</script>

<style scoped>
.library {
    margin-top: 60px;
    margin-bottom: 200px;
}

.library-title {
    font-family: 'BravoRG', sans-serif;
    font-weight: 400;
    font-size: 50px;
    line-height: 58px;
}

.library-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
}

.search {
    display: flex;
    gap: 8px;
    align-items: center;
}

.search input {
    padding: 8px 12px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 300px;
}

select {
    padding: 8px 12px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.filters {
    margin-top: 20px;
    padding: 16px;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 4px;
}

.filters h3 {
    margin-bottom: 10px;
}

.filters label {
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
}
* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}

body {
  max-width: 1920px;
  margin: 0 auto;
}

.main {
  max-width: 1480px;
  margin: 0 auto;
}
</style>
