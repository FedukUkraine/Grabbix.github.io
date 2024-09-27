// Переменные
let coins = localStorage.getItem('coins')
	? parseInt(localStorage.getItem('coins'))
	: 0
let multiplier = localStorage.getItem('multiplier')
	? parseInt(localStorage.getItem('multiplier'))
	: 1
let upgradeCost = localStorage.getItem('upgradeCost')
	? parseInt(localStorage.getItem('upgradeCost'))
	: 10
let upgradeCost2 = 50 // Стоимость второго улучшения

// Обновление монет при нажатии
function tapCoin() {
	coins += multiplier
	updateUI()
	saveData()
}

// Покупка первого улучшения
function buyUpgrade() {
	if (coins >= upgradeCost) {
		coins -= upgradeCost
		multiplier++
		upgradeCost *= 2
		updateUI()
		saveData()
	} else {
		alert('Недостаточно монет для улучшения!')
	}
}

// Покупка второго улучшения
function buyUpgrade2() {
	if (coins >= upgradeCost2) {
		coins -= upgradeCost2
		multiplier += 2 // Увеличиваем множитель на 2
		upgradeCost2 *= 2 // Увеличиваем стоимость второго улучшения
		updateUI()
		saveData()
	} else {
		alert('Недостаточно монет для второго улучшения!')
	}
}

// Показ страницы
function showPage(pageId) {
	hideAllPages()
	document.getElementById(pageId).style.display = 'block'
}

// Скрытие всех страниц
function hideAllPages() {
	const pages = document.querySelectorAll('.page')
	pages.forEach(page => (page.style.display = 'none'))
}

// Проверка подписки
async function checkSubscription() {
	const response = await fetch(
		`https://api.telegram.org/bot<7756674839:AAGglegWHSD6N83lAYylhUzT6cNWmAcYy18>/getChatMember?chat_id=@grabbixcoin&user_id=<USER_ID>`
	)
	const data = await response.json()

	if (data.ok && data.result.status === 'member') {
		alert('Подписка проверена! Вы получаете 100 монет.')
		coins += 100
	} else {
		alert(
			'Вы не подписаны на канал! Пожалуйста, подпишитесь, чтобы получить 100 монет.'
		)
	}

	updateUI()
	saveData()
}

// Сохранение данных в LocalStorage
function saveData() {
	localStorage.setItem('coins', coins)
	localStorage.setItem('multiplier', multiplier)
	localStorage.setItem('upgradeCost', upgradeCost)
	localStorage.setItem('upgradeCost2', upgradeCost2)
}

// Обновление интерфейса
function updateUI() {
	document.getElementById('coins').innerText = `Монеты: ${coins}`
	document.getElementById('multiplier').innerText = `Сила тапа: ${multiplier}`
	document.getElementById(
		'upgradeCost'
	).innerText = `Стоимость первого улучшения: ${upgradeCost}`
	document.getElementById(
		'upgradeCost2'
	).innerText = `Стоимость второго улучшения: ${upgradeCost2}`
}

// Загрузка данных при запуске страницы
window.onload = function () {
	updateUI()
}
