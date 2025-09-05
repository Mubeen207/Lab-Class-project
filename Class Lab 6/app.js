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
//-------------------------------------------------------------------------------------
// let basicPlan = {
//   price: 234,
//   month: "july",
// }; //10%
// let professionalPlan = {
//   price: 2344,
//   month: "august",
// }; // 12%
// let ultimatePlan = {
//   price: 23434,
//   month: "december",
// }; //15%

// let Month = prompt("Enter Month");

// Month = Month.toLowerCase();
// console.log(Month);

// if (Month === basicPlan.month) {
//   console.log("10% Discount");
// } else if (Month === professionalPlan.month) {
//   console.log("12% Discount");
// } else if (Month === ultimatePlan.month) {
//   console.log("15% Discount");
// } else {
//   console.log("No Discount");
// }
//-----------------------------------------------------------------------------------
// function Students(stadName, rollNo, phone) {
//   this.name = stadName;
//   this.rollNo = rollNo;
//   this.phone = phone;
//   this.greetUser = function (name) {
//     console.log("Hello " + name);
//   };
// }
// let std1 = new Students("Mubeen", "383728", "03322279397");
// let std2 = new Students("Zaheer", "383758", "03354675395");
// let std3 = new Students("Mubeen", "383728", "03215459393");
// Students.prototype.attendance = false;
// std1.attendance = true;

// console.log(std1, std2, std3);

// console.log(std1.attendance, std2.attendance, std3.attendance);

//--------------------------------------------------------------------------------------------

// function Students(stadName, rollNo, phone) {
//   this.name = stadName;
//   this.rollNo = rollNo;
//   this.phone = phone;
//   this.greetUser = function (name) {
//     console.log("Hello " + name);
//   };
// }
// Students.prototype.calcAnnual = function () {
//   console.log("Calculated");
// };
// console.log(Students.hasOwnProperty("calcAnnual"));
// console.log(Students.hasOwnProperty("name"));
//---------------------------------------------------------------------

function add(){
    
}

