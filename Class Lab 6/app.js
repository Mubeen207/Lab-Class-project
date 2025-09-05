// let cars = {
//   model: "Toyota",
//   price: 8500000,
//   color: "black",
//   start: function () {
//     console.log("Started...");
//   },
// };

// delete cars.color;
// delete cars.price;

// if ("price" in cars) {
//   console.log(cars.model + " is Availablr For Sale");
// } else {
//   console.log(cars.model + " is Not Available for sale");
// }

// console.log(cars);

// for (let props in cars) {
//   console.log(props);
//   console.log(cars[props]);
// }
let basicPlan = {
  price: 234,
  month: "july",
}; //10%
let professionalPlan = {
  price: 2344,
  month: "august",
}; // 12%
let ultimatePlan = {
  price: 23434,
  month: "december",
}; //15%

let Month = prompt("Enter Month");

Month = Month.toLowerCase();
console.log(Month);

if (Month === basicPlan.month) {
  console.log("10% Discount");
} else if (Month === professionalPlan.month) {
  console.log("12% Discount");
} else if (Month === ultimatePlan.month) {
  console.log("15% Discount");
} else {
  console.log("No Discount");
}
