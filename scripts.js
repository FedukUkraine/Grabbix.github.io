// Переменные
let coins = localStorage.getItem('coins') ? parseInt(localStorage.getItem('coins')) : 0;
let multiplier = localStorage.getItem('multiplier') ? parseInt(localStorage.getItem('multiplier')) : 1;
let upgradeCost = localStorage.getItem('upgradeCost') ? parseInt(localStorage.getItem('upgradeCost')) : 10;

// Обновление монет при нажатии
function tapCoin() {
    coins += multiplier;
    updateUI();
    saveData();
}

// Покупка улучшения
function buyUpgrade() {
    if (coins >= upgradeCost) {
        coins -= upgradeCost;
        multiplier++;
        upgradeCost *= 2;
        updateUI();
        saveData();
    } else {
        alert('Недостаточно монет для улучшения!');
    }
}

// Показ страницы
function showPage(pageId) {
    hideAllPages();
    document.getElementById(pageId).style.display = 'block';
}

// Скрытие всех страниц
function hideAllPages() {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => (page.style.display = 'none'));
}

// Проверка подписки
function checkSubscription() {
    alert('Подписка проверена! Вы получаете 100 монет.');
    coins += 100;
    updateUI();
    saveData();
}

// Сохранение данных в LocalStorage
function saveData() {
    localStorage.setItem('coins', coins);
    localStorage.setItem('multiplier', multiplier);
    localStorage.setItem('upgradeCost', upgradeCost);
}

// Обновление интерфейса
function updateUI() {
    document.getElementById('coins').innerText = `Монеты: ${coins}`;
    document.getElementById('multiplier').innerText = `Сила тапа: ${multiplier}`;
    document.getElementById('upgradeCost').innerText = `Стоимость улучшения: ${upgradeCost}`;
}

// Загрузка данных при запуске страницы
window.onload = function() {
    updateUI();
}
