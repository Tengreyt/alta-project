<template>
    <div class="main">
      <AppHeader />
      <TemplateCreator />
      <ContentSection />
      <AppAdvantages />
      <AppSubscription />
      <AppImportant />
      <AppFooter />
    </div>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue';
import TemplateCreator from '@/components/TemplateCreator.vue';
import ContentSection from '@/components/ContentSection.vue';
import AppAdvantages from '@/components/AppAdvantages.vue'; 
import AppSubscription from '@/components/AppSubscription.vue';
import AppImportant from '@/components/AppImportant.vue';
import AppFooter from '@/components/AppFooter.vue';


</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Play:wght@400;700&display=swap');
@import '@/assets/fonts/fonts.css';
* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}

body {
  max-width: 1920px;
  margin: 0 auto;
  background: #F0F2E6;
}

.main {
  max-width: 1480px;
  margin: 0 auto;
}
</style>
  
