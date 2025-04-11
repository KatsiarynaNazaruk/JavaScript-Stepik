// 7.1 Интерполяция и спецсимволы

//1
console.log('Да?\nАлё!\nДа да?\nНу как там с \"деньгами\"?\nА?\nКак с \"деньгами\"-то там?\nЧё с \"деньгами\"?\nЧё?')


//2
const person = {};
person.name = prompt();
person.age = Number(prompt());
const info = `Имя: ${person.name}, Возраст: ${person.age} лет`;
console.log(info);


//3
let budget = {
    income: +prompt(),
    expenses: +prompt(),
    calculateProfit(income,expenses) {
    let money = this.income - this.expenses
    if (money > 0) {
        console.log(`Ваша прибыль составляет ${money} рублей`)}
    else if (money === 0) {
        console.log('Вы отработали в ноль')}
    else if (money < 0) {
        console.log(`Вы ушли в минус на ${money*(-1)} рублей`)}
    }
}
budget.calculateProfit(budget.income,budget.expenses)


//4
const itemName = prompt();
const itemPrice = Number(prompt());
const quantity = Number(prompt());
function calculateTotal(itemName, itemPrice, quantity) {
    return `Вы выбрали ${quantity} товаров \"${itemName}\" по цене ${itemPrice} рублей за штуку. Итого: ${itemPrice * quantity} рублей.`
};
const message = calculateTotal(itemName, itemPrice, quantity);
console.log(message);


//5
const itemName = prompt();
const itemPrice = Number(prompt());
const quantity = Number(prompt());
function calculateTotal(itemName, itemPrice, quantity) {
    return `Вы выбрали \"${itemName}\" по цене ${itemPrice} рублей за штуку.\nКоличество: ${quantity} шт.\nИтого: ${itemPrice * quantity} рублей.`
};

const message = calculateTotal(itemName, itemPrice, quantity);
console.log(message);


//7.2 Свойства и методы строк

//1
let str = prompt();
if (str.length < 5) {
    console.log(str + '!')}
else {
    console.log(str + '?')}


//2
let str = prompt();
if (str.includes('д') || str.includes('н')) {
    console.log(str.toUpperCase())}
else {
    console.log(str.toLowerCase())}


//3
let str = prompt();
if (str.startsWith('ж') || str.startsWith('Ж')) {
    console.log(str.length)}
else {
    console.log('Попробуйте снова')}


// 7.3 Индексы строки

//1
const sentence = prompt();
for (let i = 0; i < sentence.length; i++) {
  console.log(sentence[i].toLowerCase());
}


//2
str = prompt();
if (str.length >= 2) {
    console.log(str.slice(-2))}
else {
    console.log('Введенная строка слишком короткая')}
   

//3
let str = prompt();
let symbol = prompt();
let counter = 0
for (let i = 0; i < str.length; i++) {
    if (str[i] === symbol) {
        counter++
    }
}
console.log(`Символ "${symbol}" встречается ${counter} раз(-а)`)


//4
let str = prompt();
let str1 = ''
for (let i = str.length - 1; i >= 0; i--) {
    str1 += str[i]
}
console.log(str1.toLowerCase())


// 7.4 Работа с числами, Math

//1
let int = +prompt();
if (isNaN(int) == 0) {
    console.log('Вы ввели число')}
else {
    console.log('Вы ввели не число')}
	
	
//2
age = +prompt();
if (isNaN(age) == 0) {
    if (age >= 18 && age <= 65) {
        console.log('Доступ разрешен')}
    else {
        console.log('Доступ запрещен')}
}
else {
    console.log('Ошибка: Введите ваш возраст')}


//3
let num = +prompt();
let qua = Math.sqrt(Math.abs(num))
console.log(`Квадратный корень из ${Math.abs(num)} равен ${qua}`)


//4
let r = +prompt();
let s = Math.PI * r * r;
let s3 = Math.pow(s, 3);
console.log(Math.round(s3))














