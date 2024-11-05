<template>
    <div class="card-price-purple">
        <div class="price-container">
            <h1 class="price-title-purple">{{ title }}</h1>
  
            <div class="price-primary-purple">
              <h5>{{ text }}</h5>
              <img :src="`/icons/${price}.png`" alt="infinity">
            </div>
  
            <div class="price-primary-purple">
              <h5>{{ textTwo }}</h5>
              <img :src="`/icons/${image}.png`" alt="ok">
            </div>
            
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

// Определяем свойства с помощью Composition API

defineProps({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  textTwo: {
    type: String,
    required: true,
  },
  price:{
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  }
})
</script>

<style scoped>
.card-price-purple {
  width: 305px;
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid #BD0795;
  transition: background-color 0.3s ease, color 0.3s ease;

}

/* Изменяем цвет карточки и текста при наведении */
.card-price-purple:hover {
  background-color: #BD0795;
  color: #ffffff;
}

/* Применяем белый цвет к картинке при наведении */
.card-price-purple:hover .price-primary-purple img {
  filter: brightness(0) invert(1);
  transition: filter 0.3s ease;
}


.card-price-purple:hover .price-title-purple {
  color: #ffffff;
}

.card-price-purple:hover .price-primary-purple h5,
.card-price-purple:hover .price-primary-purple p {
  color: #ffffff;
}

/* === */
.price-container {
  padding: 15px 26px 28px 26px;
}

.price-title-purple {
  font-family: 'Play', sans-serif;
  font-size: 30px;
  font-weight: 400;
  line-height: 34.71px;
  text-align: center;
  color: #950C78;
  padding-bottom: 15px;
  border-bottom: 1px solid #950C78;
  margin: 0;
}

.price-primary-purple {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
}

.price-primary-purple h5 {
  font-family: 'Play', sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 17.36px;
  text-align: left;
  color: #950C78;
  margin: 0;
}

.price-primary-purple p {
  font-family: 'Play', sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 20.83px;
  text-align: left;
  color: #950C78;
  margin: 0px;
}
</style>