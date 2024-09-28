let score = 0

// Получаем элемент монетки и элемента для отображения очков
const coin = document.getElementById('coin')
const scoreDisplay = document.getElementById('score')

// Добавляем обработчик клика на монетку
coin.addEventListener('click', () => {
	// Увеличиваем счёт
	score++

	// Обновляем отображение очков
	scoreDisplay.textContent = score
})
