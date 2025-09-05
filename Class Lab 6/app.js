let cars = {
  model: "Toyota",
  price: 8500000,
  color: "black",
  start: function () {
    console.log("Started...");
  },
};

delete cars.color;
  console.log(cars);

// for (let props in cars) {
//   console.log(props);
//   console.log(cars[props]);
// }
