<template>
    <h1 class="title-subscrition">Откройте для себя новые возможности прямо сейчас!</h1>
    <div class="subscription-content">
      <div class="subscription-container">
        <h2 class="subscription-title">Пробная версия</h2>
  
        <div class="card-to-subscription">
          <AppSubscription
            text="На данный момент ИИ находится в разработке, и мы рады поделиться первыми шагами на пути к созданию инструмента для дизайнеров одежды"
            image="/card-subscription-1.png"  
            altText="Icon's 1"
          />
          <AppSubscription
            text="В этой версии вы сможете познакомиться с будущими функциями и возможностями, а также увидеть предполагаемые подписки"
            image="/stars.png"  
            altText="Icon's 2"
          />
          <AppSubscription
            text="В рамках подписок будет предложен доступ к индивидуальной настройке лекал и выбор специфических параметров для вашей модели"
            image="/iconFabric.png"  
            altText="Icon's 3"
          />
        </div>
      </div>
    </div>
</template>

<script setup>
import AppSubscription from './SubscriptionCard.vue';

</script>
  
<style scoped>
.title-subscrition {
    font-family: 'BravoRG', sans-serif;
    font-size: 50px;
    font-weight: 400;
    line-height: 57.7px;
    text-align: left;
    color: #000000;
    padding-bottom: 44px;
    border-bottom: 1px solid #000000;
    margin: 0 0 60px 0;
}

.subscription-content {
    width: 100%;
    border: 1px solid #000000;
    border-radius: 10px;
    height: 520px;
    margin-bottom: 170px;
}

.subscription-container {
    margin: 50px 55px 0px 55px;
    padding-bottom: 56px;
    border-bottom: 1px solid #000000;
}

.subscription-title {
    font-family: 'BravoRG', sans-serif;
    font-size: 50px;
    font-weight: 400;
    line-height: 57.7px;
    text-align: left;
    margin: 0;
}

/* card */
.card-to-subscription {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 72px;
}


</style>