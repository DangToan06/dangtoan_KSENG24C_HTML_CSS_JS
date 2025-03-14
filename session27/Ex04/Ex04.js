let menu = `
1. Nhập danh sách số nguyên.
2. Tính trung bình các số.
3. Tìm số chẵn lớn nhất.
4. Tìm số lẻ nhỏ nhất.
5. Thoát.
`

let exit = true;
let arr = [];
let n;

while (exit) {
    let chose = Number(prompt(menu));
    switch (chose) {
        case 1:
            enterArrayNumber();
            break;
        case 2:
            console.log(average());
            break;
        case 3:
            console.log(searchMaxEven());
            break;
        case 4:
            console.log(searchMinOdd());
            break;
        case 5:
            exit = false;
            break;
        default:
            console.log("Lựa chọn không hợp lệ");
            break;
    }
}

function enterArrayNumber() {
    n = Number(prompt("Nhập vào độ dài mảng"));
    for (let i = 0; i < n; i++) {
        arr[i] = Number(prompt("Nhập vào phần tử thứ " + (i + 1)));
    }
    console.log("Mảng vừa nhập vào là");
    for (let index in arr) {
        console.log(arr[index]);
    }
}

function average() {
    let avg = 0;
    for (let index in arr) {
        avg += arr[index];
    }
    return avg / arr.length;
}

function searchMaxEven() {
    let max = -Infinity;
    for (let index in arr) {
        if (index % 2 === 0 && index > max) {
            max = index;
        }
    }
    return max;
}

function searchMinOdd() {
    let min = Infinity;
    for (let index in arr) {
        if (index % 2 === 1 && index < min) {
            min = index;
        }
    }
    return min;
}