const firebaseConfig = {
  apiKey: "AIzaSyBtfJY6eWzgOptzBTYUkW05p7f8Ou3cOnI",
  authDomain: "cd-first-project-15d4e.firebaseapp.com",
  projectId: "cd-first-project-15d4e",
  storageBucket: "cd-first-project-15d4e.firebasestorage.app",
  messagingSenderId: "221789667167",
  appId: "1:221789667167:web:e354f7017366b11ddd80ea",
  measurementId: "G-H37P36CTFD",
};
firebase.initializeApp(firebaseConfig);
let fb = firebase.auth();
const db = firebase.firestore();
let emailEl = document.getElementById("email");
let passwordEl = document.getElementById("password");
let message = document.getElementById("message");

// Authentication
function signUp() {
  fb.createUserWithEmailAndPassword(emailEl.value, passwordEl.value)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      message.innerHTML = "Sign up Successful";
      message.style.color = "green";
      redirectToHome();
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
      message.innerHTML = errorCode + " " + errorMessage;
      message.style.color = "red";
    });
}

function signIn() {
  fb.signInWithEmailAndPassword(emailEl.value, passwordEl.value)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      message.innerHTML = "Sign up Successful";
      message.style.color = "green";
      redirectToHome();
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      message.innerHTML = errorCode + " " + errorMessage;
      message.style.color = "red";
    });
}

function signOut() {
  localStorage.clear();
  fb.signOut()
    .then(() => {
      console.log("Sign Out");
      window.location.href = "./index.html";
    })
    .catch((error) => {
      // An error happened.
      console.log(error);
    });
}

function redirectToHome() {
  location.href = "./home.html";
  localStorage.setItem("uid", JSON.stringify(fb.currentUser));
}

// Firestore
let todosEl = document.getElementById("todos");

function addTodo() {
  db.collection("todos")
    .add({
      todo: todosEl.value,
      uid: fb.currentUser.uid,
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
}

function getTodos() {
  let uidData = JSON.parse(localStorage.getItem("uid"));
  db.collection("todos")
    .where("uid", "==", uidData.uid)
    .onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // console.log(doc.data());
        makeListing(doc.data());
      });
    });
}

let divListing = document.getElementById("listing");

function makeListing(doc) {
  let p = document.createElement("p");
  let pTextNode = document.createTextNode(doc.todo);
  p.appendChild(pTextNode);
  divListing.appendChild(p);
  
  console.log(doc.todo);
}
