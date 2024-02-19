console.log(document.getElementsByTagName("input"));
console.log(document.getElementsByClassName("input"));
console.log(document.getElementById("height"));
console.log(document.querySelector("h1"));

console.log(document.querySelector("#weight"));
console.log(document.querySelector(".input"));
console.log(document.querySelectorAll(".input"));

const height = document.getElementById("height");
console.log(height);
console.log(height.value);

const weight = document.getElementById("weight");
console.log(weight.value);

const h1 = document.querySelector("h1");
console.log(h1.innerHTML);
console.log(h1.innerText);

function BMI(w, h) {
const bmiValue = w / (h * h);
console.log(bmiValue);
if (bmiValue >= 30){
    return 'Obese'
} else if(bmiValue >= 25){
    return 'Overweight'
} else if(bmiValue >= 18.5){
    return 'Normal weight'
} else{
    return 'Underweight'
}
};

const button = document.getElementById("button");
console.log(button);

button.addEventListener("click", () => {
    const w = weight.value;
    const h = height.value;
    console.log(BMI(w, h));
    alert(`Your BMI value is ${BMI(w, h)}`)
});

const inputs = document.querySelectorAll("input");
console.log(inputs);

setInterval(() => {
    let randoColor = '#';
    for (let i = 0; i < 6; i++){
        let colorList = 'abcdef012345678';
        let radColor = Math.floor(Math.random() * colorList.length);randoColor += colorList[radColor];
    }
    console.log(randoColor);
    for(let i = 0; i < inputs.length; i++) {
        inputs[i].style.backgroundColor = randoColor;
    }
    }, 1000);

const div = document.createElement("div");
div.setAttribute("class", "odogwu");
div.textContent = 'I will show you how powerful I am';

console.log(div);

const body = document.querySelector('body');
console.log(body);
body.appendChild(div);

const newInput = document.querySelector("input");
console.log(newInput);
body.removeChild(newInput);

setInterval(() => {
    let randomColor = '#';
    for (let i = 0; i < 6; i++){
        let colorList = 'abcdef012345678';
        let randColor = Math.floor(Math.random() * colorList.length);randomColor += colorList[randColor];
    }
    console.log(randomColor);
    h1.style.color = randomColor;
}, 1000);