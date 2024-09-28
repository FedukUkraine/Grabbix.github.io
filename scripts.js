let score = 0
let timeLeft = 30 // Время на игру (в секундах)
let gameInterval
let timerInterval

// Получаем элементы
const coin = document.getElementById('coin')
const scoreDisplay = document.getElementById('score')
const timeDisplay = document.getElementById('time')
const progressBar = document.getElementById('progress-bar')
const restartButton = document.getElementById('restart-button')

// Функция старта игры
function startGame() {
	score = 0
	timeLeft = 30
	scoreDisplay.textContent = score
	timeDisplay.textContent = timeLeft
	progressBar.style.width = '100%'
	restartButton.style.display = 'none'

	// Запускаем таймер
	timerInterval = setInterval(() => {
		timeLeft--
		timeDisplay.textContent = timeLeft
		progressBar.style.width = (timeLeft / 30) * 100 + '%'

		if (timeLeft <= 0) {
			endGame()
		}
	}, 1000)

	// Разрешаем кликать на монетку
	coin.addEventListener('click', clickCoin)
}

// Функция для клика по монетке
function clickCoin() {
	score++
	scoreDisplay.textContent = score
}

// Функция завершения игры
function endGame() {
	clearInterval(timerInterval)
	coin.removeEventListener('click', clickCoin)
	restartButton.style.display = 'block' // Отображаем кнопку сброса
}

// Перезапуск игры при нажатии на кнопку "Начать заново"
restartButton.addEventListener('click', startGame)

// Стартуем игру при загрузке страницы
startGame()
