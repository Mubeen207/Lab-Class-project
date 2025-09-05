let cars = {
  model: "Toyota",
  price: 8500000,
  color: "black",
  start: function () {
    console.log("Started...");
  },
};

delete cars.price;

if ("price" in cars) {
  console.log(cars.model + " is Availablr For Sale");
} else {
  console.log(cars.model + " is Not Available for sale");
}

console.log(cars);

// for (let props in cars) {
//   console.log(props);
//   console.log(cars[props]);
// }
