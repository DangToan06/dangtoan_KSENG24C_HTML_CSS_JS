let r = Number(prompt("Nhap vao ban kinh hinh cau"));

const PI = Math.PI;

let V = (4 * PI * Math.pow(r,3))/(3);
let S = 4 * PI * Math.pow(r,2);
let C = 2 * PI * r;

document.write(
    `The tich hinh ca la: ${V.toFixed(2)} <br>
    Dien tich hinh cau la: ${S.toFixed(2)} <br>
    chu vi lon nhat cua hinh cau la: ${C.toFixed(2)}`
)