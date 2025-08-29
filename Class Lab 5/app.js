// let h1 = document.createElement("h1");
// let message = document.createTextNode("This is a heading from javascript");
// let bodyEl = document.childNodes[1].childNodes[2];
// console.log(bodyEl);
// h1.appendChild(message);
// bodyEl.appendChild(h1);
// console.log(h1);


// let h1 = document.getElementById("heading");
// console.log(h1.hasAttribute("class"));
// console.log(h1.getAttribute("title"));
// console.log(h1.setAttribute("onClick", "alert('This is a heading')"));
// console.log();



let input = document.getElementById("input");
let message = document.getElementById("message");
let ul = document.childNodes[1].childNodes[2].childNodes[9];

function add() {

    if (input.value === "") {

        message.innerHTML = "Empty Text";
    } else {
        let li = document.createElement("li");
        let text = document.createTextNode(input.value);

        let delete_button = document.createElement("button")
        let text_delete = document.createTextNode("Delete");
        delete_button.setAttribute("onClick", "removeItem(this)");
        delete_button.appendChild(text_delete);

        let edit_button = document.createElement("button")
        let text_edit = document.createTextNode("Edit");
        edit_button.setAttribute("onClick", "EditItem(this)")
        edit_button.appendChild(text_edit);

        li.appendChild(text);
        li.appendChild(delete_button);
        li.appendChild(edit_button);
        ul.appendChild(li);
        // li.appendChild(text);
        // ul.appendChild(li);
    }
    input.value = "";
}
function removeItem(el) {

    let remove = el.parentNode;
    el.parentNode.parentNode.removeChild(remove);

}
function EditItem(el){

    // console.log(el.parentNode);
    
    input.value = el.parentNode.value;

}

// let div1 = document.getElementById("div-1");
// let special = document.getElementById("special");
// let div2 = div1.childNodes[1];

// let h1 = document.createElement("h1");
// let text = document.createTextNode("Hello Dom");

// let fullH1 = h1.appendChild(text);

// div2.insertBefore(fullH1, special);

// div2.removeChild(special);

// console.log(special.parentNode.parentNode);


// console.log(div2.firstChild.nextSibling.nextSibling.nextSibling);
// console.log(div2.lastChild.previousSibling.previousSibling.previousSibling);


