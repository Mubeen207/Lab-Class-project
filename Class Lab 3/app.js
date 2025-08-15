// let para = document.getElementsByTagName("p");
// let userinput;
// for (let i = 0; i < para.length; i++) {
//   userinput = prompt("Enter Your Text");
//   para[i].innerHTML = userinput;
// }
//-----------------------------------------------------------

const { use } = require("react");

let divel = document.getElementsByTagName("div");
let UserInput;
let para = divel.getElementsByTagName("p");

for (let i = 0; i < para.length; i++) {
UserInput = prompt("Enter Your Prompt");
para[i].style.backgroundColor = "black"
para[i].style.color = "white"
para[i].innerHTML = UserInput;
}