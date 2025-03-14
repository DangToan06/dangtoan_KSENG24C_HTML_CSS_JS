let n = Number(prompt("Nhập độ dài mảng"));
let arr = [];
enterArray();
let spacing = arr[1] - arr[0];
if (!Array.isArray(arr)) {
    console.log("Dữ liệu không hợp lệ");
} else if(arr.length < 2){
    console.log("mảng không hợp lêj");
}else {
    if(isArithmeticProgression()){
        console.log(true);
    }else{
        console.log(false);
    }
}


function enterArray() {
    for (let i = 0; i < n; i++) {
        arr[i] = Number(prompt("Nhập vào phần tử thứ " + (i + 1)));
    }
}

function isArithmeticProgression(){
    for(let i = 1; i < arr.length; i++){
        if(spacing !== arr[i] - arr[i - 1]){
            return false;
        }
    }
    return true;
}