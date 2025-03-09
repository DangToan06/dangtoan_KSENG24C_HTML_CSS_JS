let arr = [];
let arr2 = [];
let check = false;

let n = Number(prompt("Nhập vào dộ dài mảng"));
for (let i = 0; i < n; i++){
    arr[i] = Number(prompt("Nhập số thứ " + (i + 1)));
    while(isNaN(arr[i])){
        arr[i] = Number(prompt("Chuỗi không thỏa mãn vui lòng nhập lại"));
    }
}


let count = 0;
for(let i = 0; i < arr.length; i++){
    if(arr[i] >= 10){
        arr2[count] = arr[i];
        check = true;
        count++;
    }
}

if(check){
    console.log(arr2);
}else{
    console.log("Không có phần tử nào lớn hơn 10");
}