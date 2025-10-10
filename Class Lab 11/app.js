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
    console.log(result + '"');
}
stringChk();