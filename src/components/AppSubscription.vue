<template>
    <h1 class="title-subscrition">Откройте для себя новые возможности прямо сейчас!</h1>
    <div class="subscription-content">
      <div class="subscription-container">
        <h2 class="subscription-title">Пробная версия</h2>
  
        <div class="card-to-subscription">
          <AppSubscription
            text="На данный момент ИИ находится в разработке, и мы рады поделиться первыми шагами на пути к созданию инструмента для дизайнеров одежды"
            image="card-subcrition-1"  
            altText="Icon's 1"
          />
          <AppSubscription
            text="В этой версии вы сможете познакомиться с будущими функциями и возможностями, а также увидеть предполагаемые подписки"
            image="stars"  
            altText="Icon's 2"
          />
          <AppSubscription
            text="В рамках подписок будет предложен доступ к индивидуальной настройке лекал и выбор специфических параметров для вашей модели"
            image="iconFabric"  
            altText="Icon's 3"
          />
        </div>
      </div>

      <div class="subscription-container-two">
        <AppPrice
          title="БАЗОВАЯ"
          text="Ограниченная  генерация"
          price="20"
          textTwo="Библиотека с выкройками"
          image="gal"
        />
        <AppPriceBlue
          title="ПРОДВИНУТАЯ"
          text="Расширенная генерация"
          price="40"
          textTwo="Возможность редактирования"
          image="gal"
        />
        <AppPricePurple
          title="ПРЕМИУМ PRO+"
          text="Безлимитная генерация"
          price="infinity"
          textTwo="Возможность редактирования"
          image="gal"
        />
      </div>
    </div>
</template>

<script setup>
import AppSubscription from './SubscriptionCard.vue';
import AppPrice from './PriceCard/AppPrice.vue';
import AppPriceBlue from './PriceCard/AppPriceBlue.vue';
import AppPricePurple from './PriceCard/AppPricePurple.vue';

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
    margin-bottom: 170px;
}

.subscription-container {
  margin: 50px 55px 0px 55px;
  padding-bottom: 56px;
  border-bottom: 1px solid #000000;
}

.subscription-container-two {
  display: flex;
  flex-wrap: wrap;
  gap: 35px;
  margin: 62px 55px 50px 55px;
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
    margin-top: 30px;
}

@media (max-width: 1024px) {
  .card-to-subscription {
    flex-wrap: wrap;
  }
}

</style>