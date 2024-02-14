// // let g = "Javascript";
// // let h = "10";
// // function letsLearnScope() {
// //     console.log(g, h)
// //     if (true) {
// //         let a = "html"
// //         let b = "css"
// //         console.log(g, h)
// //         console.log(a, b);
// //     }
// // }
// // console.log(g, h);
// // letsLearnScope();

// // // Object
// // const a = {};
// // const person = {
// //     firstName: "Amirah",
// //     lastName: "Abdullahi",
// //     age: 10,
// //     skills: ['html', 'css', 'javascript'],
// //     city: "Ilorin",
// //     getFullName: function () {
// //         return `${person.firstName} ${this.lastName}`;  // person.firstName and this.firstName works.
// //     }
// // };
// // console.log(person.getFullName());
// // console.log(person);

 
// // const copyPerson = Object.assign({},person);
// // console.log(copyPerson);
// // copyPerson.skills.push('React')
// // copyPerson.skills.pop("javascript")
// // copyPerson.address = "13, GRA";
// // // console.log(copyPerson);

// // const key = Object.keys(copyPerson);
// // console.log(key);
// // const value = Object.values(copyPerson);
// // console.log(value);
// // const entries = Object.entries(copyPerson);
// // console.log(entries);
// // console.log(copyPerson.firstName, copyPerson.lastName, copyPerson.age);
// // console.log(copyPerson["firstName"]);

// // console.log(copyPerson.hasOwnProperty("lastName"));


// // const dog = {
// //     name:"Jack",
// //     legs: 4,
// //     color: "brown",
// //     age: 5,
// // };
// // console.log(dog);
// // dog.breed = "Caucasian";
// // dog.getDogInfo = function () {
// //     return `${this.name} ${this.age} ${this.color} ${this.breed}`
// // }
// // console.log(dog.getDogInfo());

// const users = {
//     Alex: {
//       email: 'alex@alex.com',
//       skills: ['HTML', 'CSS', 'JavaScript'],
//       age: 20,
//       isLoggedIn: false,
//       points: 30
//     },
//     Asab: {
//       email: 'asab@asab.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
//       age: 25,
//       isLoggedIn: false,
//       points: 50
//     },
//     Brook: {
//       email: 'daniel@daniel.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//       age: 30,
//       isLoggedIn: true,
//       points: 50
//     },
//     Daniel: {
//       email: 'daniel@alex.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     },
//     John: {
//       email: 'john@john.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//       age: 20,
//       isLoggedIn: true,
//       points: 50
//     },
//     Thomas: {
//       email: 'thomas@thomas.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     },
//     Paul: {
//       email: 'paul@paul.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     }
//   };

// //  Find the person who has many skills in the users object

// function letMostSkills() {
//     let mostSkills = "";
//     for (let i in users) {
//         console.log(users[i]);
//         if (users[i].skills.length > mostSkills.length) {
//           mostSkills = [i];
//       }
//     }
//     return mostSkills;
// }
// console.log(letMostSkills());
