from os import name
import asyncio
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

if __name__ == '__main__':
    app = ApplicationBuilder().token('7756674839:AAGglegWHSD6N83lAYylhUzT6cNWmAcYy18').build()
    
    # Команда /start запускает приветственное сообщение
    app.add_handler(CommandHandler('start', start))

    asyncio.run(app.run_polling())