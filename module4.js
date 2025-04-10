// 4.1 Цикл while

//1
let targetNumber = Number(prompt("Введите число, до которого нужно считать:"));
let currentNumber = 1;

while (targetNumber >= currentNumber ) {
  console.log(currentNumber);
  currentNumber++;
}


//2
let targetNumber = Number(prompt("Введите число, до которого нужно считать:"));
let currentNumber = 0;

while (currentNumber <= targetNumber) {
    console.log(currentNumber);
    currentNumber += 2
}


//3
num = Number(prompt());
n = 1
while (n <= 10) {
    console.log(num, '*', n, '=', num*n);
    n++;}


//4
num1 = Number(prompt());
num2 = Number(prompt());
if (num1 > num2) {
    while (num1 >= num2) {
        if (num1 % 3 == 0) {
            console.log(num1)}
        num1--}
}
else if (num1 < num2) {
    while (num1 <= num2) {
        if (num1 % 3 == 0) {
            console.log(num1)}
        num1++}
}


//4
let N = prompt(Number(""))
counter = 0
while (counter<1){console.log(2**N);
                counter ++};


//5
let num = Number(prompt());
let result = num;
let counter = 0;
while (result <= 1000) {
    result *= 2
    counter += 1}
console.log('Итоговое число:', result)
console.log('Количество итераций:', counter)


// 4.2 Цикл for

//1
let n = Number(prompt("Введите целое число:"));

for (let i = 2; i <= n; i += 2) {
    console.log(i);
}


//2
let start = Number(prompt("Введите начальное значение диапазона:"));
let end = Number(prompt("Введите конечное значение диапазона:"));
let sum = 0;

for (let i = start; i <= end; i++) {
  sum += i;
}
console.log(sum);


//3
let text = 'Поехали';
for (let i = 1; i <= 61; i++) {
    console.log(text)}


//4
let A = Number(prompt());
let B = Number(prompt());
for (let i = B; i >= A; i--) {
    console.log(i)}


//5
let num = Number(prompt());
let sum = 0
for (let i = 1; i <= num; i += 2) {
    sum += i}
console.log('Сумма нечетных чисел от 1 до', num, 'равна', sum)


//6
let X = Number(prompt());
let even = 0
let odd = 0
for (let i = 1; i <= X; i++) {
    if (i % 2 == 0) {
        even++}
    else {
        odd++}
}
console.log('Количество четных чисел:', even);
console.log('Количество нечетных чисел:', odd);












