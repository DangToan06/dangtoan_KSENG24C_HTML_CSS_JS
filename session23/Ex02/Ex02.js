let arr = [];
let n = Number(prompt("Nhập độ dài mảng"));
while(isNaN(n) || n < 0){
    n = Number(prompt("Nhập độ dài mảng"));
}
for(let i = 0 ; i < n; i++){
    arr[i] = Number(prompt("Nhập vào số thứ " + ( i + 1)));
    while(isNaN(arr[i])){
        arr[i] = Number(prompt("Nhập vào số thứ " + ( i + 1)));
    }
}

let max = arr[0];
let index = 0;

for(let i = 1 ; i < arr.length; i++){
    if(arr[i] > max){
        max = arr[i];
        index = i;
    }
}

console.log("Số lớn nhất: " +max);
console.log("Vị trí: " +index);

