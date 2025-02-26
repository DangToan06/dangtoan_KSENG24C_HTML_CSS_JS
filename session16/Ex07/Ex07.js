let math = parseFloat(prompt("Nhap diem mon 1"));
let physics = parseFloat(prompt("Nhap diem mon 2"));
let chemistry = parseFloat(prompt("Nhap diem mon 3"));

let average = parseFloat(((math + physics + chemistry)/3)).toFixed(2);

document.write(average);