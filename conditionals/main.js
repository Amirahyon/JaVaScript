// let userAge = prompt("Enter your age");

// if (userAge > 18) {
//     alert("You are old enough to drive");
// } 
// else {
//     let ageLeft = 18 - Number(userAge);
//     alert("You are left with ${ageLeft} years to drive.");
// }

// const number = prompt("What number do you wish to know if its even or odd?");

// if (+number%2===0) {
//     alert('${number} is an even number');
// }

const myFirstArray = Array(10).fill("students")
console.log(myFirstArray);
const anotherArray = ["Aisha", "Salamat", "Amirah", "a", "Kabirah", "Rukayyah", "Farida"];
console.log(anotherArray);
const numberArray = [1, 3, 6 , 8, 19];
console.log(numberArray);
const mixedArray = [1, 8, "Me", "You"];
console.log(mixedArray);

const Javascript = "Javascript is bae";
console.log(Javascript);
console.log(Javascript.split("a"));

console.log(anotherArray.length);
console.log(Javascript.lastIndexOf("a"));
console.log(anotherArray.lastIndexOf("a"));
console.log(Javascript.lastIndexOf("x"));
anotherArray.push("Bashirah");
console.log(anotherArray);
anotherArray.unshift("Bashira");
console.log(anotherArray);
anotherArray.pop();
console.log(anotherArray);
anotherArray.shift();
console.log(anotherArray);
anotherArray[0] = "Mariam";
console.log(anotherArray);
console.log(anotherArray.reverse());
console.log(anotherArray.indexOf("Mariam"));
console.log(anotherArray[0]);
console.log(Javascript.charAt(12));

console.log(anotherArray.concat(mixedArray));

console.log(Array.isArray(anotherArray));
console.log(anotherArray.join(" "));

anotherArray.splice(3, 1);
console.log(anotherArray);

console.log(anotherArray.slice(1, 3));