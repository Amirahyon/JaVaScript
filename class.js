// console.log("Hello World!");
// let name = "Titi";
// console.log(name);
// name = "Abiola";
// console.log(name);
// let age = 57;
// let newage = 13;
// let percentage = newage/age;
// console.log(percentage);
// let myString = 'hi';
// let string="hello again";
// let otherString=`hello`;
// console.log(myString);
// console.log(otherString);
// console.log(string);
// let  num = 0;
// console.log(num);
// let bol = true;
// console.log(bol);
// let undefinedvariable;
// console.log(undefinedvariable);
// let emptyvalue = null;
// console.log(emptyvalue);
// console.log(typeof bol);

// const pi = 3.412;
// console.log(pi);

//  String Methods
// let string = "Javascript";
// firstLetter = string[3];
// console.log(firstLetter);
// console.log(string.length);
// console.log(string.toUpperCase());

// let text ="Programming";
// console.log(text.substring(1, 7));
// console.log(text.substr(1, 7));

// let day = "30 Days of Javascript";
// console.log(day.split());
// console.log(day.split(" "));
// console.log(day.includes("Days"));

// let title ="javascript";
// let lastIndex = title.length - 1;
// console.log(title.charAt(lastIndex));
// console.log(title.indexOf("s"));
// console.log(title.replace("javascript", "Asabeneh"));

// // Assignment operators
// let numOne = 5;
// let numTwo = 4;
// let sum = numOne + numTwo;
// let diff = numOne - numTwo;
// let mult = numOne * numTwo;
// let div = numOne / numTwo;
// let remainder = numOne % numTwo;
// let powerOf = numOne ** numTwo;
// console.log(sum, diff, mult, div, remainder, powerOf);

// // Comparison operators
// let first = 3;
// let second = 2;
// console.log(first > second);
// console.log(first < second);

// // Logical operators
// let check = 4 > 3 && 10 > 5;
// let see = 4>3 && 5 > 10;
// console.log(check, see);

// let compare = 4 > 3 || 10 > 5;
// let value = 4 > 3 || 10 < 5;
// let answer = 4 < 3 || 10 < 5;
// console.log(compare, value, answer);

// // Negation operators
// let negate = !(4 < 3);
// let result = !true;
// console.log(negate, result);

// // Increment and Decrement operators
// let count = 1;
// console.log(++count);
// console.log(count++);

// let no = 20;
// console.log(--no);
// console.log(no--);

// Ternary Operators
// let isAMan = true;
// isAMan ? console.log("Yes, he is a man"):
// console.log("No, he is not a man");


// Windows Operators
// let greetings = "Hello!";
// alert(`${greetings}`);

// let name = prompt("Enter your name");
// console.log(`${name}`);

// let firstNumber = prompt("Enter number");
// let secondNumber = prompt("Enter number");
// let output = +firstNumber + +secondNumber;
// console.log(output);

// const agree = confirm("Are you sure you want to subscribe?")
// console.log(agree);

// let num = "I love Javascript and i believe you also love Javascript";
// let res = /javascript/gi;
// console.log(numBer.match(res));

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

let inequalities = /[%$@#;&?!]/gi;
console.log(sentence.replace(inequalities, ""));

let extract = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
let extractNum = /\d+/gi;
console.log(extract.match(extractNum));

let a = extract.match(extractNum);
let ai = +a[0] * 12;
let bi = +a[1];
let ci = +a[2] * 12;
let output = ai + ci + +a[1];
console.log(output);
// console.log(ai + bi + ci);


let isAMan = true;
if (isAMan) {console.log("Yes, he is a man");} else {console.log("No, he is not a man");}

let b = 5;
if (b < 5) {
    console.log("Not correct");
}  else if (b = 5) {
    console.log("It is correct");
} else if (b > 5) {
    console.log("Try again");
} else {console.log("Try again");
}

let today = prompt('What day is today');
let day = today.toLowerCase();
switch (day) {
    case 'monday':
        console.log('Today is Monday')
        break ;
    case 'tuesday':
        console.log('Today is Tuesday')
        break;
    case 'wednesday':
        console.log('Today is Wednesday')
        break;
    case 'thursday':
        console.log('Today is Thursday')
        break;
    case 'friday':
        console.log('Today is Friday')
        break;
    default:
        console.log('It is not a day');
}
