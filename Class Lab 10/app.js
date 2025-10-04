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
            window.location.href = "./home.html";
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
            window.location.href = "./home.html";
            localStorage.setItem("uid", JSON.stringify(fb.currentUser));
        })
        .catch((error) => {
            let errorCode = error.code;
            message.innerHTML = errorCode;
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
            console.log(error);
        });
}
// firestor
let restorentEl = document.getElementById("restorent");
let dishNameEl = document.getElementById("dishName");
let priceEl = document.getElementById("price");
let quantityEl = document.getElementById("quantity");
let locationEl = document.getElementById("location");
let deliveryTimeEl = document.getElementById("deliveryTime");
let productListingEl = document.getElementById("productListing");

function addDish() {
    if (restorentEl.value !== "" && dishNameEl.value !== "" && priceEl.value !== "" && quantityEl.value !== "" && locationEl.value !== "" && deliveryTimeEl.value !== "") {

        db.collection("Deals")
            .add({
                Restorent: restorentEl.value,
                DishName: dishNameEl.value,
                Price: priceEl.value,
                Quantity: quantityEl.value,
                Location: locationEl.value,
                DeliveryTime: deliveryTimeEl.value,
                uid: fb.currentUser.uid,
            })
            .then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
        restorentEl.value = "";
        dishNameEl.value = "";
        priceEl.value = "";
        quantityEl.value = "";
        locationEl.value = "";
        dishNameEl.value = "";
    } else {
        message.innerHTML = "Please Fill Full Information";
        message.style.color = "red";
    }
}

function getDeals() {
    let uid = JSON.parse(localStorage.getItem("uid"));
    db.collection("Deals")
        .where("uid", "==", uid.uid)
        .onSnapshot((snapshot) => {
            snapshot.docChanges().forEach((change) => {
                if (change.type === "added") {
                    let docData = change.doc.data();
                    docData.id = change.doc.id;
                    console.log("New Deal: ", docData);
                    productListing(docData);
                }
            });
        });
}
function productListing(docData){
    let div = document.createElement("div");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let p4 = document.createElement("p");
    let p5 = document.createElement("p");
    let p6 = document.createElement("p");
}