let n = Number(prompt("Nhập vào một số"));

let sum = 0;

if(isNaN(n) || n < 1){
    console.log("Dữ liệu nhập vào không hợp lệ");
}else{
    for(let i = 1; i <= n; i++){
        sum += i;
    }
    console.log("tổng các số từ 1 đến " + n + " là " + sum);
}



