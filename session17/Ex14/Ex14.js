let height = Number(prompt("Hay nhap vao chieu cao"));
let radius = Number(prompt("Hay nhap vao ban kinh"));

const PI = Math.PI;

let Sxq = 2 *PI *radius *height;
let Stp = 2*PI*Math.pow(radius,2) + Sxq;
let V = PI *Math.pow(radius,2)*height;

document.write(
    `Dien tich xung quang hinh tru la: ${Sxq.toFixed(2)} <br>
    Dien tich toan phan hinh tru la: ${Stp.toFixed(2)} <br>
    The tich hinh tru la: ${V.toFixed(2)}`
)