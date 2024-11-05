<template>
    <div class="content">
        <div class="info-container">
            <h2 class="info-title">Загрузите фото и выберите желаемый формат </h2>
            <div class="info-line">
                <p class="info-subtitle">
                    Инновационный подход к созданию лекал:
                    превращаем фотографии в точные шаблоны 
                    для вашей одежды с учетом разных размеров.
                </p>
                <svg>
                    <use xlink:href="/icons/noun-wavy-line.svg#noun-wavy-line"></use>
                </svg>

            </div>

            <h2 class="info-text">Больше возможностей</h2>

            <div class="info-content-btn">
                <p class="individual">Индивидуальные параметры</p>
                <p class="effectiveness">Высокая эффекивность</p>
                <p class="automation">Автоматизация процесса</p>
            </div>

            <!-- Кнопки для гайда и сгенерирования -->
            <div class="buttons-content">
                <p class="button">Сгенерировать   выкройку</p>
                <div class="border-box"></div>


               <div class="info-player" @click="togglePlayer">
                    <svg>
                        <use xlink:href="/icons/player.svg#player"></use>
                    </svg>
                    <p class="text-player">Посмотреть видео гайд</p>
                </div>
            </div>

           <!-- Условное отображение видео плеера -->
            <template v-if="isPlayerVisible">
                <div class="video-player">
                    <iframe
                        width="690"
                        height="415"
                        src="https://www.youtube.com/watch?v=qYepywQQFVk&list=RDauiJbYnOZ9w&index=10" 
                        title="YouTube video player "
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>
                    <button @click="togglePlayer">Закрыть</button>
                </div>
            </template>
        </div>
        <div class="content-image">
            <img src="../assets/images/Rectangle.jpg" alt="Logo-info">
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const isPlayerVisible = ref(false);

const togglePlayer = () => {
    isPlayerVisible.value = !isPlayerVisible.value;
};
</script>

<style scoped>
.content {
    display: flex;
    justify-content: space-between;
    gap: 34px;
    margin: 0 auto;
    padding: 49px 0 0 0;
}

.content-image {
    margin-bottom: 176px;
}

.info-title {
    font-family: 'BravoRG', sans-serif;
    text-transform: uppercase;
    font-size: 50px;
    font-weight: 400;
    line-height: 57.7px;
    text-align: left;
    margin: 0px;
}

.info-line {
    max-width: 637px;
    display: flex;
    gap: 110px;
    justify-content: space-between;
}

.info-line > svg {
    width: 125px;
    height: 144px;
}

.info-subtitle {
    max-width: 404px;
    font-family: 'Play', sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 20.83px;
    text-align: start;
    color: #3D3C3E;
    margin-top: 33px;
}

.info-text {
    margin: 5px 0px 0px 0px;
    font-family: 'BravoRG', sans-serif;
    text-align: end;
    font-size: 50px;
    font-weight: 400;
    line-height: 57.7px;
    color: #000000;
}

.info-content-btn {
    display: flex;
    justify-content: flex-end;
    gap: 16px;
    margin-top: 10px;
}

.info-content-btn p {
    font-family: 'Play', sans-serif;
    font-size: 15px;
    font-weight: 400;
    line-height: 17.36px;
    text-align: center;
    color: #3D3C3E;
}

.individual {
    width: 161px;
    padding: 13px 0px;
    border: 1px solid #3D3C3E;
    border-radius: 10px;
}

.effectiveness {
    width: 161px;
    padding: 15px 0px;
    border: 1px solid #3D3C3E;
    border-radius: 10px;
}

.automation {
    width: 161px;
    padding: 15px 0px;
    border: 1px solid #3D3C3E;
    border-radius: 10px;
}

/* BUTTONs */
.buttons-content {
    display: flex;
    align-items: center; /* Центрируем по вертикали */
    margin-top: 8px;
    gap: 38px;
    position: relative; /* Для позиционирования кнопки */
}

.button {
    background-color: #EE5600BA;
    color: white;
    font-family: 'Play', sans-serif;
    font-size: 18px;
    font-weight: 700;
    line-height: 20.83px;
    padding: 10px 20px;
    border-radius: 10px;
    cursor: pointer;
    transition: transform 0.3s ease; /* Плавный переход для трансформации */
}

.button:hover {
    transform: translateY(10px); /* Перемещение кнопки вниз при наведении */
}

.border-box {
    border: 1px solid #323231;
    border-radius: 10px;
    width: 261px;
    height: 40px; /* Задайте желаемую высоту для блока */
    position: absolute; /* Для позиционирования */
    z-index: -1;
    bottom: 7px;
}

.button:hover {
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
}

.info-player {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    color: #000;
}

.info-player > svg {
    width: 54px;
    height: 51px;
}

.player-icon {
    width: 24px;
    height: 24px;
    fill: #000;
}

.text-player {
    font-family: 'Play', sans-serif;
    font-size: 15px;
    font-weight: 400;
    line-height: 17.36px;
    text-align: left;
    color: #3D3C3E;
}

/* Видео плеер */
.video-player {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
    z-index: 1000; /* Чтобы плеер был поверх других элементов */
}

.video-player iframe {
    border-radius: 10px; /* Сглаживание углов */
}

.video-player button {
    display: block;
    margin: 10px auto;
    padding: 10px 20px;
    background-color: #FF6D00;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}


</style>