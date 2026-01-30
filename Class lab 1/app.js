// console.log("Devideing");

// let bill = prompt("Enter bill price");
// let persons = prompt("Enter number of persons");

// bill = parseInt(bill);
// persons = parseInt(persons);

// console.log(parseFloat(bill / persons).toFixed(2));

//-----------------------------------------------------------------
// function tax() {
//   let salary = prompt("Enter your  number");
//   salary = parseInt(salary);
//   if (salary <= 50000) {
//     console.log("You have charged 0%");
//   } else if (salary <= 100000 && salary > 50000) {
//     console.log("You have charged 0.5% TAX " + salary * (0.5 / 100));
//   } else if (salary <= 15000 && salary > 100000) {
//     console.log("You have charged 1% TAX " + salary * (1 / 100));
//   }
// }
// tax();
//--------------------------------------------------------------------------

// let initAmountEl = document.getElementById("init-amount");
// let bidMessageEl = document.getElementById("show-message");
// initAmountEl.innerHTML = 1000;
// let userBidAmount;
// let userBidNumber;
// function playBiddingGame() {
//   userBidAmount = +prompt("Enter yor Bid amount?");
//   userBidNumber = +prompt("Enter your a number 1 to 3");
//   let gnNumber = generatdNumber();
//   let matchedBid = isBidMatched(userBidNumber, gnNumber);
//   showBidMeesage(userBidAmount, matchedBid);
// }

// function generatdNumber() {
//   let rendomNumber = Math.ceil(Math.random() * 3);
//   return rendomNumber;
// }

// function isBidMatched(userBidNumber, gnNumber) {
//   let matched = false;
//   if (userBidAmount === gnNumber) {
//     matched = true;
//   }
//   return matched;
// }

// function showBidMeesage(userBidAmount, matchedBid) {
//   if (matchedBid) {
//     initAmountEl.innerHTML = Number(initAmountEl.innerHTML) + userBidAmount;
//     bidMessageEl.innerHTML =
//       "Congrats! you won the bid " +
//       userBidAmount +
//       " has been added to your account.";
//   } else {
//     initAmountEl.innerHTML = Number(initAmountEl.innerHTML) - userBidAmount;
//     bidMessageEl.innerHTML =
//       "Sorry! you lost the bid " +
//       userBidAmount +
//       " has been deducted to your account.";
//   }
// }
//----------------------------------------------------------------------------------

let userEmailEl = document.getElementById("email");
let userPasswordEl = document.getElementById("password");
let users = [];
function register (){
    let userInputMail = userEmailEl.value;
    let userInputPass = userPasswordEl.value;
    let user = {
        email: userInputMail,
        password: userInputPass
    }
    users.push(user);
    console.log(userInputMail , userInputPass);
}

function login (){
    
    console.log(users);
}
