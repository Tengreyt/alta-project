<template>
  <div class="main">
    <AppHeader />
    <TemplateCreator />
    <ContentSection />
    <AppAdvantages />
    <AppSubscription />

  </div>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue';
import TemplateCreator from './components/TemplateCreator.vue';
import ContentSection from './components/ContentSection.vue';
import AppAdvantages from './components/AppAdvantages.vue'; // две секции внутри
import AppSubscription from './components/AppSubscription.vue';


</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap');
@import './assets/fonts/fonts.css';
body {
  max-width: 1920px;
  margin: 0 auto;
}

.main {
  max-width: 1480px;
  margin: 0 auto;
}
</style>