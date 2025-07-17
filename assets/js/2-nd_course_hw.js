console.log("Привет");
console.log("Привет");

// Задание 2: Вывести в консоль цифры от 1 до 5
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Задание 3: Вывести в консоль числа от 7 до 22
for (let i = 7; i <= 22; i++) {
    console.log(i);
}

// Задание 4: Вывести зарплаты сотрудников
const obj = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400'
};
for (let name in obj) {
    console.log(`${name} — зарплата ${obj[name]} долларов`);
}

// Задание 5: Делить n=1000 на 2, пока результат не станет меньше 50, и посчитать количество итераций
let n = 1000;
let num5 = 0;
while (n >= 50) {
    n = n / 2;
    num5++;
}
console.log(`Результат: ${n}`);
console.log(`Количество итераций: ${num5}`);

// Задание 6: Напоминание о пятницах
let firstFriday = 3; // например, первая пятница месяца — 3-е число
for (let day = firstFriday; day <= 31; day += 7) {
    console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
}

// Создаем переменную a и присваиваем ей значение 10
let a = 10;

// Выводим значение переменной a на экран
document.getElementById('task1').innerHTML = "Значение переменной a: " + a;

// Присваиваем переменной a новое значение 20
a = 20;

// Выводим новое значение переменной a на экран
document.getElementById('task1').innerHTML += "<br>Новое значение переменной a: " + a;

// Создаем переменную для года выпуска первого iPhone
let firstIPhoneYear = 2007;

// Выводим год выпуска первого iPhone на экран
document.getElementById('task2').innerHTML = "Первый iPhone был выпущен в " + firstIPhoneYear + " году";

// Создаем переменную для имени создателя JavaScript
let javascriptCreator = "Брендан Эйх";

// Выводим имя создателя JavaScript на экран
document.getElementById('task3').innerHTML = "Создатель языка JavaScript: " + javascriptCreator;

// Создаем две переменные со значениями 10 и 2
let num1 = 10;
let num2 = 2;

// Вычисляем математические операции
let sum = num1 + num2;        // Сумма
let difference = num1 - num2; // Разность
let product = num1 * num2;    // Произведение
let quotient = num1 / num2;   // Частное

// Выводим результаты математических операций на экран
document.getElementById('task4').innerHTML = 
    "Переменная 1: " + num1 + "<br>" +
    "Переменная 2: " + num2 + "<br><br>" +
    "Сумма: " + num1 + " + " + num2 + " = " + sum + "<br>" +
    "Разность: " + num1 + " - " + num2 + " = " + difference + "<br>" +
    "Произведение: " + num1 + " × " + num2 + " = " + product + "<br>" +
    "Частное: " + num1 + " ÷ " + num2 + " = " + quotient;

// Возводим 2 в 5-ю степень и записываем результат в переменную
let result = Math.pow(2, 5);

// Выводим результат возведения в степень на экран
document.getElementById('task5').innerHTML = "2 в 5-й степени = " + result + "<br>Результат записан в переменную 'result'";

// Задание 5: Определение сезона по номеру месяца
let monthNumber = 12; // Можно менять для проверки
if (monthNumber > 12 || monthNumber < 1) {
    // Если номер месяца некорректный, программа не выполняется
    console.log('Некорректный номер месяца');
    const task5Div = document.getElementById('task5');
    if (task5Div) {
        task5Div.textContent = 'Некорректный номер месяца';
    }
} else {
    let season;
    switch (monthNumber) {
        case 12:
        case 1:
        case 2:
            season = 'зима';
            break;
        case 3:
        case 4:
        case 5:
            season = 'весна';
            break;
        case 6:
        case 7:
        case 8:
            season = 'лето';
            break;
        case 9:
        case 10:
        case 11:
            season = 'осень';
            break;
    }
    console.log(season);
    const task5Div = document.getElementById('task5');
    if (task5Div) {
        task5Div.textContent = 'Сезон: ' + season;
    }
}

// Создаем переменные a = 9 и b = 2
let a_task6 = 9;
let b_task6 = 2;

// Находим остаток от деления a на b
let remainder = a_task6 % b_task6;

