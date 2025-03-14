let n = Number(prompt("Nhập độ dài mảng"));
let arr = [];

enterArray();
if (!Array.isArray(arr)) {
    console.log("Dữ liệu không hợp lệ");
} else {
    console.log(findAnonymousNumber());
}


function enterArray() {
    for (let i = 0; i < n; i++) {
        arr[i] = Number(prompt("Nhập vào phần tử thứ " + (i + 1)));
    }
}

function findAnonymousNumber(){
    let anonymous;
    let start = arr[0];
    let end = arr[arr.length - 1];

    let totalSum = ((start + end)*(end - start + 1))/2;

    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }

    anonymous = totalSum - sum;

    return anonymous;
}