let arr = [];

enterArray();

let arrEven = arr.filter(number => number % 2 === 0);
let arrOdd = arr.filter(number => number % 2 !== 0);

console.log("Tổng số chẵn: " + sum(arrEven));
console.log("Tổng số lẻ: " + sum(arrOdd));

function enterArray() {
    for (let i = 0; i < 10; i++) {
        arr[i] = Number(prompt("Nhập vào phần tử thứ " + (i + 1)));
    }
}

function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}
