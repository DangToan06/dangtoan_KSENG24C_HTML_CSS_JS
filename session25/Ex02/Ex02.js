let number1 = Number(prompt("Nhập vào giá trị thứ nhất"));
let number2 = Number(prompt("Nhập vào giá trị thứ 2"));

if(Number.isInteger(number1) && Number.isInteger(number2)){
    let sum = (a, b) => a + b;
    console.log(sum(number1,number2));
}else{
    console.log("Giá trị không hợp lệ");
}