// let arr = ["Apple", "Banana", "Kiwi"];

// for (let names of arr) {
//     console.log(names);
// }
// for (let names in arr) {
//     console.log(names);
// }
//------------------------------------------------------------------------------------
// let total = 0;
// let arr = [10, 243, 324, 234, 54, 34, 633];

// for (let numbers of arr) {
//     total += numbers;
// }
// console.log(total);

// for (let numbersIndex in arr) {
//     total += arr[Number(numbersIndex)];
// }
// console.log(total);

// let str = "Mubeen".includes("Ul Islam");

// console.log(str);
//-----------------------------------------------------------------------------------
// let para = "Hello! my name is Mubeen Ul Islam. I am a softwear engineer."
// let vowels = "aeiouAEIOU";
// let count = 0;

// for (let find of vowels) {
//     for (let found in para) {
//         if (find === para[Number(found)]) {
//             count++;
//         }
//     }
// }
// console.log(count);

// for (let find of para) {
//     if (vowels.includes(find)) {
//         count++;
//     }
// }
// console.log(count);

//------------------------------------------------------------------------

// let food = ["Burger", "Pizza", "Broast" , "Mandi"];
// for (let i = food.length - 1; i >= 0; i--) {
//     console.log(`I love ${food[i]}`);
// }

//-----------------------------------------------------------------------

// let str = "Hello";
// let letter = "";
// for (let find of str){
// letter = find + letter
// }
// console.log(letter);
//-------------------------------------------------------------------------

// let myObj = {
//     fullName: "Mubeen",
//     rollNum: 123456
// }
// for (let items in myObj) {
//     console.log(`${items}: ${myObj[items]}`);
// }

// for (let items of Object.keys(myObj)) {
//     console.log(`${items}: ${myObj[items]}`);
// }

// for (let items of Object.values(myObj)) {
//     console.log(`${items}`);
// }

// for (let [keys , values] of Object.entries(myObj)) {
//     console.log(`${keys}: ${values}`);
// }

//------------------------------------------------------------------------------------

// let total = 0;
// let marks = {
//     Math: 115,
//     English: 245,
//     Physics: 100
// }
// for (let subject in marks) {
//     total += marks[subject];
// }
// console.log(total);

//-----------------------------------------------------------------------------------

// let inventory = {
//     apples: 8,
//     banana: 10,
//     kiwi: 15
// }
// for (let items in inventory) {
//     console.log(`There are ${inventory[items]} ${items} Left`);
// }
//-----------------------------------------------------------------------------------
let arr = [];
let human = {
    fullName: "Mubeen Ul Islam",
    rollNum: 123456,
    isDisabled: true
}
for (let items in human) {
   arr.push(human[items])
}
console.log(arr);
