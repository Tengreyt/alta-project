<template>
    <div class="card-subscription">
      <p class="card-subscription-text">{{ text }}</p>
      <img :src="`/icons/${image}.png`" :alt="altText" />
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

// Определяем свойства с помощью Composition API
defineProps({
  text: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  altText: {
    type: String,
    default: "Icon",
  },
});
</script>

<style scoped>
.card-subscription {
  max-width: 421px;
  display: flex;
  align-self: center;
  gap: 21px;
}

.card-subscription img {
  width: 53px;
  height: 53px;
}

.card-subscription-text {
  font-family: 'Play', sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 17.36px;
  text-align: left;
  color: #3D3C3E;
  margin: 0;
}
</style>
