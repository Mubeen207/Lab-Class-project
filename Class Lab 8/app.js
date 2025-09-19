
// console.log("1");

// let MyTimeOut = setTimeout(function () {
//     console.log("3");
// }, 1000);

// console.log("2");
// console.log(MyTimeOut);

// console.log("3");

// function signup(email, pass, callback) {
//     setTimeout(function () {
//         if (email === "mubeenulislam207@gmail.com" && pass === "12345678") {
//             callback();
//         }
//     },)
// }
// console.log("2");

// signup("mubeenulislam207@gmail.com", "12345678", redirect);
// function redirect() {
//     console.log("Resdirect To chrome");

// }
// console.log("1");
console.log("3");

function signup(email, pass, callback, secondecallback) {
    setTimeout(function () {
        if (email === "mubeenulislam207@gmail.com" && pass === "12345678") {
            callback(secondecallback);
        }
    }, 1000)
}
console.log("2");

signup("mubeenulislam207@gmail.com", "12345678", function redirect(log) {
    console.log(log());

}, function secondefunction() {

    return "Resdirect To chrome";
});
console.log("1");