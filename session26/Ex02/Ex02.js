let arr = [];
let n = Number(prompt("Nhập vào độ dài mảng"));

let arr2 = [];

if(n <= 0){
    console.log("Mảng không có phần tử nào");
}else{
    enterArray();
        arr2 = arr.filter(function(element, index){
            return element.length > 5;
        })
        if(arr2.length !== 0){
            printArray();
        }else{
            console.log("Mảng không có phần tử nào");
        }
    
}

function enterArray(){
    for(let i = 0; i < n; i++){
        arr[i] = prompt("Nhập vào phần tử thứ " +(i+1));
    }
}

function printArray(){
    for(let index in arr2){
        console.log(arr2[index]);
    }
}

