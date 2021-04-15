const answer = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

while (true) {
    const userAnswer = prompt('Отгадайте число от 1 до 100. Введите "выход" для выхода из игры.');
    if (userAnswer.toLowerCase() === 'выход') {
        break;
    }

    const userNumber = Number.parseInt(userAnswer, 10);
    if (Number.isNaN(userNumber)) {
        alert('Вы ввели не число.');
        continue;
    }

    if (userNumber > 100 || userNumber < 1) {
        alert('Значение должно быть в диапазоне [1, 100].');
        continue;
    }

    attempts++;
    if (userNumber > answer) {
        alert('Попробуйте взять число меньше.');
    } else if (userNumber < answer) {
        alert('Попробуйте взять число больше.');
    } else {
        alert('Верно! Число отгадано с ' + attempts + ' попытки.');
        break;
    }
}
