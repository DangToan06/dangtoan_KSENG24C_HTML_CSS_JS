let number = prompt("Nhập vào một số nguyên bất kì");
let arr = [];
let arr2 = [];

console.log(maxNumber());

function maxNumber() {
    arr = number.split("");
    arr.sort((a, b) => b - a);
    arr2 = arr.join("");
    return arr2;
}