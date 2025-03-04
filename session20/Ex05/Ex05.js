let a = Number(prompt("Nhập vào một số"));
let b = Number(prompt("Nhập vào độ dài của chuỗi đó"));
let product = 1;

if(isNaN(a) || isNaN(b)){
    console.log("Không hợp lệ");
}else{
    for(let i = 0; i < b; i++){
        product *= a;
    }
    console.log(product);
}