// Выводим результат остатка от деления на экран
document.getElementById('task6').innerHTML = 
    "Переменная a = " + a_task6 + "<br>" +
    "Переменная b = " + b_task6 + "<br>" +
    "Остаток от деления a на b: " + a_task6 + " % " + b_task6 + " = " + remainder;

// Переписываем код с использованием операторов присваивания и инкремента/декремента
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
document.getElementById('task7').innerHTML = 
    "Исходный код переписан с использованием операторов присваивания и инкремента/декремента:<br>" +
    "let num = 1;<br>" +
    "num += 5; // num = num + 5<br>" +
    "num -= 3; // num = num - 3<br>" +
    "num *= 7; // num = num * 7<br>" +
    "num /= 3; // num = num / 3<br>" +
    "num++; // num = num + 1<br>" +
    "num--; // num = num - 1<br><br>" +
    "Результат: " + num;

// Задание 8: Получаем возраст пользователя через prompt и выводим через alert
let age = prompt("Сколько вам лет?");
alert("Вам " + age + " лет");

// Задание 9: Создаем объект user с нужными свойствами
let user = {
    name: "Алексей",
    age: 25,
    isAdmin: true
};
// Для проверки выведем объект в консоль
console.log(user);

// Задание 10: Получаем имя пользователя через prompt и выводим приветствие через alert
let userName = prompt("Как вас зовут?");
alert(`Привет, ${userName}!`);

// Дополнительное задание
let number = prompt("Загадайте любое число");
number = Number(number); // Преобразуем к числу на всякий случай

let doubled = number * 2;
alert("Удвоенное число: " + doubled);

let plusTen = doubled + 10;
alert("К удвоенному числу прибавили 10: " + plusTen);

let divided = plusTen / 2;
alert("Результат деления на 2: " + divided);

let finalResult = divided - number;
alert("Вычли исходное число: " + finalResult);

alert("Ответ всегда равен 5!");

// Задание 1: Проверка правильности введенного пароля
(function() {
    let password = 'пароль';
    let userInput = prompt('Введите пароль');
    let result;
    if (userInput === password) {
        result = 'Пароль введен верно';
    } else {
        result = 'Пароль введен неправильно';
    }
    // Выводим результат в блок на странице, если он есть
    const task1Div = document.getElementById('task1');
    if (task1Div) {
        task1Div.textContent = result;
    } else {
        alert(result);
    }
})();

// Задание 2: Проверка значения переменной c
let c = 0; // Проверьте с 10, -3, 2
let result2;
if (c > 0 && c < 10) {
    result2 = 'Верно';
} else {
    result2 = 'Неверно';
}
console.log(result2);
const task2Div = document.getElementById('task2');
if (task2Div) {
    task2Div.textContent = result2;
}

// Задание 3: Проверка переменных d и e
let d = 50; // Можно менять для проверки
let e = 150; // Можно менять для проверки
let result3;
if (d > 100 || e > 100) {
    result3 = 'Верно';
} else {
    result3 = 'Неверно';
}
console.log(result3);
const task3Div = document.getElementById('task3');
if (task3Div) {
    task3Div.textContent = result3;
}

// Задание 4: Исправить сложение строк, чтобы получить число 5
let a4 = '2';
let b4 = '3';
// Код выше изменять нельзя. Чтобы решить задачу исправьте код ниже:
let sum4 = Number(a4) + Number(b4);
alert(sum4);
const task4Div = document.getElementById('task4');
if (task4Div) {
    task4Div.textContent = 'Сумма чисел: ' + sum4;
}

