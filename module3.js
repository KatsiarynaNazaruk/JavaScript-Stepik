// 3.1 If

//1
num = Number(prompt());
if (num > 0) {
    console.log('Положительное')
}


//2
num = Number(prompt());
if (num % 2 === 0) {
    console.log('Число четное')
}


//3
num = Number(prompt());
if (num % 2 === 0 && num > 0) {
    console.log('Четное и положительное')
}


//4
num = Number(prompt());
if (99 < num && num < 1000) {
    console.log('Трехзначное')
}


//5
num = Number(prompt());
if (num >= 1000) {
    console.log(num*0.9)
}
console.log('Спасибо за покупку')


// 3.2 Else if

//1
num = Number(prompt());
if (num % 2 === 0) {
    console.log('Число четное') }
else if (num % 2 !== 0) {
    console.log('Число нечетное') }


//2
num = Number(prompt());
if (num > 0) {
    console.log('Положительное') }
else if (num < 0) {
    console.log('Отрицательное') }
else if (num === 0) {
    console.log('Не положительное и не отрицательное') }


//3
score = Number(prompt());
if (score >= 84) {
    console.log('Отлично') }
else if (score >= 64) {
    console.log('Хорошо') }
else if (score < 64) {
    console.log('Учись') }


//4
time = Number(prompt());
if (time >= 0 && time <= 11) {
    console.log('Доброе утро') }
else if (time >= 12 && time <= 17) {
    console.log('Добрый день') }
else if (time >= 18 && time <= 23) {
    console.log('Добрый вечер') }


//5
mood = Number(prompt());
if (mood >= 1 && mood <= 3) {
    console.log('Плохое') }
else if (mood >= 4 && mood <= 7) {
    console.log('Нормальное') }
else if (mood >= 8 && mood <= 10) {
    console.log('Хорошее') }
else if (mood >= 11) {
    console.log('Число вне диапазона') }

//6
let length = Number(prompt());
let capacity = Number(prompt());
if (length <= 3.8 && capacity <= 1.2){
    console.log("Класс A") }
else if (length <= 4 && capacity <= 1.6){
    console.log("Класс B") }
else if (length <= 4.5 && capacity >= 1.6 && capacity <= 2){
    console.log("Класс C") }
else {
    console.log("Выберите автомобиль другого класса") }


// 3.3 Тернарный оператор

//1
let age = Number(prompt("Введите ваш возраст:"));

let access = (age >= 18) ? "Доступ разрешен" : "Доступ запрещен";

console.log(access);


//2
let weight = Number(prompt());
let delivery;

delivery = (weight <= 5) ? "Стоимость доставки: 200 рублей" : 'Стоимость доставки: 350 рублей';

console.log(delivery);


//3
let day = Number(prompt());
let name;

name = (day === 6 || day === 7) ? "Выходной" : 'Рабочий день';

console.log(name);


//4
let taskFact = Number(prompt());
let taskPlan = Number(prompt());
let result;

result = (taskFact >= taskPlan) ? "Цель достигнута" : 'Цель не достигнута';

console.log(result);


// 3.4 Вложенные условия

//1
price = Number(prompt());
status = prompt();
if (price > 1000) {
    if (status == 'VIP') {
        console.log(price * 0.9);}
    else {
        console.log(price * 0.95);
    }
}
else {
    console.log(price)}


//2
weight = Number(prompt());
status = prompt();
if (weight <= 5) {
    if (status == 'экспресс'){
        console.log('Стоимость доставки: 1000 рублей')}
    else if  (status == 'обычная'){
        console.log('Стоимость доставки: 500 рублей')}
    else {
        console.log("Некорректный статус доставки")}
}
else {
    if (status == 'экспресс'){
        console.log('Стоимость доставки: 1500 рублей')}
    else if  (status == 'обычная'){
        console.log('Стоимость доставки: 800 рублей')}
    else {
        console.log("Некорректный статус доставки")}
}


//3
month = Number(prompt());
temp = Number(prompt());
if (month == 12 || month == 1 || month == 2) {
    if (temp <= -25) {
        console.log('Зима (холодная зима)')}
    else {
        console.log('Зима')}
}
else if (month == 3 || month == 4 || month == 5) {
    if (temp < 15) {
        console.log('Весна (прохладная весна)')}
    else {
        console.log('Весна')}
}
else if (month == 6 || month == 7 || month == 8) {
    if (temp >= 30) {
        console.log('Лето (жаркое лето)')}
    else {
        console.log('Лето')}
}
else if (month == 9 || month == 10 || month == 11) {
    if (temp < 0) {
        console.log('Осень (прохладная осень)')}
    else {
        console.log('Осень')}
}

















