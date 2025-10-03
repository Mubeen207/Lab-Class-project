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

function signUp() {
    fb.createUserWithEmailAndPassword(emailEl.value, passwordEl.value)
        .then((userCredential) => {
            let user = userCredential.user;
            message.innerHTML = "Sign up Successful";
            message.style.color = "green";
            location.href = "./home.html";
            localStorage.setItem("uid", JSON.stringify(fb.currentUser));
        })
        .catch((error) => {
            let errorCode = error.code;
            message.innerHTML = errorCode;
            message.style.color = "red";
        });
}

function signIn() {
    fb.signInWithEmailAndPassword(emailEl.value, passwordEl.value)
        .then((userCredential) => {
            let user = userCredential.user;
            message.innerHTML = "Sign up Successful";
            message.style.color = "green";
        })
        .catch((error) => {
            let errorCode = error.code;
            message.innerHTML = errorCode;
            message.style.color = "red";
        });
}