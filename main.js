// // import { countries } from "./countries.js";
// // countries.includes('Ethiopia');
// // console.log(countries);

// // import { webTechs } from "./webtech.js";
// // console.log(webTechs);


const sym = Symbol("hi");
console.log(sym);
const name = "Amirah";
console.log(name.lastIndexOf("Amirah"));
const mySymbol = Symbol("hello");
console.log(mySymbol);
const love = "I love";
const day = "30 days of Javascript"
const sentence = love + " " + "studying " + day;
console.log(sentence);

const backtickSentence = `${love} studying ${day}`;
console.log(backtickSentence);
const myArray = ["Rukayah", "Munira", "Marvellous", "Grace"];
console.log(myArray);
myArray[0] = "Salama";
console.log(myArray);


const four = 4;
console.log(Math.sqrt(four));
console.log(Math.pow(four, 2));
console.log(Math.PI);
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.floor(Math.random() * 10 + 1));
console.log(Math.random());
// const check = random <= 10 ? random : 10;
// console.log(check);

const pi = Math.PI;
console.log(Math.floor(pi));
console.log(Math.abs(pi));
console.log(Math.ceil(pi));
console.log(Math.round(pi));
console.log(Math.cos(30));
console.log(Math.sin(60));

// Loop
for (let i = 0; i <= 5; i++) {
    console.log(i);
}

for(let i = 0; i <= 5; i++){
    console.log(`${i} * ${i} = ${i * i}`)
  }

let n = 0;
for (let x = 0; x < 3; x++) {
    console.log(n += x);
}

let h = 0;
let x = 0;
while (h < 3) {
    h++;
    console.log(x += h);
}

let b = 0;
while (b < 3) {
    b++; 
    console.log(b);
}

for (let a = 5; a >= 0; a--) {
    console.log(a);
}

let j = 0;
do{
    console.log(j);
    j++;
}
while (j <= 10)

let k = 0;
do{
    k++;
}
while (k <= 10){
    console.log(`k=${k}`);
}

const numbers = [1, 2, 3, 4, 5,6, 7,8, 9, 10, 11, 12];

// for (num of numbers) {
//     console.log(num * 2);
// }

const string = "Happy day";

// for (str of string) {
//     console.log(str);
// }

let line = "";
let i = "#";
for (i = 0; i <= 7; i++) {
    line += "#";
    console.log(line);
}


let v = 0;
while (v <= 10) {
    console.log(`${v} * ${v} = ${v * v}`);
    v++;
}

function fullName() {
    console.log("Abdullahi Amirah Yon");
}
fullName();


function naMe(lastname, firstname, school = "Webfala") {
    let age = 17;
    console.log(`${lastname} ${firstname} ${age} ${school}`);
}
naMe("Abdullahi", "Amirah");

function sum(a,b) {
    return a + b
}

sum(2,3)
const by2 = sum(2, 3)
console.log(by2);

// const multiplication = () => {
//     return 12 * 12;
// }
// console.log(multiplication);

// const multiplication = (x, y) => {
//    x * y;
//  }
//   console.log(multiplication("12", "12"));

// function printFullName (){
//     let firstName = 'Asabeneh'
//     let lastName = 'Yetayeh'
//     let space = ' '
//     let fullName = firstName + space + lastName
//     console.log(fullName)
// }
// printFullName()


// // function BMI(w,h) {
//     // const bmiValue = w / (h * h);
//     let bmiValue = 18.5;
    
//     if (bmiValue < 18.5) {
//         return "Underweight";
//     } else if (bmiValue >= 18.5 || bmiValue<=24.9) {
//         return "Normal weight";
//     } else if (bmiValue >= 25 || bmiValue<=29.9) {
//         return "Overweight";
//     } else if (bmiValue >= 30) {
//         return "Obese";
//     }

// console.log(BMI(63, 1.65));

// // // for (i = 0; i <= 5; i++) {
// // //     if (i ==3 )
// // // }

// Map
function multiplyEach(...args){
    console.log(args);
    // const callback = (n) => n * n;
    const result = args.map((elem) => elem * elem);
    // const result2 = args.map((elem) => callback(elem));
    // console.log(result2);
    return result;
}

console.log(multiplyEach(2, 6, 5, 10, 4, 7));
const number = [2, 6, 5, 10, 4, 7];
const manipulatedNumber = number.map((elem) => Math.pow(elem, 3));
console.log(number);
console.log(manipulatedNumber);

// filter
const filteredNumber = number.filter((elem) => elem < 7);
console.log(filteredNumber);

function filters(){
    const result = [];
    for (let i = 0; i < number.length; i++){
        if(number[i] < 7){
            result.push(number[i]);
        }
    }
    return result;
}

console.log(filters());

// ForEach
const doEach = number.forEach((elem) => elem * 2);
console
.log(doEach);
console.log(number);

number.forEach((elem) => console.log(elem * 2));

// Every
console.log(number);
console.log(number.every((el) => el < 10)); 
console.log(number.every((el) => el < 11));

// Some
console.log(number.some((el) => el < 10)); // asks if some numbers are less than 10 and returns a boolean value

// Find
console.log(number.find((elem) => elem < 5)); // it only returns the first number that meets the condition


// Find Index
console.log(number.findIndex((elem) => elem < 5)); // this returns the index of the answer

// Sort
const numToSort = [10, 8, 26, 98, 2, 0 ]
console.log(numToSort.sort()); // this sorts by the first number
console.log(numToSort.sort((a, b) => a - b)); // this sorts by the value
console.log(numToSort.sort((a, b) => b - a));

// Set timeout
setInterval(() => {
    console.log("Javascript is easy");
}, 5000);

setTimeout(() => {
    console.log("one time action");
}, 5000);

console.log(document.getElementsByTagName("input"));
console.log(document.getElementsByClassName("input"));
console.log(document.getElementById("height"));
console.log(document.querySelector("h1"));

console.log(document.querySelector("#weight"));
console.log(document.querySelector(".input"));
console.log(document.querySelectorAll(".input"));

const weight = document.getElementById("weight");
console.log(weight.innerHTML);

const h1 = document.querySelector("h1");
console.log(h1.innerHTML);
console.log(h1.innerText);

const button = document.getElementById("button");
console.log(button);
button.addEventListener("click", () => {
    console.log("submitted");
})