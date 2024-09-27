let coins = 0
let multiplier = 1
let upgradeCost = 10

function tapCoin() {
	coins += multiplier
	document.getElementById('coins').innerText = coins
}

function buyUpgrade() {
	if (coins >= upgradeCost) {
		coins -= upgradeCost
		multiplier++
		upgradeCost *= 2
		document.getElementById('multiplier').innerText = multiplier
		document.getElementById('coins').innerText = coins
		document.getElementById('upgradeCost').innerText = upgradeCost
	} else {
		alert('Недостаточно монет для улучшения!')
	}
}

function showPage(pageId) {
	document.getElementById(pageId).style.display = 'block'
}

function hidePage() {
	const pages = document.querySelectorAll('.page')
	pages.forEach(page => (page.style.display = 'none'))
}

function checkSubscription() {
	alert('Подписка проверена! Вы получаете 100 монет.')
	coins += 100
	document.getElementById('coins').innerText = coins
}
