let money = Number(prompt("Nhap so tien gui"));
let months = Number(prompt("Nhap so thang gui"));

let annualInterestRate = parseFloat(4.8 / 100);
let monthlyInterestRate = parseFloat(annualInterestRate / 12);
let interest = money * monthlyInterestRate * months;

let moneyAfter = money + interest;

document.write(`
    so tien truoc lai la: ${money.toLocaleString("vi-VE")}đ <br>
    so tien lai duoc la: ${interest.toLocaleString("vi-VE")}đ <br>
    tong so tien sau khi lai la: ${moneyAfter.toLocaleString("vi-VE")}đ
    `)