<template>
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">#номер лекала</h3>
        <img class="edit-icon" src="@/assets/images/Redevelopment.png" alt="Редактирование" />
      </div>
      <div class="card-image">
        <img src="@/assets/images/example.jpg" alt="Пример" />
      </div>
    </div>
</template>

<script setup>
// Логика пока не требуется
</script>

<style scoped>
.card {
  background-color: #FFFFFF; /* Цвет карточки */
  max-width: 348px;
  border-radius: 30px;
  padding: 15px 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1); /* Легкая тень */
}

.card-header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative; /* Для центрирования заголовка и позиционирования кнопки */
  margin-bottom: 15px;
}

.card-title {
  font-family: 'Play', sans-serif;
  margin: 0;
  font-size: 16px;
  font-weight: normal;
  color: #000; /* Цвет текста заголовка */
}

.edit-icon {
  position: absolute;
  right: 0; /* Иконка редактирования будет справа */
  width: 24px;
  height: 24px;
  cursor: pointer;
  margin-right: 8px;
}

.card-image {
  background-color: #fef6f2; /* Цвет фона блока изображения */
  border-radius: 16px;
  min-height: 229px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.card-image img {
  height: auto; /* Размер изображения по центру */
  max-width: 320px;
  border-radius: 16px;
  object-fit: contain;
  display: block;
}
</style>


  