let n = Number(prompt("Nhập vào độ dài mảng"));
while(isNaN(n) || n < 0){
    n = Number(prompt("Nhập vào độ dài mảng"));
}
let arr = [];
let arr2 = [];
let count = 0;
if(n === 0){
    console.log("Không có kí tự số");
}else{
    for(let i = 0; i < n; i++){
        arr[i] = prompt("Nhập vào giá trị thứ " + (i+1));
        if(!isNaN(arr[i])){
            arr2[count] = arr[i];
            count++;
        }
    }
    for(let i = 0; i < arr2.length; i++){
        console.log(arr2[i]);
    }
}