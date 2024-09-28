from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import ApplicationBuilder, CommandHandler, CallbackQueryHandler

TOKEN = '7756674839:AAGglegWHSD6N83lAYylhUzT6cNWmAcYy18'
GAME_URL = 'https://fedukukraine.github.io/Grabbix.github.io/'

async def start(update: Update, context):
    """Отправить приветственное сообщение с кнопками при выполнении команды /start"""
    keyboard = [
        [InlineKeyboardButton("Играть сейчас", url=GAME_URL)],
        [InlineKeyboardButton("Подписаться на канал", url="https://t.me/grabbixcoin")]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)
    
    await update.message.reply_text(
        text="Привет, добро пожаловать в Grabbix! Играй, выполняй задания, приглашай друзей и зарабатывай очки.",
        reply_markup=reply_markup
    )

def main():
    application = ApplicationBuilder().token(TOKEN).build()
    
    # Хендлер для команды /start
    application.add_handler(CommandHandler("start", start))
    
    # Запуск бота
    application.run_polling()

if __name__ == '__main__':
    main()
