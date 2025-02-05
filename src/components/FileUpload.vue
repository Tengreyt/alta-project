<template>
    <div 
        class="upload-box"
        :class="{ 'dragover': isDragging }"
        @dragover.prevent="handleDragOver"
        @dragleave="handleDragLeave"
        @drop.prevent="handleDrop"
    >
        <div class="upload-content">
            <img src="@/assets/images/Editable-line.svg" alt="Upload" />
            <p class="upload-text">Загрузка файла</p>
            <p class="upload-subtext">
                <span class="upload-link">Выберите изображение</span>, либо перетащите его сюда
            </p>
        </div>
    </div>
    <div v-if="uploadedFile" class="file-info">
        <p>Файл: {{ uploadedFile.name }}</p>
    </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const isDragging = ref(false);
const uploadedFile = ref(null);
const emit = defineEmits(['file-uploaded']);

const handleDragOver = () => {
    isDragging.value = true;
};

const handleDragLeave = () => {
    isDragging.value = false;
};

const handleDrop = (event) => {
    isDragging.value = false;
    const files = event.dataTransfer.files;
    if (files.length > 0) {
        uploadedFile.value = files[0]; // Сохраняем файл
        emit('file-uploaded', files[0]); // Передаём файл в родительский компонент
    }
};
</script>

<style scoped>
.upload-box {
    border: 2px dashed #ccc;
    border-radius: 8px;
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

.upload-content p {
    margin: 10px 0px 0px 0px;
}


.upload-text {
    font-family: 'Play', sans-serif;
    font-size: 18px;
    font-weight: bold;
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
}

.generate-res {
    display: flex;
    justify-content: flex-end;
}
</style>
