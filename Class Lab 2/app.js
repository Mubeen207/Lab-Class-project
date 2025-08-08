//-----------------------------------------------------------------------------------------
// let rightnow = new Date(); // Today Date
// let doomsDay = new Date("20 july, 2035"); // doomsday date

// let doomsDayTime = doomsDay.getTime();
// let todaytime = rightnow.getTime();
// let result;
// console.log(todaytime, " Today Time", doomsDayTime, " 20 july, 2035 time");

// result = doomsDayTime - todaytime;

// result = Math.floor(result / 1000 / 60 / 60 / 24);

// console.log(result, " Days");
//-----------------------------------------------------------------------------------------
// let rightNow = new Date();
// let today = rightNow.getDay();
// let days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"]
// let todayStr = days[today];
// console.log(todayStr);
//-----------------------------------------------------------------------------------------
// let rightNow = new Date();

// let month = rightNow.getMonth(); // 0 - 11
// let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
// let monthStr = months[month];
// console.log(monthStr);
//-----------------------------------------------------------------------------------------
// let rightNow = new Date();

// let todayDate = rightNow.getDate();
// let thisYear = rightNow.getFullYear();// 2025
// let todayHours = rightNow.getHours();
// let todayMins = rightNow.getMinutes();
// let todaySeconds = rightNow.getSeconds();
// let todayMilisec = rightNow.getMilliseconds();
// let todayTimeZone = rightNow.getTimezoneOffset();
// console.log(todayTimeZone);
//-----------------------------------------------------------------------------------------
// let time = document.getElementById("time");
// let rightNow = new Date();
// let todayHours = rightNow.getHours();
// let todayMins = rightNow.getMinutes();
// let todaySeconds = rightNow.getSeconds();
// let todayMilisec = rightNow.getMilliseconds();

// if (todayHours > 12) {
//   todayHours = todayHours - 12;
// }
// if (todayMins < 10) {
//   todayMins = "0" + todayMins;
// }
// time.innerHTML = todayHours + " : " + todayMins + " : " + todaySeconds;
// time.innerHTML =
//   todayHours + " : " + todayMins + " : " + todaySeconds + " : " + todayMilisec;
//-----------------------------------------------------------------------------------------

// setInterval(function () {
// }, 1000);
//-----------------------------------------------------------------------------------------
// let time = document.getElementById("time");
// let count = 0;
// let sixty = 60;
// let timeinterval;
// function number() {
//   time.innerHTML = count + " : " + sixty;
//   sixty--;
//   if (sixty === 0) {
//     sixty = 60;
//     count++;
//     clearInterval(timeinterval);
//     call();
//   }
// }
// function call() {
//   timeinterval = setInterval(number, 100);
// }
// call();
//-----------------------------------------------------------------------------------------

// let time = document.getElementById("time");
// time.innerHTML = "Hello";
// setTimeout(function () {
//   time.innerHTML = "Hello Bhai";
// }, 5000);

//-----------------------------------------------------------------------------------------
// localStorage.setItem();
// localStorage.getItem();
// let time = document.getElementById("time");
// let StudentName = document.getElementById("Studentname");
// function submit() {
//   localStorage.setItem("Student Name", StudentName.value);
//   let setname = localStorage.getItem("Student Name");

//   time.innerHTML = setname;
// }
// let setname = localStorage.getItem("Student Name");
// time.innerHTML = setname;
//-----------------------------------------------------------------------------------------