// Игра "Угадай число"
function guessNumberGame() {
    // Генерируем случайное число от 1 до 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    
    console.log("Добро пожаловать в игру 'Угадай число'!");
    console.log("Я загадал число от 1 до 100. Попробуй угадать!");
    
    function makeGuess() {
        const userGuess = prompt("Введите число от 1 до 100:");
        
        // Проверяем, что пользователь ввел число
        if (userGuess === null) {
            console.log("Игра завершена.");
            return;
        }
        
        const guess = parseInt(userGuess);
        
        if (isNaN(guess) || guess < 1 || guess > 100) {
            alert("Пожалуйста, введите корректное число от 1 до 100!");
            makeGuess();
            return;
        }
        
        attempts++;
        
        if (guess === randomNumber) {
            alert(`Поздравляю! Вы угадали число ${randomNumber} за ${attempts} попыток!`);
            console.log(`Игра завершена! Число было угадано за ${attempts} попыток.`);
        } else if (guess < randomNumber) {
            alert("Загаданное число больше! Попробуйте еще раз.");
            makeGuess();
        } else {
            alert("Загаданное число меньше! Попробуйте еще раз.");
            makeGuess();
        }
    }
    
    makeGuess();
}

// Связываем игру с кнопкой
document.addEventListener('DOMContentLoaded', function() {
    const guessNumberButton = document.querySelector('#guess-number .guess-number-card__button');
    if (guessNumberButton) {
        guessNumberButton.addEventListener('click', guessNumberGame);
    }
});

// Игра "Простая арифметика"
function arithmeticGame() {
    // Генерируем случайную арифметическую задачу
    const operations = ['+', '-', '*', '/'];
    const operation = operations[Math.floor(Math.random() * operations.length)];
    let num1, num2, question, correctAnswer;

    switch (operation) {
        case '+':
            num1 = Math.floor(Math.random() * 50) + 1;
            num2 = Math.floor(Math.random() * 50) + 1;
            correctAnswer = num1 + num2;
            question = `${num1} + ${num2}`;
            break;
        case '-':
            num1 = Math.floor(Math.random() * 50) + 1;
            num2 = Math.floor(Math.random() * 50) + 1;
            // Чтобы не было отрицательных ответов
            if (num2 > num1) [num1, num2] = [num2, num1];
            correctAnswer = num1 - num2;
            question = `${num1} - ${num2}`;
            break;
        case '*':
            num1 = Math.floor(Math.random() * 12) + 1;
            num2 = Math.floor(Math.random() * 12) + 1;
            correctAnswer = num1 * num2;
            question = `${num1} * ${num2}`;
            break;
        case '/':
            num2 = Math.floor(Math.random() * 12) + 1;
            correctAnswer = Math.floor(Math.random() * 12) + 1;
            num1 = num2 * correctAnswer; // чтобы деление было нацело
            question = `${num1} / ${num2}`;
            break;
    }

    const userInput = prompt(`Решите пример: ${question}`);
    if (userInput === null) {
        // Пользователь отменил ввод
        return;
    }
    const userAnswer = Number(userInput);
    let resultText;
    if (userAnswer === correctAnswer) {
        resultText = `Верно! ${question} = ${correctAnswer}`;
    } else {
        resultText = `Ошибка! ${question} = ${correctAnswer}, а вы ответили: ${userInput}`;
    }
    const task2Div = document.getElementById('task2');
    if (task2Div) {
        task2Div.textContent = resultText;
    } else {
        alert(resultText);
    }
}

// Связываем игру с кнопкой
document.addEventListener('DOMContentLoaded', function() {
    const arithmeticButton = document.querySelector('#arithmetic .guess-number-card__button');
    if (arithmeticButton) {
        arithmeticButton.addEventListener('click', arithmeticGame);
    }
});

// Задание 1: Функция, которая возвращает меньшее из двух чисел
function findMinNumber(num1, num2) {
    return Math.min(num1, num2);
}

// Примеры использования функции
console.log("Меньшее из 8 и 4:", findMinNumber(8, 4)); // 4
console.log("Меньшее из 6 и 6:", findMinNumber(6, 6)); // 6
console.log("Меньшее из 10 и 15:", findMinNumber(10, 15)); // 10

// Задание 2: Функция, которая проверяет четность числа
function checkEvenOdd(number) {
    if (number % 2 === 0) {
        return 'Число четное';
    } else {
        return 'Число нечетное';
    }
}

// Примеры использования функции

console.log("Проверка числа 4:", checkEvenOdd(4)); // "Число четное"
console.log("Проверка числа 7:", checkEvenOdd(7)); // "Число нечетное"
console.log("Проверка числа 10:", checkEvenOdd(10)); // "Число четное"
console.log("Проверка числа 15:", checkEvenOdd(15)); // "Число нечетное"

