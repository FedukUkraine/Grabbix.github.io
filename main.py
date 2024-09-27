from os import name
import asyncio
import sqlite3
from telegram import InlineKeyboardButton, InlineKeyboardMarkup, WebAppInfo
from telegram.ext import ApplicationBuilder, CommandHandler

async def start(update, context):
    # URL изображения
    image_url = "https://ru.freepik.com/free-vector/hands-holding-tablet-with-forefinger-clicking-start-button-new-application-launch-flat-illustration_20827772.htm#fromView=keyword&page=1&position=0&uuid=ff28a3b0-d89e-4157-bd44-56c941576f16"
    
    # Создаем клавиатуру с кнопкой для открытия Web App
    keyboard = [[InlineKeyboardButton("Играть", web_app=WebAppInfo(url="https://fedukukraine.github.io/Grabbix.github.io/"))]]
    reply_markup = InlineKeyboardMarkup(keyboard)

    # Отправляем сообщение с фото и приветствием
    await context.bot.send_photo(
        chat_id=update.effective_chat.id,
        photo=image_url,
        caption="Приветствуем вас в боте Grabbix App! Это новая тапалка внутри Telegram. "
                "Для начала игры нажми на кнопку ниже!",
        reply_markup=reply_markup
    )

# Создаем подключение к базе данных (файл будет создан, если не существует)
connection = sqlite3.connect('database.db')

# Создаем курсор для выполнения SQL-запросов
cursor = connection.cursor()

# Создаем таблицу
cursor.execute('''
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    score INTEGER DEFAULT 0
)
''')

if __name__ == '__main__':
    app = ApplicationBuilder().token('7756674839:AAGglegWHSD6N83lAYylhUzT6cNWmAcYy18').build()
    
    # Команда /start запускает приветственное сообщение
    app.add_handler(CommandHandler('start', start))

    # Сохраняем изменения
    connection.commit()
    
    # Закрываем соединение
    connection.close()

    asyncio.run(app.run_polling())
