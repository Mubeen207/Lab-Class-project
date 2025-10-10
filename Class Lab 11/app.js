let divEl = document.getElementById("div");
function arrChk() {
    let arr = [Object, undefined, NaN, Number, String, null];
    for (let i = 0; i <= arr.length; i++) {
        console.log(typeof arr[i], arr[i]);
    }
}
// arrChk();
function stringChk() {
    let string = "system";
    let result = '"';
    for (let i = string.length - 1; i >= 0; i--) {
        result = result + string[i];
    }
    let p = document.createElement("p");
    let pText = document.createTextNode(result + '"');
    p.appendChild(pText);
    divEl.appendChild(p);
}
stringChk();