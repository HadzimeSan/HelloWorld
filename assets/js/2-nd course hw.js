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
