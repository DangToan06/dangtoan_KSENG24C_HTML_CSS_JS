let arr = [];
let n = Number(prompt("Nhập vào độ dài mảng"));
let check = false;
let count = 0;

while (isNaN(n) || n < 0) {
    n = Number(prompt("Nhập lại"));
}

enterArray(n);
checkArray(n);

function enterArray() {
    for (let i = 0; i < n; i++) {
        arr[i] = Number(prompt("Nhập vào phần tử thứ: " + (i + 1)));
    }
}

function checkArray() {
    for (let i = 0; i < n; i++) {
        if (!isNaN(arr[i])) {
            check = true;
        }
    }
    let arr2 = [];

    if (check) {
        for (let i = 0; i < n; i++) {
            if (arr[i] % 2 === 0) {
                arr2[count] = arr[i];
                count++;
            }
        }
        console.log(arr2);
    } else {
        console.log("Dữ liệu không hợp lệ");
    }
}