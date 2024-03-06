// let newFunc = function (e) {
//   console.log(e);
// };
// button.addEventlistener("click", newFunc); // call back- passing a function as a parameter
// let button = document.getElementById("btn");
// button.onclick = () => {
//   document.body.style.backgroundColor = "red";
//   alert("Warning");
// };
// // button.onclick = () => (button.style.backgroundColor = "red");

// let button2 = document.getElementById("btn1");
// button2.onclick = () => (document.body.style.backgroundColor = "orange");

// let button3 = document.getElementById("btn2");
// button3.onclick = () => (document.body.style.backgroundColor = "purple");

// let button1 = document.getElementById("btn1");

// document.addEventListener("keydown", function(e) {
//   button1.style.padding = "20px 20px";
//   button1.style.border = "4px solid red";
//   button1.style.borderRadius = "40%";
//   button1.style.backgroundColor = " black";
//   button1.style.color = " white";
//   button1.innerHTML = "surya";
//   console.log(e);
// });

// button1.addEventListener("keydown", function () {
//     button1.style.backgroundColor = "red";
//     button1.innerHTML = "hi da";
// });
let image = document.getElementById("image");
let x = 0;
let y = 0;
document.addEventListener("keydown", function (e) {
  if (e.code === "ArrowDown") {
    x = x + 10;
  }
  image.style.top = `${x}px`;
});
document.addEventListener("keydown", function (e) {
  if (e.code === "ArrowUp") {
    x = x - 10;
  }
  image.style.top = `${x}px`;
});
document.addEventListener("keydown", function (e) {
  if (e.code === "ArrowRight") {
    y = y + 10;
  }
  image.style.left = `${y}px`;
});
document.addEventListener("keydown", function (e) {
  if (e.code === "ArrowLeft") {
    y = y - 10;
  }
  image.style.left = `${y}px`;
});
