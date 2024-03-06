let colors = [
  "The only way to do great work is to love what you do.",
  "In the middle of difficulty lies opportunity.",
  "Believe you can and you're halfway there.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "The best way to predict the future is to create it.",
  "The only limit to our realization of tomorrow will be our doubts of today.",
  "Don't watch the clock; do what it does. Keep going.",
  "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  "Happiness is not something ready-made. It comes from your own actions.",
  "You miss 100% of the shots you don't take.",
];

var outputElement = document.getElementById("output");

let random = Math.floor(Math.random() * 10);
// console.log(colors[random]);
let content = colors[random];
console.log("this  :" + content);
outputElement.innerText = content;
