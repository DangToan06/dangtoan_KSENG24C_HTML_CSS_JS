let money = Number(prompt("Nhập vào sô tiền cần rút"));

while(money % 1000 !== 0 || isNaN(money) || money < 1000){
    money = Number(prompt("Số tiền nhập vào không hợp lệ vui lòng nhập lại"));
}

let namTram = 0;
let haiTram = 0;
let motTram = 0;
let namChuc = 0;
let haiChuc = 0;
let motChuc = 0;
let namNghin = 0;
let haiNghin = 0;
let motNghin = 0;

while(money >= 500000){
    money = money - 500000;
    namTram++;
}
while(money >= 200000){
    money = money - 200000;
    haiTram++;
}
while(money >= 100000){
    money = money - 100000;
    motTram++;
}
while(money >= 50000){
    money = money - 50000;
    namChuc++;
}
while(money >= 20000){
    money = money - 20000;
    haiChuc++;
}
while(money >= 10000){
    money = money - 10000;
    motChuc++;
}
while(money >= 5000){
    money = money - 5000;
    namNghin++;
}
while(money >= 2000){
    money = money - 2000;
    haiNghin++;
}
while(money >= 1000){
    money = money - 1000;
    motNghin++;
}

if(namTram > 0){
    console.log(`500.000-${namTram} tờ`);
}
if(haiTram > 0){
    console.log(`200.000-${haiTram} tờ`);
}
if(motTram > 0){
    console.log(`100.000-${motTram} tờ`);
}
if(namChuc > 0){
    console.log(`50.000-${namChuc} tờ`);
}
if(haiChuc > 0){
    console.log(`20.000-${haiChuc} tờ`);
}
if(motChuc > 0){
    console.log(`10.000-${motChuc} tờ`);
}
if(namNghin > 0){
    console.log(`5.000-${namNghin} tờ`);
}
if(haiNghin > 0){
    console.log(`2.000-${haiNghin} tờ`);
}
if(motNghin > 0){
    console.log(`1.000-${motNghin} tờ`);
}