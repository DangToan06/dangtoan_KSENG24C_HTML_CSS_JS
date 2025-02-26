let number1 = parseInt(prompt("Nhap vao so thu nhat"));
let number2 = parseInt(prompt("Nhap vao so thu hai"));

let max = Math.max(number1,number2);
let min = Math.min(number1,number2);

let random = Math.floor(Math.random() * (max - min + 1)) + min;

document.write(random);