// Задание 3: Функции для работы с квадратом числа
// Функция 1: выводит квадрат в консоль
function printSquare(number) {
    const square = number * number;
    console.log(`Квадрат числа ${number} равен ${square}`);
}

// Функция 2: возвращает квадрат числа
function getSquare(number) {
    return number * number;
}

// Примеры использования функций
printSquare(5); // выведет в консоль: "Квадрат числа 5 равен 25"
printSquare(3); // выведет в консоль: "Квадрат числа 3 равен 9"

const result1 = getSquare(4);
console.log("Квадрат числа 4:", result1); // 16

const resultSquare2 = getSquare(7);
console.log("Квадрат числа 7:", resultSquare2); // 49

// Использование возвращаемого значения в вычислениях
const sumOfSquares = getSquare(3) + getSquare(4);
console.log("Сумма квадратов 3 и 4:", sumOfSquares); // 9 + 16 = 25

// Задание 4: Функция для проверки возраста пользователя
function checkAge() {
    const age = prompt("Сколько вам лет?");
    
    // Проверяем, что пользователь ввел число
    if (age === null) {
        console.log("Операция отменена пользователем");
        return;
    }
    
    const userAge = parseInt(age);
    
    if (isNaN(userAge)) {
        alert("Вы ввели неправильное значение");
    } else if (userAge < 0) {
        alert("Вы ввели неправильное значение");
    } else if (userAge >= 0 && userAge <= 12) {
        alert("Привет, друг!");
    } else if (userAge >= 13) {
        alert("Добро пожаловать!");
    }
}

// Примеры использования функции
console.log("Функция checkAge() готова к использованию");
console.log("Вызовите checkAge() для проверки возраста");

// Задание 5: Функция для проверки и умножения двух чисел
function multiplyNumbers(num1, num2) {
    // Проверяем, являются ли параметры корректными числами
    if (isNaN(num1) || isNaN(num2)) {
        return 'Одно или оба значения не являются числом';
    } else {
        return num1 * num2;
    }
}

// Примеры использования функции
console.log("Умножение 5 и 3:", multiplyNumbers(5, 3)); // 15
console.log("Умножение 10 и 2:", multiplyNumbers(10, 2)); // 20
console.log("Умножение с некорректными данными:", multiplyNumbers("abc", 5)); // "Одно или оба значения не являются числом"
console.log("Умножение с некорректными данными:", multiplyNumbers(10, "xyz")); // "Одно или оба значения не являются числом"
console.log("Умножение с двумя некорректными данными:", multiplyNumbers("abc", "def")); // "Одно или оба значения не являются числом"

// Задание 6: Функция для возведения числа в куб
function cubeNumber() {
    const input = prompt("Введите число:");
    
    // Проверяем, что пользователь не отменил ввод
    if (input === null) {
        console.log("Операция отменена пользователем");
        return;
    }
    
    const number = parseFloat(input);
    
    // Проверяем, является ли введенное значение числом
    if (isNaN(number)) {
        return 'Переданный параметр не является числом';
    } else {
        const cube = Math.pow(number, 3);
        return `${number} в кубе равняется ${cube}`;
    }
}

// Функция для тестирования с числами от 0 до 10
function testCubeFunction() {
    console.log("Тестирование функции cubeNumber с числами от 0 до 10:");
    for (let i = 0; i <= 10; i++) {
        console.log(`${i} в кубе равняется ${Math.pow(i, 3)}`);
    }
}

// Запускаем тестирование
testCubeFunction();

// Задание 7: Создание объектов circle1 и circle2 с методами
const circle1 = {
    radius: 5,
    getArea: function() {
        return Math.PI * this.radius * this.radius;
    },
    getPerimeter: function() {
        return 2 * Math.PI * this.radius;
    }
};

const circle2 = {
    radius: 10,
    getArea: function() {
        return Math.PI * this.radius * this.radius;
    },
    getPerimeter: function() {
        return 2 * Math.PI * this.radius;
    }
};

