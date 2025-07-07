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
