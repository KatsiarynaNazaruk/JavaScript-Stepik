// 6.1 Объекты

//1
const brand = prompt();
const model = prompt();
let car = {
  brand,
  model,
};
console.log(car.brand, car.model)


//2
let major = prompt();
let gpa = Number(prompt());
let student = {
    major,
    gpa
};

console.log("Специальность студента: " + student.major);
console.log("Средний балл студента: " + student.gpa);


//3
let place = prompt();
let date = prompt();
let length = prompt();
let trip = {
    place,
    date,
    length
};
console.log(trip.date, 'вы отправляетесь в', trip.place, 'на', trip.length, 'дней');


//4
let title = prompt();
let author = prompt();
let year = prompt();
let book = {
    title,
    author,
    year
};
console.log('Название книги:', book.title);
console.log('Автор книги:', book.author);
console.log('Год издания книги:', book.year);


// 6.2 Работа со свойствами

//1
const catalogue = {
    magazine: 5,
}
delete catalogue.magazine;
catalogue.newspaper = +prompt();
console.log(catalogue.newspaper)


//2
const catalogue = {
    magazine: 5,
}
catalogue.magazine = +prompt();
if (catalogue.magazine >= 10 && catalogue.magazine <= 50) {
    console.log(catalogue.magazine)}
else {
    console.log('Введите число в диапазоне от 10 до 50 включительно')}
    


// 6.1 Методы объекта

//1
a = +prompt();
b = +prompt();

let object = {
    method(a, b) {
        return (a % b)}
}
console.log(object.method(a,b));


//2
const balance = Number(prompt());        
let bankAccount = {
  balance,
  checkBalance() {
      console.log('Ваш текущий баланс:', this.balance, 'долларов')}
};
bankAccount.checkBalance();


//3
let Y = Number(prompt());
const calculator = {
    base: Y - 2,
    power(Y) {
        console.log(this.base ** Y)}
};
calculator.power(Y);


//4
let bankAccount = {
  balance: 500,

  deposit: function(amount) {
    return this.balance + amount
  },

  withdraw: function(amount) {
    return this.balance - amount
  },
};

const amount = Number(prompt());
const choice = prompt()
if (choice === "внести") {
    console.log(bankAccount.deposit(amount))
} else if (choice === "снять") {
    if (bankAccount.balance > amount) {
    console.log(bankAccount.withdraw(amount))
    } else {console.log("Недостаточно средств на счете")}
}

