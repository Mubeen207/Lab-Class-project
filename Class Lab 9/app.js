// let a = 1;
// function solve () {
//     console.log(a);
//     a = 2;
// }

// solve();
const firebaseConfig = {
    apiKey: "AIzaSyBtfJY6eWzgOptzBTYUkW05p7f8Ou3cOnI",
    authDomain: "cd-first-project-15d4e.firebaseapp.com",
    projectId: "cd-first-project-15d4e",
    storageBucket: "cd-first-project-15d4e.firebasestorage.app",
    messagingSenderId: "221789667167",
    appId: "1:221789667167:web:e354f7017366b11ddd80ea",
    measurementId: "G-H37P36CTFD"
};
firebase.initializeApp(firebaseConfig);
let emailEl = document.getElementById("email");
let passwordEl = document.getElementById("password");
let message = document.getElementById("message");
let fb = firebase.auth();
const db = firebase.firestore();

function signUp() {
    fb.createUserWithEmailAndPassword(emailEl.value, passwordEl.value)
        .then((userCredential) => {
            // Signed in
            let user = userCredential.user;
            // ...
            message.innerHTML = "user registered successfully";
            message.style.color = "green";
            redirectToTodo();
        })
        .catch((error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
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
            // ...
            message.innerHTML = "user registered successfully";
            message.style.color = "green";
            redirectToTodo();
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            message.innerHTML = errorCode + " " + errorMessage;
            message.style.color = "red";
        });
}

function signOut() {
    fb.signOut()
        .then(() => {
            // Sign-out successful.
            redirectToSignUp();
        })
        .catch((error) => {
            // An error happened.
            message.innerHTML = error;
            message.style.color = "red";
        });
}

function redirectToTodo() {
    window.location.href = "./home.html";
    // localStorage.setItem("uid", JSON.stringify(fb.currentUser.uid));
}
function redirectToSignUp() {
    window.location.href = "./index.html";
}

// firebase firestore
let todos = document.getElementById("todos");
let homeMessage = document.getElementById("home-message");

function addTask() {
    db.collection("todos")
        .add({
            name: todos.value,
            uid: fb.currentUser.uid,
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            homeMessage.innerHTML = "Todo Added";
            homeMessage.style.color = "green";
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
            homeMessage.innerHTML = error;
            homeMessage.style.color = "red";
        });
}
// firestore
let todoEl = document.getElementById("todos");
function getUserTodo() {
    db.collection("todos").add({
        todo: todoEl.value,
        uid: fb.currentUser.uid
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
    db.collection("todos").where("uid", "==", uidData.uid)
        .onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(doc.data());
                makeListing(doc.data());

            });
        });
}

let divListing = document.getElementById("listing");

function makeListing(doc) {
    let p = document.createElement("p");
    let pTextNode = document.createTextNode(doc.uid);
    p.appendChild(pTextNode);
    divListing.appendChild(p);
}