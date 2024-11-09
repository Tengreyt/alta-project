<template>
    <div class="footer-container">
        <div class="section-primary-footer">
            <div class="group-left">
                <img src="/icons/Group 12.png" alt="Group">
            </div>
    
            <div class="group-right">
                <img src="/icons/Group 12.png" alt="Group">
            </div>
        </div>
        <div class="footer">
            <div class="footer-content">
                <div class="footer-logo">
                    <img src="/icons/ALTA.AI-footer.png" alt="ALTA">
                </div>
                <h2 class="footer-title">Работа в удовольствие</h2>
                <div class="footer-line"></div>
    
                <div class="footer-row">
                    <div class="footer-column">
                        <h3 class="footer-column-title">Готовы работать с нами?</h3>
                        <div class="footer-sub">
                            <p>Скидка на первую  подписку <span>50%</span></p>
                            <div>
                                <img src="/icons/Arrow.png" alt="Arrow">
                            </div>
                        </div>
                    </div>
                    
                    <div class="footer-navigation">
                        <nav class="footer-nav">
                            <ul class="footer-list">
                                <li>О нас</li>
                                <li>Компания</li>
                                <li>Продукт</li>
                            </ul>
    
                            <ul class="footer-list">
                                <li>Контакты</li>
                                <li>Telegram</li>
                                <li>Instagram</li>
                            </ul>
    
                            <ul class="footer-list">
                                <li>Безопасность</li>
                                <li>Тех поддержка</li>
                                <li>Copyright © 2024</li>
                            </ul>
                        </nav>
                    </div>
                </div>   
            </div>

        </div>

        
    </div>
</template>

<script setup>
</script>

<style scoped>
.footer-container {
    padding: 0px 20px;
}

.section-primary-footer {
    position: relative;
    top: 50px;
    display: flex;
    justify-content: space-between;
    padding: 0px 45px;
}

.group-left  {
    width: 43px;
    height: 106px;
    color: #000;
}

/* footer */

.footer {
    border-radius: 20px;
    background: #3D3C3E;
    padding: 57px 67px 89px 64px;
}

/* Стили для логотипа */
.footer-logo {
    width: 150px; /* Установите желаемую ширину логотипа для десктопа */
    margin-bottom: 20px;
}

.footer-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}

/* Заголовок и линия */
.footer-title {
    font-family: "Pacifico", sans-serif;
    font-size: 50px;
    font-weight: 400;
    line-height: 87.8px;
    text-align: center; /* Центрируем заголовок */
    color: #FDFDFD;
    margin: 10px 0px 0px 0px;
}

.footer-line {
    width: 100%; /* Сделаем линию меньше ширины контейнера */
    height: 1px;
    background: #FDFDFD;
    margin-top: 15px;
}

/* footer-row" */

.footer-column {
    display: flex;
    flex-direction: column;
}

.footer-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start; /* Попробуйте заменить center на flex-start */
    gap: 50px; /* Добавьте промежуток между колонками */
    margin-top: 30px;
    width: 100%; /* Убедитесь, что блок занимает всю ширину */
}

.footer-column-title {
    font-family: 'BravoRG', sans-serif;
    font-size: 50px;
    font-weight: 400;
    line-height: 57.7px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: #FFFFFF;
    margin: 0;
}

.footer-sub {
    display: flex;
    align-items: center;
    gap: 20px;
}

.footer-sub p {
    font-family: 'Play', sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 20.83px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: #FFFFFF;
    margin: 0;
    cursor: pointer;
}

.footer-sub p span {
    color: #F25B05;
    font-family: 'Play', sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 20.83px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;

}

.footer-sub > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 34px;
    border-radius: 50%;
    background: #FFFFFF;
    cursor: pointer;
}

.footer-sub > div > img {
    margin-left: 3px;
}

/* footer-navigation */

.footer-navigation {
    display: flex;
    gap: 88px; /* Разделение между списками */
    flex-wrap: wrap;
}

.footer-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 65px;
}

.footer-list {
    display: flex;
    flex-direction: column;
    gap: 13px;
    padding: 0;
    margin: 0;
    list-style: none;
}

.footer-list li {
    color: #B3B3B3; 
    font-family: 'Play', sans-serif;
    font-size: 18px;
    line-height: 1.5;
    cursor: pointer;
}

.footer-list li:first-child {
    color: #FFFFFF;
}

/* Нотбуковая версия */
@media (max-width: 1024px) {
    .footer-nav {
        flex-direction: row;
        align-items: flex-start;
        gap: 30px;
    }

    .footer-title {
        font-size: 40px;
    }

}

/* Планшетная версия */
@media (max-width: 768px) {
    .footer-row {
        flex-direction: column;
        align-items: flex-start;
    }

    .footer-logo > img {
        width: 220px; /* Уменьшаем размер логотипа */
    }

    .footer-title {
        font-size: 36px;
    }
    
    .footer-line {
        width: 100%; /* Сделаем линию меньше ширины контейнера */
        height: 1px;
        background: #FDFDFD;
        margin: 0px;
    }

    .footer-navigation {
        justify-content: center;
        align-items: center; /* Центрируем меню навигации */
        width: 100%;
    }

    .footer-nav {
        flex-direction: row;
        align-items: flex-start;
        gap: 80px;
    }

    .footer-container {
        padding: 0px 0px;
    }

    .footer-list li {
        font-size: 16px;
    }

    .footer-row {
        flex-direction: column;
        align-items: center; /* Центрируем элементы по горизонтали */
        justify-content: center; /* Центрируем элементы по вертикали */
        gap: 20px;
    }
}

/* Мобильная версия */
@media (max-width: 480px) {
    .footer-row {
        padding: 20px;
        gap: 20px;
    }

    .footer-container {
        padding: 0px 0px;
    }

    .footer-logo > img {
        width: 250px; /* Дополнительно уменьшаем размер логотипа */
        margin-bottom: 10px;
    }

    .footer-title {
        font-size: 27px;
        text-align: center;
    }

    .footer-column-title {
        font-size: 30px;
    }

    .footer-navigation {
        width: 100%;
    }

    .footer-nav {
        gap: 15px;
    }

    .footer-list li {
        font-size: 14px;
    }

    .footer-sub p {
        font-size: 14px;
    }
    
    .footer-sub {
        gap: 5px;
    }

    .footer-sub > div {
        width: 35px;
        height: 25px;
    }
    .footer-sub > div > img {
        width: 16px;
        height: 16px;
        margin: 0;
    }
}
</style>