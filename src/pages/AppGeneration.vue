<template>
    <div class="main">
        <AppHeader />
        <div class="generation">
            <div class="upload-container">
                <FileUpload @file-uploaded="handleFileUpload" />
                <div class="generate-res">
                    <button class="generate-button" :disabled="!selectedFile">Начать генерацию</button>
                </div>
            </div>
        </div>
        <div class="note">
                <div>
                    <img src="@/assets/images/Danger.png" alt="">
                </div>
                <p class="note-text"><span>Примечание</span><br>
                    Результатом генерации станет лекало размера M</p>
            </div>
        <AppFooter />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import FileUpload from '@/components/FileUpload.vue';

const selectedFile = ref(null);

const handleFileUpload = (file) => {
    selectedFile.value = file;
};
</script>

<style scoped>
.main {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.generation {
    display: flex;
    flex-direction: column;
    align-items: center;

    max-width: 1464px;
    min-height: 500px;
    margin-top: 80px;
    border-radius: 30px;
}

.upload-container {
    width: 100%;
    padding: 40px 40px 46px 40px;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.upload-box {
    border: 2px dashed #ccc;
    border-radius: 8px;
    padding: 40px;
    text-align: center;
    background-color: #fff;
}

.upload-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 107px 0px;
}

.upload-content img {
    width: 40px;
    height: 40px;
}

.upload-text {
    font-family: 'Play', sans-serif;
    font-size: 18px;
    font-weight: bold;
    margin-top: 10px;
}

.upload-subtext {
    font-family: 'Play', sans-serif;
    font-size: 14px;
    color: #666;
    margin-top: 8px;
}

.upload-link {
    color: #ff6600;
    cursor: pointer;
}

.generate-button {
    margin-top: 30px;
    background-color: #F25B05;
    border: none;
    color: white;
    padding: 23.5px 38px;
    border-radius: 20px;
    cursor: pointer;

    font-family: 'Play', sans-serif;
    font-size: 16px;
    transition: .3s ease;
}
/* #CE4D04 */
.generate-button:hover {
    background-color: #CE4D04;
}

.generate-res {
    display: flex;
    justify-content: flex-end;
}

.note {
    display: flex;
    align-items: center;
    gap: 18px;
    max-width: 464px;
    width: 100%;
    background: #fff;
    border-radius: 18px;
    padding: 14px 30px 14px 20px;
    margin-top: 22px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.note-icon {
    color: red;
    margin-right: 10px;
}

.note-text {
    font-family: 'Play', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 18.51px;

    color: #3D3C3E;
}

.note-text span {
    font-weight: 700;
    font-size: 18px;
    line-height: 20.83px;
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
