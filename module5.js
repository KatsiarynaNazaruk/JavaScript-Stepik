//5.1 Функции

//1
function outputMessage() {
    console.log("Терпение и труд")}
outputMessage();


//2
function countSquare() {
    let num = Number(prompt());
    let s = num ** 2
    console.log(s) }
countSquare();


//5.2 Параметры

//1
let name = prompt();
let age = Number(prompt());
function greetUser(name, age) {
    console.log('Привет, '+ name + '. Тебе ' + age + ' лет.')}
greetUser(name, age);


//2
let a = Number(prompt());
let b = Number(prompt());
function compare(a,b) {
    if (a > b) {
        console.log(a, 'больше, чем', b)}
    else if (a < b) {
        console.log(b, 'больше, чем', a)}
     else if (a == b) {
        console.log(a, 'равно', b)}
}
compare(a,b);


//3
let a = Number(prompt());
let b = Number(prompt());
let c = Number(prompt());
let d = Number(prompt());
function compareAndPrintMax(a, b, c, d) {
    console.log(Math.max(a, b, c, d))}
compareAndPrintMax(a, b, c, d);


//4
let a = Number(prompt());
let b = Number(prompt());
let oper = prompt();
function result(a, b, oper) {
    if (oper === '+') {
        console.log(a + b)}
    else if (oper === '-') {
        console.log(a - b)}
    else if (oper === '*') {
        console.log(a * b)}
    else if (oper === '/') {
        console.log(a / b)}
    else {
        console.log("Неверный оператор")}
}
result(a, b, oper)

//5.3 Возврат значения

//1
let a = Number(prompt());
let b = Number(prompt());
let c = Number(prompt());
function arithmetic(a, b, c) {
    let ar = (a + b + c) / 3
    return ar}
console.log(arithmetic(a, b, c) * 2);


//2
let a1 = Number(prompt());
let b1 = Number(prompt());
let a2 = Number(prompt());
let b2 = Number(prompt());
function calculateAverage (num1, num2) {
    return (num1 + num2) / 2;
}
    
function compareAverages(avg1, avg2) {
    if (avg1 > avg2) {
        console.log('Среднее значение первого набора больше');
    } else if (avg2 > avg1) {
        console.log('Среднее значение второго набора больше');
    } else {
        console.log('Средние значения наборов равны');
    }
}

let averageSet1 = calculateAverage(a1, b1);
let averageSet2 = calculateAverage(a2, b2);

compareAverages(averageSet1, averageSet2);    


//3
let a = Number(prompt());
let b = Number(prompt());
let c = Number(prompt());
   
function checkTriangleExistence(a, b, c) {
    if ((a + b) > c && (a + c) > b && (c + b) > a) {
        console.log('Треугольник существует')}
    else {
        console.log('Треугольник не существует')}
}

checkTriangleExistence(a, b, c);


//5.4 Стрелочные функции

//1
let a = Number(prompt());
let isEven = function(num){
     return num % 2 === 0;
}
console.log(isEven(a))


//2
let a = Number(prompt());
let isEven = (num) => num % 2 === 0;
console.log(isEven(a));


//3
let a = Number(prompt());
let cube = (a) => a ** 3;
console.log(cube(a));


//4
let S = Number(prompt());
let h = Number(prompt());
let figure = prompt();
if (figure === 'цилиндр') {
    let calculateCylinderVolume = (S, h) => S * h;
    console.log('Объем цилиндра:', calculateCylinderVolume(S, h))}
else if (figure === 'конус') {
    let calculateConeVolume = (S, h) => 1/3 * S * h;
    console.log('Объем конуса:', calculateConeVolume(S, h))}












