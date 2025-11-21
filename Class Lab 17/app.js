function firstTask() {
  class User {
    constructor(userName, password, email) {
      this.userName = userName;
      this.email = email;
      this.password = password;
    }
    isAdmin = false;
  }

  // class employee extends User {
  //   print() {
  //     console.log("Child2");
  //   }
  // }
  // class manager extends User {
  //   print() {
  //     console.log("Child1");
  //   }
  // }

  class Admin extends User {
    constructor(userName, password, email, adminPrivilage) {
      super(userName, password, email);
      this.adminPrivilage = adminPrivilage;
    }
    adminDashboard = true;
  }

  // let obj1 = new User("mubeen207", 123456, "mubeen@gmail.com");
  // let childNo1 = new employee("mubeen207", 123456, "mubeen@gmail.com");
  // let childNo2 = new manager("mubeen207", 123456, "mubeen@gmail.com");
  let isAdmin = new Admin("mubeen207", 123456, "mubeen@gmail.com", true);

  // console.log(obj1);
  // childNo1.print();
  // childNo2.print();
  console.log(isAdmin);
}
// firstTask();
//----------------------------------------------------------------------------------------
function bank() {
  class Bank {
    constructor(balance, secretKey, withdraw, deposit) {
      this.balance = balance;
      this.secretKey = secretKey;
      this.withdraw = function () {
        console.log(withdraw);
      };
      this.deposit = function () {
        console.log(deposit);
      };
    }
  }
  let bank = new Bank(1000, 1234, "withdraw", "deposit");

  console.log(bank);
  bank.deposit();
  bank.withdraw();
}
// bank();
//-----------------------------------------------------------------------------------------
function task3() {
  function random() {
    return Math.ceil(Math.random() * 6);
  }
  function rollDice(userNum = random()) {
    console.log(userNum);
  }
  rollDice();
}
// task3();
//-----------------------------------------------------------------
function tryCatch() {
  console.log("1");
  try {
    undefinedFunction();
  } catch (e) {
    console.error(e);
  } finally {
    console.log("2");
  }
}
// tryCatch();
//-------------------------------------------------------------

function switchCase () {
let days = +prompt("Enter Numbeer");
switch(days){
  case 1: 
  console.log("Monday");
  break;
  case 2: 
  console.log("Tuesday");
  break;
  case 3: 
  console.log("Wednesday");
  break;
  case 4: 
  console.log("Thursday");
  break;
  default:
    console.log("Get Out");
}
}
switchCase();