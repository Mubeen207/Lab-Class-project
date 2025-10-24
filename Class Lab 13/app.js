let budgetEl = document.getElementById("budget");
let expanseNameEl = document.getElementById("expanse-name");
let expanseAmountEl = document.getElementById("expanse-amount");
let budgetAmountEl = document.getElementById("budget-amount");
let expanxceListEl = document.getElementById("expanxce-list");
let expansearr = JSON.parse(localStorage.getItem("Expanse")) || [];
let amount = Number(localStorage.getItem("Amount")) || 0;
displayBudget();
displayExpanse();
function addBudget() {
    if (budgetEl.value > 0) {
        localStorage.setItem("Budget", budgetEl.value);
    } else if (budgetEl.value == "") {
        alert("Enter Amount Please");
        return;
    } else {
        alert("Your Budget is Less Then 1");
        return;
    }
}
function addExpance() {
    if(expanseAmountEl.value < amount){

        if (expanseNameEl.value !== "" && expanseAmountEl.value > 0) {
            expansearr.push(expanseNameEl.value + " " + expanseAmountEl.value)
            localStorage.setItem("Expanse", JSON.stringify(expansearr));
            amount += Number(expanseAmountEl.value);
            localStorage.setItem("Amount", amount);
            let h3 = document.createElement("h3");
            let h3TextNode = document.createTextNode(expanseNameEl.value + " " + expanseAmountEl.value);
            h3.appendChild(h3TextNode);
            expanxceListEl.appendChild(h3);
        } else if (expanseAmountEl.value == "") {
            alert("Enter Amount Please");
            return;
        } else if (expanseNameEl.value == "") {
            alert("Enter Expanse Name Please");
            return;
            
        } else {
            alert("Your Budget is Less Then 1");
            return;
        }
    } else {
        alert("Paisy poryho gaye")
    }
}
function displayBudget() {
    budgetAmountEl.innerHTML = localStorage.getItem("Budget");
}
function displayExpanse() {
    for (let i = 0; i < expansearr.length; i++) {
        console.log(expansearr);
        let h3 = document.createElement("h3");
        let h3TextNode = document.createTextNode(expansearr[i]);
        h3.appendChild(h3TextNode);
        expanxceListEl.appendChild(h3);
    }
    let h3 = document.createElement("h3");
    let h3TextNode = document.createTextNode("Your Available Budget is " + (Number(localStorage.getItem("Budget")) - amount));
    h3.appendChild(h3TextNode);
    expanxceListEl.appendChild(h3);
}