// let king = document.getElementById("king");

// function card_num(num){

//     let rendom = Math.ceil(Math.random() * 3);
//     if (num === rendom){
//         king.innerHTML = '<img id="king" src="./Images/King Card Images.jpg" alt="" />';
//     }
//     else {
//         king.innerHTML = "You Lost";

//     }

// }
let img1 = document.getElementById("img-1");
let img2 = document.getElementById("img-2");
let img3 = document.getElementById("img-3");
let h1 = document.getElementById("heading");
let isFlipped = false;
function flipCard(num) {
  if (!isFlipped) {
    let kingNumber = Math.ceil(Math.random() * 3);
    if (kingNumber === 1) {
      img1.src = "./Images/King.jpg";
      img2.src = "./Images/joker.jpg";
      img3.src = "./Images/joker.jpg";
    } else if (kingNumber === 2) {
      img1.src = "./Images/joker.jpg";
      img2.src = "./Images/King.jpg";
      img3.src = "./Images/joker.jpg";
    } else if (kingNumber === 3) {
      img1.src = "./Images/joker.jpg";
      img2.src = "./Images/joker.jpg";
      img3.src = "./Images/King.jpg";
    }
    isFlipped = true;
    if (kingNumber === num) {
      h1.innerHTML = "You Win";
      h1.style.color = "green"; 
    } else {
        h1.innerHTML = "You Loss";
        h1.style.color = "red"; 
    }
  }
}

function resetCard() {
  img1.src = "./Images/card-back.png";
  img2.src = "./Images/card-back.png";
  img3.src = "./Images/card-back.png";
  isFlipped = false;
}
