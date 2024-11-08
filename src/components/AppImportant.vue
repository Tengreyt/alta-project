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
    line-height: 57.7px;
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


</style>
