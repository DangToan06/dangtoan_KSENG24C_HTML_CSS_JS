let num = Number(prompt("Nhap vao 1 so"));

let numSqrt = Math.sqrt(num);

let d = Number.isInteger(numSqrt) ?  " la so chinh phuong" :  " khong phai so chinh phuong";

document.write(d);