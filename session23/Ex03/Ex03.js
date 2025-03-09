let n = Number(prompt("Nhập vào độ dài mảng"));
while(isNaN(n)){
    n = Number(prompt("Nhập vào độ dài mảng"));
}
let arr = [];
let count = 0;

if(n === 0){
    console.log("Mảng không có phần tử");
}else if(n < 0){
    console.log("Số lượng phần tử không hợp lệ");
}else{
    for(let i = 0; i < n ; i++){
        arr[i] = Number(prompt("Nhập phần tử thứ " +(i + 1)));
        if(Number.isInteger(Math.abs(arr[i])) && arr[i] < 0){
            count++;
        }
    }
    console.log(count);
}
