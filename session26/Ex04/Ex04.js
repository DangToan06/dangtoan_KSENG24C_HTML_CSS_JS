let arr = [];
let n = Number(prompt("Nhập vào đọ dài mảng"))
while (isNaN(n) || n < 0) {
    n = Number(prompt("Nhập vào đọ dài mảng"));
}
let prime;
if (n === 0) {
    console.log("mảng không có phần tử nào");
} else if (!Array.isArray(arr)) {
    console.log("Dữ liệu không hợp lệ");
} else {
    enterArray();
    prime = arr.filter(function(element){
        if(element < 2){
            return false;
        }
        for(let i = 2; i <= Math.sqrt(element); i++){
            if(element % i === 0){
                return false;
            }
        }
        return true;
    });
    console.log(prime);
}

function enterArray() {
    for (let i = 0; i < n; i++) {
        arr[i] = Number(prompt("Nhập vào phần tử thứ " + (i + 1)));
    }
}