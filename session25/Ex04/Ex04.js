function checkPrimeNumber(number){
    if(number === 1){
        return false;
    }
    if(number === 2){
        return true;
    }

    for(let i = 2; i <= Math.sqrt(number); i++){
        if(number % i === 0){
            return false;
        }
    }
    return true;
}

let n = Number(prompt("Nhập vào một số"));

if(isNaN(n) || n < 0){
    console.log("Dữ liệu không hợp lệ");
}else{
    if(checkPrimeNumber(n)){
        console.log("là số nguyên tố");
    }else{
        console.log("không phải là số nguyên tố");
    }
}