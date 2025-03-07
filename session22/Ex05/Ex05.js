let arr= [];
let sum1 = 0;
let sum2 = 0;

for(let i = 0; i < 5; i++){
    arr[i] = Number(prompt("Nhập vào giá trị thứ " +(i + 1)));
}

for(let i = 0; i < 5; i++){
    if(arr[i] % 2 === 0){
        sum1 += arr[i];
    }else{
        sum2 += arr[i];
    }
}

console.log("Tổng các chữ số chẵn là: " +sum1);
console.log("Tổng các chữ số lẻ là: " +sum2);