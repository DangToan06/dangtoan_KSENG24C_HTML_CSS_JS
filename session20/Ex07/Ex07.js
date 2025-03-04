let num = Number(prompt("Nhập vào một số"));
let fibo1 = 1;
let fibo2 = 1;
let temp = 0;
if(isNaN(num) || num < 1){
    console.log("Không hợp lệ");
}else{
    if(num <= 1){
        console.log("1");
    }else if(num >= 2){
        console.log("1");
        console.log("1");
    }
    for(i = 0; i < num - 2; i++){
        temp = fibo2;
        fibo2 = fibo1 + fibo2;
        fibo1 = temp;
        console.log(fibo2);
    }
}