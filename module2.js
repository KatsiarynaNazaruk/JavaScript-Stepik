//lesson 2.1


//1
console.log("Столица Гондураса - Тегусигальпа");
/*
console.log("Столица Никарагуа - Манагуа");
console.log("Столица Коста-Рики - Сан-Хосе");
*/


//2
console.log("JavaScript") // Инструкция выводит в консоль слово "JavaScript" 


//3
console.log('Погружение')
/* 
Эта инструкция выводит
слово Погружение в консоль
*/


//4
console.log('Java');
console.log('Script');
/*
Это
комментарий
*/


//lesson 2.2 Переменные

//1
let num1 = 180;
let num2 = 100;
let num3 = 120;
console.log(num1 + num2 + num3);

//2
let num1 = 180;
let num2 = 100;
let num3 = 120;
console.log(num2, num3, num1)


//3
const name = 'Светлана';
console.log(name)


//4
let age = 96;
console.log(age);
console.log('Прошел год');
age = 97;
console.log(age);


//5
let source;
let destination;
source = "sigma";
destination = source;
source = "delta";
console.log(source);
console.log(destination);


//lesson 2.4 Ввод данных

//1
let prod = Number(prompt());
console.log(prod + 5);


//2
const word = prompt();
console.log(word)


//3
let num1 = Number(prompt());
let num2 = Number(prompt());
console.log(num1, num2)


//4
let word1 = prompt();
let word2 = prompt();
console.log(word2);
console.log(word1);


//5
let num1 = Number(prompt());
let num2 = Number(prompt());
let num3 = Number(prompt());
console.log(num1 + num2 + num3)


//lesson 2.5 Математические операции

//1
const height = Number(prompt("Введите высоту сундука:"));
const width = Number(prompt("Введите ширину сундука:"));
const length = Number(prompt("Введите длину сундука:"));
console.log(height * width * length)


//2
const a = Number(prompt());
const b = Number(prompt());
console.log(a ** b)


//3
num = Number(prompt());
console.log('Стоимость партии чипсов:', num * 110, 'рублей')


//4
num = Number(prompt());
console.log(num % 4)


//5
num = Number(prompt());
console.log(num % 10)


//lesson 2.6 Операторы сравнения

//1
const x = Number(prompt());
const y = Number(prompt());
console.log(x > y)


//2
const x = Number(prompt());
const y = Number(prompt());
console.log(x !== y)


//3
const x = Number(prompt());
const y = Number(prompt());
const z = Number(prompt());
console.log(x + y === y + z)


//4
const a = Number(prompt());
const b = Number(prompt());
const isLess = a < b;
console.log(isLess)





















