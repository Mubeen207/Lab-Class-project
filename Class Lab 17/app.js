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
  super(userName, password, email) {
    userName,
    email,
    password
  }
  adminDashboard= true;
}

// let obj1 = new User("mubeen207", 123456, "mubeen@gmail.com");
// let childNo1 = new employee("mubeen207", 123456, "mubeen@gmail.com");
// let childNo2 = new manager("mubeen207", 123456, "mubeen@gmail.com");
let isAdmin = new Admin("mubeen207", 123456, "mubeen@gmail.com");

// console.log(obj1);
// childNo1.print();
// childNo2.print();
console.log(isAdmin);
