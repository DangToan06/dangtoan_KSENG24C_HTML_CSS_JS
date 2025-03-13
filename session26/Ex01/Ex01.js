let arr = [];
let n = Number(prompt("Nhập vào độ dài mảng"));
let check = false;
let arr2 = [];

if(n <= 0){
    console.log("Mảng không có phần tử nào");
}else{
    enterArray();
    if(checkArray()){
        arr2 = arr.filter(function(element, index){
            return element > 10;
        })
        if(arr2.length !== 0){
            printArray();
        }else{
            console.log("Mảng không có phần tử nào");
        }
    }else{
        console.log("Dữ liệu không hợp lệ");
    }
}

function enterArray(){
    for(let i = 0; i < n; i++){
        arr[i] = Number(prompt("Nhập vào phần tử thứ " +(i+1)));
    }
}

function checkArray(){
    for(let i = 0; i < n; i++){
        if(!isNaN(arr[i])){
            return true;
        }
    }
}

function printArray(){
    for(let index in arr2){
        console.log(arr2[index]);
    }
}