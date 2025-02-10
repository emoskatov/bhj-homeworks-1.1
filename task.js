// Получаем элемент для отображения таймера
const timerElement = document.getElementById('timer');
// Устанавливаем начальное время в секундах
let timeLeft = parseInt(timerElement.textContent, 10);
// Функция для обновления таймера
function updateTimer() {
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;
    // Форматируем время в формат hh:mm:ss
    timerElement.textContent =
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    // Уменьшаем время на 1 секунду
    timeLeft--;
    // Если время вышло, показываем сообщение
    if (timeLeft < 0) {
        clearInterval(timerInterval);
        alert('Вы победили в конкурсе!');
    }
}
// Запускаем таймер с интервалом 1 секунда
const timerInterval = setInterval(updateTimer, 1000);