let arr = [];
let n = Number(prompt("Nhập độ dài mảng"));
let min = Infinity;
let check = false;

while (n < 0) {
    n = Number(prompt("Nhập lại"));
}

if (n === 0) {
    console.log("Mảng không chứa phần tử");
} else {
    for (let i = 0; i < n; i++) {
        arr[i] = Number(prompt("Nhập phần tử thứ " +(i+1)));
        if(arr[i] < min){
            min = arr[i];
            check = true;
        }
    }
    if(check){
        console.log("Số nhỏ nhất trong dãy là: " +min);
    }else{
        console.log("Giá trị không hợp lệ");
    }
    
}

