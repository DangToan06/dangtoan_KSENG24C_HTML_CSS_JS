let n = Number(prompt("Hãy Nhập vao  một số"));
let temp = n;
let m = 0;

if(isNaN(n) || n < 1){
    console.log("Dữ liệu nhập vào không hợp lệ");
}else{
    while(n !== 0){
        m = m * 10 + n % 10;
        n = Math.floor(n / 10);
    }
    if(temp === m){
        console.log("Đây là số đối xứng");
    }else{
        console.log("Đây không phải số đối xứng");
    }
}