// Примеры использования объектов
console.log("Circle1 (радиус = 5):");
console.log("Площадь:", circle1.getArea().toFixed(2));
console.log("Периметр:", circle1.getPerimeter().toFixed(2));

console.log("Circle2 (радиус = 10):");
console.log("Площадь:", circle2.getArea().toFixed(2));
console.log("Периметр:", circle2.getPerimeter().toFixed(2));

// Задание 1: Вывод элементов массива до 10 включительно
const arr1 = [1, 5, 4, 10, 0, 3];
let arr1Result = '';
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
    arr1Result += arr1[i] + ' ';
    if (arr1[i] === 10) {
        break;
    }
}
const task1Div = document.getElementById('task1');
if (task1Div) {
    task1Div.innerHTML += '<br><strong>Задание 1 (массив до 10):</strong> ' + arr1Result;
}

// Задание 2: Найти индекс значения 4 в массиве
const arr2 = [1, 5, 4, 10, 0, 3];
let indexOf4 = -1;
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] === 4) {
        indexOf4 = i;
        break;
    }
}
console.log('Индекс значения 4:', indexOf4);
const task2Div2 = document.getElementById('task2');
if (task2Div2) {
    task2Div2.innerHTML += '<br><strong>Задание 2 (индекс 4):</strong> ' + indexOf4;
}

// Задание 3: Вывести элементы массива через пробел с помощью join
const arr3 = [1, 3, 5, 10, 20];
const arr3Str = arr3.join(' ');
console.log('Задание 3 (join):', arr3Str);
const task3DivArr = document.getElementById('task3');
if (task3DivArr) {
    task3DivArr.innerHTML += '<br><strong>Задание 3 (join):</strong> ' + arr3Str;
}

// Задание 4: Создать многомерный массив [[1, 1, 1], [1, 1, 1], [1, 1, 1]] с помощью вложенных циклов
const arr4 = [];
for (let i = 0; i < 3; i++) {
    const inner = [];
    for (let j = 0; j < 3; j++) {
        inner.push(1);
    }
    arr4.push(inner);
}
console.log('Задание 4 (многомерный массив):', arr4);
const task4DivArr = document.getElementById('task4');
if (task4DivArr) {
    task4DivArr.innerHTML += '<br><strong>Задание 4 (многомерный массив):</strong> ' + JSON.stringify(arr4);
}

// Задание 5: Добавить в конец массива [1, 1, 1] значения 2, 2, 2
const arr5 = [1, 1, 1];
arr5.push(2, 2, 2);
console.log('Задание 5 (push):', arr5);
const task5DivArr = document.getElementById('task5');
if (task5DivArr) {
    task5DivArr.innerHTML += '<br><strong>Задание 5 (push):</strong> ' + JSON.stringify(arr5);
}

// Задание 6: Отсортировать массив и удалить букву 'a'
let arr6 = [9, 8, 7, 'a', 6, 5];
arr6 = arr6.sort();
arr6 = arr6.filter(item => item !== 'a');
console.log('Задание 6 (sort, filter):', arr6);
const task6DivArr = document.getElementById('task6');
if (task6DivArr) {
    task6DivArr.innerHTML += '<br><strong>Задание 6 (sort, filter):</strong> ' + JSON.stringify(arr6);
}

// Задание 7: Угадай число из массива
const arr7 = [9, 8, 7, 6, 5];
const userGuess7 = prompt('Угадайте число из массива [9, 8, 7, 6, 5]');
let guessResult7 = '';
if (userGuess7 !== null) {
    const numGuess7 = Number(userGuess7);
    if (arr7.includes(numGuess7)) {
        alert('Угадал');
        guessResult7 = 'Угадал';
    } else {
        alert('Не угадал');
        guessResult7 = 'Не угадал';
    }
    const task7DivArr = document.getElementById('task7');
    if (task7DivArr) {
        task7DivArr.innerHTML += '<br><strong>Задание 7 (угадай число):</strong> ' + guessResult7 + ' (ваш ввод: ' + userGuess7 + ')';
    }
}

