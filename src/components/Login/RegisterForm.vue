<template>
  <div class="modal" v-if="isRegisterModalVisible">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <h2>Регистрация</h2>
      <form @submit.prevent="handleRegister">
        <div class="form-group">
          <label for="reg-name">Имя</label>
          <input id="reg-name" v-model="regName" autocomplete="name" required />
        </div>
        <div class="form-group">
          <label for="reg-email">Электронная почта</label>
          <input type="email" id="reg-email" v-model="regEmail" autocomplete="email" required />
        </div>
        <div class="form-group">
          <label for="reg-password">Пароль</label>
          <input type="password" id="reg-password" v-model="regPassword" autocomplete="currents-password" required />
        </div>
        <div class="form-group">
          <label for="repeated-password">Подтвердите пароль</label>
          <input type="password" id="repeated-password" v-model="repeatedPassword" autocomplete="current-password" required />
        </div>
        <button type="submit">Зарегистрироваться</button>
        <p>Уже есть аккаунт?
          <router-link to="/login">
            <a href="#" @click.prevent="switchToLogin">Войти</a>
          </router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';
import { useAuthStore } from '@/stores/authStore';

defineProps({
  isRegisterModalVisible: Boolean,
  switchToLogin: Function,
  closeModal: Function
})

const authStore = useAuthStore();

const regName = ref('');
const regEmail = ref('');
const regPassword = ref('');
const repeatedPassword = ref('');

const handleRegister = async () => {
  if (regPassword.value !== repeatedPassword.value) {
    alert('Пароли не совпадают!');
    return;
  }

  try {
    await authStore.register({
      username: regName.value,
      email: regEmail.value,
      password: regPassword.value,
      password2: repeatedPassword.value,
    });
  } catch (error) {
    console.error(error);
  }
};
</script>

<style scoped>
.upload-container {
  padding: 58px 0 0px 0;
  border-bottom: 1px solid #000000;
}

.header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 22px ;
}

.header-logo img {
  max-width: 150px;
  height: auto;
}

.nav-list {
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
  gap: 70px;
  flex-wrap: wrap;
}

.nav-item {
  font-family: 'Play', sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 23.14px;
  text-align: left;
  position: relative;
}

.nav-item a {
  text-decoration: none;
  color: #000000;
}

.nav-item a::after {
  content: "";
  display: block;
  width: 0;
  height: 2px;
  background-color: #F25B05;
  transition: width 0.3s ease;
  position: absolute;
  bottom: -5px;
  left: 0;
}

.nav-item a:hover::after {
  width: 100%;
}

.header-login {
  display: flex;
  font-family: 'Play', sans-serif;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}

.header-login > a {
  text-decoration: none;
  color: #000;
}

.btn-navifation-auth {
  border: none;
  background-color: transparent;
  cursor: pointer;

  font-family: 'Play', sans-serif;
  font-size: 16px;
  font-weight: 400;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

}

.header-register {
  padding: 10px 15px;
  border: 1px solid #000000;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
}

.header-register:hover {
  background-color: #000000;
  color: #FFFFFF;
  transition: all .3s ease;
}

.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  padding: 20px; /* Добавим отступ для мобильных устройств */
  overflow-y: auto; /* Добавим прокрутку, если модальное окно выходит за пределы экрана */
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  width: 400px;
  max-width: 540px; /* Ограничим ширину на мобильных устройствах */
  position: relative;
}

.close {
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;
  font-size: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  max-width: calc(100% - 20px); /* Учитываем padding */
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box; /* Обеспечиваем, что padding не увеличивает ширину */
}


/* Медиазапросы для адаптивности */

@media (max-width: 480px) {
  .modal-content {
    width: 100%; /* Занимает всю ширину экрана на мобильных устройствах */
    padding: 15px; /* Уменьшаем внутренний отступ */
  }

  .close {
    font-size: 24px; /* Увеличиваем иконку закрытия для удобства на мобильных устройствах */
  }

  .form-group input {
    padding: 8px; /* Уменьшаем отступы в input на мобильных */
  }
}

@media (max-width: 1024px) {
  .nav-list {
    gap: 30px;
  }

  .header-row {
    align-items: center;
  }
}

@media (max-width: 768px) {
  .nav-list {
    flex-direction: column;
    gap: 20px;
  }

  .header-login {
    gap: 15px;
    flex-direction: column;
  }

  .nav-item {
    font-size: 18px;
  }

  .header-register {
    padding: 8px 12px;
  }
}

@media (max-width: 480px) {
  .header-logo img {
    max-width: 120px;
  }

  .nav-item {
    font-size: 16px;
  }

  .header-register {
    padding: 6px 10px;
  }
}

</style>
