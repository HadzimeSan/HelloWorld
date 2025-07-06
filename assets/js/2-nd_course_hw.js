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
