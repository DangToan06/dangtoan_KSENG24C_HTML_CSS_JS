let date1 = prompt("Nhap ngay thang nam 1");
let date2 = prompt("Nhap ngay thnag nam 2");

let date = new Date(date2) - new Date(date1);

let d = (parseInt(date) / (1000 *60 *60 *24));

alert("Do chenh lenh la: " + Math.ceil(Math.abs(d)));