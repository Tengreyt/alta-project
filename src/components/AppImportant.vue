<template>
    <div class="important-section">
        <div class="important">
            <div class="important-content-text">
                <h1 class="important-title">Пусть на фото будут все важные детали</h1>
                <div class="line"></div>
            </div>
        </div>

        <div class="important-images">
            <div class="primary-image">
                <img src="../assets/images/primary.jpg" alt="img 1">
            </div>
            <div class="secondary-images">
                <div>
                    <img src="../assets/images/second.jpg" alt="img 2" class="secondary-image-large">
                </div>
                <div>
                    <img src="../assets/images/trhee.jpg" alt="img 3">
                    <img src="../assets/images/last.jpg" alt="img 4">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.important-section {
    display: flex;
    flex-direction: column;
    gap: 35px;
    margin-bottom: 257px;
    padding: 0 20px;
}

.important {
    margin-bottom: 20px;
}

.important-content-text {
    display: flex;
    align-items: center;
    gap: 35px;
}

.important-title {
    font-family: 'BravoRG', sans-serif;
    font-size: 50px;
    font-weight: 400;
    line-height: 1.2;
    text-align: left;
    color: #000000;
    margin: 0;
}

.line {
    border-bottom: 1px solid #000000;
    width: 100%;
    max-width: 510px;
    height: 10px;
}
/* ======== */
.important-images {
    display: flex;
    justify-content: space-around;
    gap: 20px;
}

.primary-image > img {
    height: 100%;
    width: 100%;
}

.secondary-images {
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.secondary-images > div:nth-child(2) {
    display: flex;
    gap: 24px;
}

.primary-image > img, 
.secondary-images img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
}

/* Медиазапросы для адаптивности */
@media (max-width: 1024px) {
    .important-title {
        font-size: 36px;
    }

    .important-section {
        gap: 25px;
        margin-bottom: 150px;
    }

    .line {
        max-width: 250px;
    }

    .primary-image > img {
        max-width: 80%; /* Уменьшаем основной блок */
    }

    .secondary-images img {
        max-width: 70%;
    }

    .secondary-images > div:nth-child(2) {
        justify-content: center;
    }
    .line {
        max-width: 350px;
    }
    .secondary-images img {
        max-width: 48.5%;
    }
    .important-images {
        display: flex;
        flex-direction: column;
    }
}

@media (max-width: 768px) {
    .important-title {
        font-size: 28px;
    }

    .primary-image, .secondary-images {
        max-width: 100%;
        text-align: center;
    }

    .secondary-images > div:nth-child(2) {
        gap: 15px;
        width: 61.2%;
    }

    .important-images {
        flex-direction: column;
        align-items: center;
    }

    .primary-image > img {
        max-width: 90%; /* Основное изображение чуть больше для небольших экранов */
    }

    .secondary-images img {
        max-width: 80%; /* Уменьшаем второстепенные картинки */
    }
}

@media (max-width: 480px) {
    .important-title {
        font-size: 24px;
        line-height: 1.1;
    }

    .line {
        max-width: 150px;
    }

    .secondary-images > div:nth-child(2) {
        flex-direction: column;
        gap: 10px;
    }

    .primary-image > img {
        max-width: 100%; /* Используем полную ширину экрана */
    }

    .secondary-images img {
        max-width: 100%; /* Ставим каждую картинку на полную ширину */
    }

    .secondary-images > div:nth-child(2) {
        flex-direction: column; /* Картинки будут друг под другом на маленьких экранах */
    }
}


</style>
