let arr = [];
let count = 0;
let n = Number(prompt("Nhập vào chiều dài mảng"));

while(isNaN(n) || n < 0){
    n = Number(prompt("Nhập lại"));
}

enterArray();
countInteger();

function enterArray() {
    for (let i = 0; i < n; i++) {
        arr[i] = Number(prompt("Nhập vào phần tử thứ: " + (i + 1)));
    }
}

function countInteger(){
    for(let i = 0; i < n; i++){
        if(Number.isInteger(arr[i]) && arr[i] > 0){
            count++;
        }
    }
    if(count !== 0){
        console.log(count);
    }else{
        console.log("không có số nguyên dương trong mảng");
    }
}