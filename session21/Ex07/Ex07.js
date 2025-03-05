let moneyAfter = Number(prompt("Nhập số tiền gửi"));
while(moneyAfter <= 0 || isNaN(moneyAfter)){
    moneyAfter = Number(prompt("Số tiền không hộp lệ vui lòng nhập lại"));
}
let interstRate = Number(prompt("Nhập vào lãi xuất"));
while(interstRate <= 0 || isNaN(interstRate)){
    interstRate = Number(prompt("Lãi suất không hộp lệ vui lòng nhập lại"));
}
let months = Number(prompt("Nhập vào số tháng gửi"));
while(months <= 0 || isNaN(months)){
    months = Number(prompt("Tháng không hộp lệ vui lòng nhập lại"));
}

let interstMoney = 0;
let moneyBefore = 0;

moneyBefore = moneyAfter*Math.pow((1 + interstRate/100),months);
interstMoney = moneyBefore - moneyAfter;

console.log("Tiền lãi là: " + interstMoney.toFixed(3));
console.log("Tiền nhận được là: " + moneyBefore.toFixed(3));