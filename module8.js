// 8.1 Массивы

//1
let fruits = ["Яблоко", "Груша", "Вишня", "Абрикос"];
fruits.shift();
fruits.shift();
fruits.unshift("Апельсин", "Банан");
console.log(fruits);


//2
users = [];
users[0] = prompt();
users[1] = prompt();
console.log(users)


//3
users = [];
users[0] = prompt();
users[1] = prompt();
users[2] = prompt();
console.log(users[0], 'и',users[2])


//4
const numElements = Number(prompt("Введите количество элементов в массиве:"));
const userArray = [];

for (let i = 0; i < numElements; i++) {
    userArray.unshift(prompt())
}

console.log(userArray);


//5
const numElements = Number(prompt("Введите количество элементов в массиве:"));
const userArray = [];
const lengths = [];

for (let i = 0; i < numElements; i++) {
    const element = prompt(); 
    userArray.push(element)
}
for (const word of userArray) {
    const length = word.length; 
    lengths.push(length)
}
console.log(lengths);


//8.2 slice, concat, split, join

//1
const daysOfWeek = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
const users = [
  { id: 1, name: "Иван", age: 30 },
  { id: 2, name: "Мария", age: 25 },
  { id: 3, name: "Алексей", age: 35 },
  { id: 4, name: "Елена", age: 28 },
];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
console.log(daysOfWeek.concat(users, months))


//2
let str = prompt();
let mas = str.split(', ');
console.log(mas)


//3
let x = prompt();
let lst = [] 
for (m of x.split(", ")) {
    let res = (!isNaN(parseInt(m))) ? lst.push(parseInt(m)) : lst.push(m);
}
console.log(lst);


//4
const userInput = prompt() 
const inputArray = userInput.split(", "); 
const indexes = prompt() 
const requestedIndexes = indexes.split(", "); 
for (const index of requestedIndexes) { 
    console.log(inputArray[parseInt(index)]); }


//5let arr = prompt().split(", ");
let ind = prompt().split(", ");
let result = [];

for(let i=0; i<ind.length; i++){
    result[i] = arr[Number(ind[i])];
}

console.log(result.join(" "));


//8.3 map, filter, includes

//1
const capitals = [
  "Токио", "Афины", "Нью-Дели", "Сеул", "Джакарта", "Багдад", "Астана", "Москва", "Анкара"
];
const newCapA = capitals.filter((capital) => {
    return capital.startsWith("А") })
console.log(newCapA)


//2
let str = prompt();
let x = str.includes("Андорра-Ла-Велла");
let mas = str.split(" ");
let mas2 = [];
if (x === true) {
    mas2 = mas.filter(function(el) {
        return el.endsWith("а");
    });
}    
else {
    mas2 = mas.filter(function(el) {
        return el.endsWith("н");
    });
}
console.log(mas2);


//3
let str = prompt();
let mas = str.split(' ')
const mas2 = mas.map((capital) => capital.toUpperCase());
console.log(mas2);


//4
let str = prompt();
let mas = str.split(', ')
const mas2 = mas.map(name => 'Пока, ' + name);
console.log(mas2);


//5
const cities = ["Москва", "Санкт-Петербург", "Саратов", "Магадан", "Ярославль", "Самара", "Якутск"];

const city = prompt();

const prov = cities.includes(city) ? console.log(`Города, начинающиеся с буквы "${city[0]}": ` + cities.filter (one => one.startsWith(city[0])).join(", ")) : console.log(`Такого города нет в списке`);