// Задание 8: Перевернуть строку 'abcdef'
const str8 = 'abcdef';
const reversedStr8 = str8.split('').reverse().join('');
console.log('Задание 8 (reverse):', reversedStr8);
const task1Div8 = document.getElementById('task1');
if (task1Div8) {
    task1Div8.innerHTML += '<br><strong>Задание 8 (reverse):</strong> ' + reversedStr8;
}

// Задание 9: Преобразовать двумерный массив в одномерный с помощью spread
const arr9 = [[1, 2, 3], [4, 5, 6]];
const flatArr9 = [...arr9[0], ...arr9[1]];
console.log('Задание 9 (spread):', flatArr9);
const task2Div9 = document.getElementById('task2');
if (task2Div9) {
    task2Div9.innerHTML += '<br><strong>Задание 9 (spread):</strong> ' + JSON.stringify(flatArr9);
}

// Задание 10: Сумма текущего и следующего элементов массива
const arr10 = [3, 7, 2, 9, 5, 1, 8]; // произвольные числа от 1 до 10
let arr10Result = '';
for (let i = 0; i < arr10.length - 1; i++) {
    const sum = arr10[i] + arr10[i + 1];
    console.log(`Сумма элементов ${arr10[i]} и ${arr10[i + 1]}:`, sum);
    arr10Result += `${arr10[i]}+${arr10[i + 1]}=${sum}; `;
}
const task3Div10 = document.getElementById('task3');
if (task3Div10) {
    task3Div10.innerHTML += '<br><strong>Задание 10 (суммы):</strong> ' + arr10Result;
}

// Задание 11: Функция, возвращающая массив квадратов чисел
function getSquares(arr) {
    return arr.map(x => x * x);
}
const arr11 = [2, 4, 6, 8];
const squares11 = getSquares(arr11);
console.log('Задание 11 (квадраты):', squares11);
const task4Div11 = document.getElementById('task4');
if (task4Div11) {
    task4Div11.innerHTML += '<br><strong>Задание 11 (квадраты):</strong> ' + JSON.stringify(squares11);
}

// Задание 12: Функция, возвращающая массив длин строк
function getWordLengths(arr) {
    return arr.map(str => str.length);
}
const arr12 = ['apple', 'banana', 'kiwi', 'pear'];
const lengths12 = getWordLengths(arr12);
console.log('Задание 12 (длины слов):', lengths12);
const task5Div12 = document.getElementById('task5');
if (task5Div12) {
    task5Div12.innerHTML += '<br><strong>Задание 12 (длины слов):</strong> ' + JSON.stringify(lengths12);
}

// Задание 13: Функция, возвращающая массив только с отрицательными числами
function getNegatives(arr) {
    return arr.filter(x => x < 0);
}
const arr13 = [5, -3, 8, -1, 0, -7, 2];
const negatives13 = getNegatives(arr13);
console.log('Задание 13 (отрицательные):', negatives13);
const task6Div13 = document.getElementById('task6');
if (task6Div13) {
    task6Div13.innerHTML += '<br><strong>Задание 13 (отрицательные):</strong> ' + JSON.stringify(negatives13);
}

// Задание 14: Массив из 10 случайных чисел и массив четных значений
const arr14 = [];
for (let i = 0; i < 10; i++) {
    arr14.push(Math.floor(Math.random() * 11));
}
const evenArr14 = arr14.filter(x => x % 2 === 0);
console.log('Задание 14 (исходный):', arr14);
console.log('Задание 14 (четные):', evenArr14);
const task7Div14 = document.getElementById('task7');
if (task7Div14) {
    task7Div14.innerHTML += '<br><strong>Задание 14 (исходный):</strong> ' + JSON.stringify(arr14);
    task7Div14.innerHTML += '<br><strong>Задание 14 (четные):</strong> ' + JSON.stringify(evenArr14);
}

// Задание 15: Среднее арифметическое массива из 6 случайных чисел
const arr15 = [];
for (let i = 0; i < 6; i++) {
    arr15.push(Math.floor(Math.random() * 10) + 1);
}
const avg15 = arr15.reduce((sum, x) => sum + x, 0) / arr15.length;
console.log('Задание 15 (массив):', arr15);
console.log('Задание 15 (среднее):', avg15);
const task1Div15 = document.getElementById('task1');
if (task1Div15) {
    task1Div15.innerHTML += '<br><strong>Задание 15 (массив):</strong> ' + JSON.stringify(arr15);
    task1Div15.innerHTML += '<br><strong>Задание 15 (среднее):</strong> ' + avg15;
}

