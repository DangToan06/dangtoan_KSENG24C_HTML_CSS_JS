let arr = [];
let check = false;
let sum = 0;
let n = Number(prompt("Nhập vào số lượng phần tử trong mảng"));
while(isNaN(n)){
    n = Number(prompt("Nhập lại"));
}
if(n === 0){
    console.log("Mảng không có phần tử nào");
}else if(n < 0){
    console.log("Mảng không được chứa số âm");
}else{
    for(let i = 0; i < n; i++){
        arr[i] = prompt("Nhập vào giá trị thứ " + (i+1));
        if(!isNaN(arr[i])){
            check = true;
            sum += Number(arr[i]);
        }
    }
    if(check){
        console.log(sum);
    }
    else{
        console.log("Không có phần tủ nào là số");
    }
}
