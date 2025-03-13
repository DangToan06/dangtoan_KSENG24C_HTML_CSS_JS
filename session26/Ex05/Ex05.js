let arr = [];
let n = Number(prompt("Nhập vào độ dài mảng "));
while(isNaN(n) || n < 0){
    n = Number(prompt("Nhập lại"));
}

if(n === 0){
    console.log("Không có phần tử nào");
}else if(!Array.isArray(arr)){
    console.log("dữ liệu không hợp lệ");
}else{
    enterArray();
    let max = Math.max(...arr);
    let index = arr.indexOf(max);
    console.log("max = " +max);
    console.log("position: " + index);
}

function enterArray() {
    for (let i = 0; i < n; i++) {
        arr[i] = Number(prompt("Nhập vào phần tử thứ " + (i + 1)));
    }
}