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

const express = require('express')
const mongoose = require('mongoose')

const app = express()
app.use(express.json())

// Подключение к MongoDB через mongoose
mongoose
	.connect(
		'mongodb+srv://<your_username>:<your_password>@cluster0.mongodb.net/grabbix?retryWrites=true&w=majority',
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}
	)
	.then(() => console.log('MongoDB connected'))
	.catch(err => console.log(err))

// Схема для хранения данных пользователей
const userProgressSchema = new mongoose.Schema({
	userId: String, // ID пользователя
	coinCount: Number, // Количество монет
	tapPower: Number, // Мощность тапов (множитель)
})

// Модель для взаимодействия с коллекцией в MongoDB
const UserProgress = mongoose.model('UserProgress', userProgressSchema)

// Сохранение прогресса пользователя
app.post('/save-progress', async (req, res) => {
	const { userId, coinCount, tapPower } = req.body

	let userProgress = await UserProgress.findOne({ userId })
	if (!userProgress) {
		userProgress = new UserProgress({ userId, coinCount, tapPower })
	} else {
		userProgress.coinCount = coinCount
		userProgress.tapPower = tapPower
	}

	await userProgress.save()
	res.send({ success: true })
})

// Получение прогресса пользователя
app.post('/get-progress', async (req, res) => {
	const { userId } = req.body
	const userProgress = await UserProgress.findOne({ userId })
	if (userProgress) {
		res.send(userProgress)
	} else {
		res.send({ coinCount: 0, tapPower: 1 }) // Начальные значения, если нет данных
	}
})

app.listen(3000, () => {
	console.log('Server running on port 3000')
})

// Сохранение данных пользователя
function saveProgress(userId, coinCount, tapPower) {
	fetch('https://cloud.mongodb.com/save-progress', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ userId, coinCount, tapPower }),
	})
		.then(response => response.json())
		.then(data => {
			console.log('Progress saved:', data)
		})
}

// Загрузка прогресса пользователя
function loadProgress(userId) {
	fetch('https://cloud.mongodb.com/get-progress', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ userId }),
	})
		.then(response => response.json())
		.then(data => {
			// Присваиваем значения из базы данных
			coinCount = data.coinCount
			tapPower = data.tapPower

			// Обновляем интерфейс
			updateUI()
		})
}

const userId = telegramUserId // ID пользователя Telegram
loadProgress(userId) // Загрузка прогресса при входе
