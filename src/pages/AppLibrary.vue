<template>
    <div class="main">
        <AppHeader />
        <div class="library">
            <h1 class="library-title">Ваши генерации</h1>

            <div class="library-content">
                <!-- Поле поиска -->
                <div class="search">
                    <form class="search-form" @submit.prevent="handleSearch">
                        <input
                            class="search-input"
                            type="text"
                            placeholder="Введите номер или название лекала"
                            v-model="searchQuery"
                        />
                    </form>
                    <!-- Использование компонента FilterButton -->
                    <FilterButton 
                        :showFilters="showFilters" 
                        @toggleFilters="toggleFilters"
                    />
                </div>

                <!-- Выпадающий список сортировки -->
                <select class="sort-select" name="sort" id="sort" v-model="sortOption">
                    <option value="date">Сортировка</option>
                    <option value="name">По названию</option>
                </select>
            </div>

            <!-- Блок фильтров -->
            <div v-if="showFilters" class="filters">
                <h3>Фильтры</h3>
                <div class="filter-options">
                    <label>
                        <input type="checkbox" v-model="filters.date"> Фильтр по дате
                    </label>
                    <label>
                        <input type="checkbox" v-model="filters.name"> Фильтр по названию
                    </label>
                </div>
                <button class="btn access">Применить</button>
            </div>
        </div>

        <div class="library-content">
            <CardLibrary />
            <CardLibrary />
            <CardLibrary />
            <CardLibrary />
        </div>
        <AppFooter />
    </div>
</template>

<script setup>
import AppFooter from '@/components/AppFooter.vue';
import AppHeader from '@/components/AppHeader.vue';
import FilterButton from '@/components/ui/FilterButton.vue';
import CardLibrary from '@/components/Card/CardLibrary.vue';
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
    if(!searchQuery.value) return;
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
    margin-bottom: 27px;
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
    margin-top: 44px;
}

.search {
    display: flex;
    gap: 8px;
    align-items: center;
}

.search-form {
  position: relative;
  width: 672px; /* Убедитесь, что ширина соответствует */
}

.search-input {
  font-family: 'Play', sans-serif;
  padding: 18.5px 52px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 16px;
  outline: none;
  width: 100%; /* Задаем 100%, чтобы соответствовать контейнеру */
  box-sizing: border-box; /* Учитываем отступы и границы */
}

.search-form::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 24px; /* Позиция иконки внутри поля */
  transform: translateY(-50%);
  width: 18px; /* Размер иконки */
  height: 18px;
  background-image: url('../assets/images/Lupa.png'); /* Убедитесь в правильности пути */
  background-size: contain;
  background-repeat: no-repeat;
  pointer-events: none; /* Иконка не мешает вводить текст */
}


select {
    padding: 8px 12px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.filter-options {
    margin-bottom: 20px;
}

.access {
    font-family: 'Play', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #fff;
    background-color: #106833;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
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

.sort-select {
  padding: 18px 24px;
  padding-right: 40px; /* Отступ для стрелки слева */
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 16px;
  background-color: #fff;
  outline: none;
  background-size: 12px;
  color: #19172e;
  cursor: pointer;
}

.sort-select option {
  margin-top: 4px;
  background-color: #fff;
  border-radius: 16px;
  padding: 18px 24px;
  color: #19172e;
}

/* library-content */

.library-content {
    display: flex; 
    justify-content: space-between;
    align-items: center;
    margin-top: 44px;
}



/* Основные стили */
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
