<template>
    <h2 class="titlt-section">Ваш помощник по разработке лекал</h2>
    <div class="advantages">
        <div class="card-adv">
            <div class="title-card card">
                <p class="title-card-text">1-й</p>
                <p class="title-card-subtext">в своем роде</p>
            </div>
            <div class="title-card-dark card-dark">
                <p class="title-card-text">ДО 30%</p>
                <p class="title-card-subtext-dark">экономии средств</p>
            </div>
            <div class="title-card card-gray">
                <p class="title-card-text">×3</p>
                <p class="title-card-subtext">к скорости расчета</p>
            </div>
            <div class="title-card card-gray">
                <p class="title-card-text">В 100</p>
                <p class="title-card-subtext">раз проще, чем руками</p>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.titlt-section {
    font-family: 'BravoRG', sans-serif;
    font-size: 50px;
    font-weight: 400;
    line-height: 57.7px;
    color: #000;
    margin-bottom: 20px;
}

.advantages {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 40px;
}

.card-adv {
    max-width: 573px;
    display: flex;
    flex-wrap: wrap;
    gap: 18px;
}

.card {
    padding: 63px 133px 43px 33px;
}

.card-dark {
    padding: 76px 86px 43px 33px;
}

.card-gray {
    padding: 74px 49px 51px 33px;
}

.title-card, .title-card-dark {
    max-width: 277px;
    width: 277px;
    border-radius: 10px;
    /* padding: 20px; */
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    box-sizing: border-box;
}

.title-card {
    background-color: #EEEEEE;
}

.title-card-dark {
    background-color: #3D3C3E;
    color: #ffffff;
}

.title-card-text {
    font-family: 'BravoRG', sans-serif;
    font-size: 60px;
    font-weight: 400;
    line-height: 1;
    margin: 0;
}

.title-card-subtext-dark {
    font-family: 'Play', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.3;
    margin: 10px 0px 0px 0px;
}

.title-card-subtext {
    font-family: 'Play', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.3;
    margin: 10px 0px 0px 0px;
    color: #3D3C3E;
}

@media (max-width: 1024px) {
    .titlt-section {
        font-size: 40px;
        text-align: center;
    }

    .title-card, .title-card-dark {
        width: 240px;
        height: 180px;
        padding: 15px;
    }

    .title-card-text {
        font-size: 50px;
    }

    .title-card-subtext {
        font-size: 14px;
    }
}

@media (max-width: 768px) {
    .titlt-section {
        font-size: 35px;
    }

    .advantages {
        justify-content: center;
    }

    .title-card, .title-card-dark {
        width: 220px;
        height: 160px;
        padding: 12px;
    }

    .title-card-text {
        font-size: 40px;
    }

    .title-card-subtext {
        font-size: 12px;
    }
}

@media (max-width: 480px) {
    .titlt-section {
        font-size: 28px;
    }

    .title-card, .title-card-dark {
        width: 100%;
        max-width: 220px;
        height: 140px;
        padding: 10px;
    }

    .title-card-text {
        font-size: 30px;
    }

    .title-card-subtext {
        font-size: 10px;
    }
}
</style>
