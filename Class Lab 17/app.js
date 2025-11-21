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
bank();
