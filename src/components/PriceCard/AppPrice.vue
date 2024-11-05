<template>
  <div class="card-price">
        <div class="price-container">
          <h1 class="price-title">{{ title }}</h1>

          <div class="price-primary">
            <h5>{{ text }}</h5>
            <p>{{ price }}</p>
          </div>

          <div class="price-primary">
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
    type: Number,
    required: true,
  },
  image: {
      type: String,
      required: true,
  }
})
</script>

<style scoped>
.card-price {
  width: 305px;
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid #048829;
  transition: background-color 0.3s ease, color 0.3s ease;

}

/* Изменяем цвет карточки и текста при наведении */
.card-price:hover {
  background-color: #2eb003;
  color: #ffffff;
}

/* Применяем белый цвет к картинке при наведении */
.card-price:hover .price-primary img {
  filter: brightness(0) invert(1);
  transition: filter 0.3s ease;
}

.card-price:hover .price-title {
  color: #ffffff;
}

.card-price:hover .price-primary h5,
.card-price:hover .price-primary p {
  color: #ffffff;
}

/* === */
.price-container {
padding: 15px 26px 28px 26px;
}

.price-title {
font-family: 'Play', sans-serif;
font-size: 30px;
font-weight: 400;
line-height: 34.71px;
text-align: center;
color: #106833;
padding-bottom: 15px;
border-bottom: 1px solid #106833;
margin: 0;

}

.price-primary {
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 16px;
}

.price-primary h5 {
font-family: 'Play', sans-serif;
font-size: 15px;
font-weight: 400;
line-height: 17.36px;
text-align: left;
color: #0D5C00;
margin: 0;
}

.price-primary p {
font-family: 'Play', sans-serif;
font-size: 18px;
font-weight: 700;
line-height: 20.83px;
text-align: left;
color: #0D5C00;
margin: 0px;
}
</style>