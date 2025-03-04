let n = Number(prompt("Nhập vào một số"));

if(isNaN(n) || n < 1){
    console.log("Dữ liệu nhập vào không hợp lệ");
}else{
    console.log("Các số chia hết cho 5 là:");
    for(let i = 1; i <= n; i++){
        if(i % 5 === 0){
            console.log(i);
        }
    }
}