// Игра "Переверни текст"
function reverseTextGame() {
    const userText = prompt('Введите текст, который нужно перевернуть:');
    if (userText === null) return;
    const reversed = userText.split('').reverse().join('');
    const task3DivReverse = document.getElementById('task3');
    if (task3DivReverse) {
        task3DivReverse.innerHTML += '<br><strong>Перевернутый текст:</strong> ' + reversed;
    } else {
        alert('Перевернутый текст: ' + reversed);
    }
}
document.addEventListener('DOMContentLoaded', function() {
    const reverseTextButton = document.querySelector('#text-reverse .guess-number-card__button');
    if (reverseTextButton) {
        reverseTextButton.addEventListener('click', reverseTextGame);
    }
});

// Игра "Викторина"
function quizGame() {
    const quiz = [
        {
            question: "Какой цвет небо?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];
    let correctCount = 0;
    let resultDetails = '';
    for (let i = 0; i < quiz.length; i++) {
        const q = quiz[i];
        const userAnswer = prompt(q.question + "\n" + q.options.join("\n"));
        if (userAnswer !== null && Number(userAnswer) === q.correctAnswer) {
            correctCount++;
            resultDetails += `<br>Вопрос ${i+1}: верно`;
        } else {
            resultDetails += `<br>Вопрос ${i+1}: неверно (правильный: ${q.correctAnswer})`;
        }
    }
    alert(`Вы ответили правильно на ${correctCount} из ${quiz.length} вопросов!`);
    const task4DivQuiz = document.getElementById('task4');
    if (task4DivQuiz) {
        task4DivQuiz.innerHTML += `<br><strong>Викторина:</strong> Правильных ответов: ${correctCount} из ${quiz.length}` + resultDetails;
    }
}
document.addEventListener('DOMContentLoaded', function() {
    const quizButton = document.querySelector('#quiz .guess-number-card__button');
    if (quizButton) {
        quizButton.addEventListener('click', quizGame);
    }
});

// Работа с кодом. Задание 1: Преобразовать строку 'js' в верхний регистр
const strCode1 = 'js';
const upperStrCode1 = strCode1.toUpperCase();
console.log('Работа с кодом. Задание 1 (toUpperCase):', upperStrCode1);
const task5DivCode1 = document.getElementById('task5');
if (task5DivCode1) {
    task5DivCode1.innerHTML += '<br><strong>Работа с кодом. Задание 1 (toUpperCase):</strong> ' + upperStrCode1;
}

// Работа с кодом. Задание 2: Фильтрация массива строк по начальному символу (без учёта регистра)
function filterByStart(arr, startStr) {
    const lowerStart = startStr.toLowerCase();
    return arr.filter(item => item.toLowerCase().startsWith(lowerStart));
}
const arrCode2 = ['Apple', 'banana', 'apricot', 'Cherry', 'avocado'];
const filteredCode2 = filterByStart(arrCode2, 'a');
console.log('Работа с кодом. Задание 2 (фильтр по началу):', filteredCode2);
const task6DivCode2 = document.getElementById('task6');
if (task6DivCode2) {
    task6DivCode2.innerHTML += '<br><strong>Работа с кодом. Задание 2 (фильтр по началу):</strong> ' + JSON.stringify(filteredCode2);
}

// Работа с кодом. Задание 3: Округление числа 32.58884
const numCode3 = 32.58884;
const floorCode3 = Math.floor(numCode3);
const ceilCode3 = Math.ceil(numCode3);
const roundCode3 = Math.round(numCode3);
console.log('Работа с кодом. Задание 3 (floor):', floorCode3);
console.log('Работа с кодом. Задание 3 (ceil):', ceilCode3);
console.log('Работа с кодом. Задание 3 (round):', roundCode3);
const task7DivCode3 = document.getElementById('task7');
if (task7DivCode3) {
    task7DivCode3.innerHTML += '<br><strong>Работа с кодом. Задание 3:</strong> floor: ' + floorCode3 + ', ceil: ' + ceilCode3 + ', round: ' + roundCode3;
}

// Работа с кодом. Задание 4: Найти min и max из 52, 53, 49, 77, 21, 32
const numsCode4 = [52, 53, 49, 77, 21, 32];
const minCode4 = Math.min(...numsCode4);
const maxCode4 = Math.max(...numsCode4);
console.log('Работа с кодом. Задание 4 (min):', minCode4);
console.log('Работа с кодом. Задание 4 (max):', maxCode4);
const task1DivCode4 = document.getElementById('task1');
if (task1DivCode4) {
    task1DivCode4.innerHTML += '<br><strong>Работа с кодом. Задание 4:</strong> min: ' + minCode4 + ', max: ' + maxCode4;
}

// Работа с кодом. Задание 5: Функция для вывода случайного числа от 1 до 10
function printRandom1to10() {
    const rand = Math.floor(Math.random() * 10) + 1;
    console.log('Работа с кодом. Задание 5 (random 1-10):', rand);
}
printRandom1to10();

// Работа с кодом. Задание 6: Функция, возвращающая массив случайных чисел
function getRandomArray(n) {
    const len = Math.floor(n / 2);
    const arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(Math.floor(Math.random() * (n + 1)));
    }
    return arr;
}
const arrCode6 = getRandomArray(10);
console.log('Работа с кодом. Задание 6 (массив):', arrCode6);
const task2DivCode6 = document.getElementById('task2');
if (task2DivCode6) {
    task2DivCode6.innerHTML += '<br><strong>Работа с кодом. Задание 6 (массив):</strong> ' + JSON.stringify(arrCode6);
}

// Работа с кодом. Задание 7: Функция для случайного числа в диапазоне
function getRandomInRange(a, b) {
    const min = Math.min(a, b);
    const max = Math.max(a, b);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const randCode7 = getRandomInRange(5, 15);
console.log('Работа с кодом. Задание 7 (random in range 5-15):', randCode7);
const task3DivCode7 = document.getElementById('task3');
if (task3DivCode7) {
    task3DivCode7.innerHTML += '<br><strong>Работа с кодом. Задание 7 (random 5-15):</strong> ' + randCode7;
}

// Работа с кодом. Задание 8: Вывести в консоль текущую дату
console.log('Работа с кодом. Задание 8 (текущая дата):', new Date());

// Работа с кодом. Задание 9: Дата через 73 дня
const currentDate = new Date();
const futureDate = new Date(currentDate);
futureDate.setDate(currentDate.getDate() + 73);
console.log('Работа с кодом. Задание 9 (текущая дата):', currentDate);
console.log('Работа с кодом. Задание 9 (через 73 дня):', futureDate);
const task4DivCode9 = document.getElementById('task4');
if (task4DivCode9) {
    task4DivCode9.innerHTML += '<br><strong>Работа с кодом. Задание 9:</strong> текущая: ' + currentDate.toLocaleDateString() + ', через 73 дня: ' + futureDate.toLocaleDateString();
}

// Работа с кодом. Задание 10: Форматирование даты и времени на русском
function formatDateRu(date) {
    const months = [
        'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
    ];
    const days = [
        'воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'
    ];
    const d = date.getDate();
    const m = months[date.getMonth()];
    const y = date.getFullYear();
    const day = days[date.getDay()];
    const hh = String(date.getHours()).padStart(2, '0');
    const mm = String(date.getMinutes()).padStart(2, '0');
    const ss = String(date.getSeconds()).padStart(2, '0');
    return `Дата: ${d} ${m} ${y} — это ${day}.<br>Время: ${hh}:${mm}:${ss}`;
}
const nowCode10 = new Date();
const formattedCode10 = formatDateRu(nowCode10);
console.log('Работа с кодом. Задание 10 (формат):', formattedCode10.replace(/<br>/g, ' '));
const task5DivCode10 = document.getElementById('task5');
if (task5DivCode10) {
    task5DivCode10.innerHTML += '<br><strong>Работа с кодом. Задание 10:</strong> ' + formattedCode10;
}
