<!DOCTYPE html>
<html lang="ru">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="stylesheet" href="styles.css" />
		<title>Grabbix App</title>
		<style>
			/* Анимация фона с снегом */
			body {
				background: url('path_to_snow_background.gif') no-repeat center center
					fixed;
				background-size: cover;
			}

			.hidden {
				display: none;
			}

			/* Стили для кнопок */
			.button {
				background: url('https://imgur.com/a/au6xdiC') no-repeat center;
				background-size: cover;
				border: none;
				padding: 10px 20px;
				cursor: pointer;
				transition: transform 0.2s;
			}

			.button:hover {
				transform: scale(1.1);
			}

			.section {
				padding: 20px;
				color: white;
				text-align: center;
			}
		</style>
		<script
			type="text/javascript"
			src="https://code.jquery.com/jquery-3.4.1.min.js"
		></script>
	</head>
	<body>
		<div id="mainMenu" class="section">
			<h1>Главное меню</h1>
			<button class="button" onclick="showSection('upgrades')">
				Улучшения
			</button>
			<button class="button" onclick="showSection('quests')">Задания</button>
			<button class="button" onclick="showSection('airdrops')">Аирдропы</button>
		</div>

		<div id="upgrades" class="section hidden">
			<h1>Улучшения</h1>
			<p>Здесь можно купить улучшения.</p>
			<button class="button" onclick="showSection('mainMenu')">Назад</button>
		</div>

		<div id="quests" class="section hidden">
			<h1>Задания</h1>
			<p>Подписывайтесь на каналы!</p>
			<button class="button" onclick="showSection('mainMenu')">Назад</button>
		</div>

		<div id="airdrops" class="section hidden">
			<h1>Аирдропы</h1>
			<p>Информация о аирдропах.</p>
			<button class="button" onclick="showSection('mainMenu')">Назад</button>
		</div>

		<script src="scripts.js"></script>
		<script src="js/snowfall.js"></script>
		<script type="text/javascript">
			$(document).ready(function () {
				$(document).snowfall()
			})
		</script>
	</body>
</html>
