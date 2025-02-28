let a = Number(prompt("Nhap vao so thu nhat:"));
let b = Number(prompt("Nhap vao so thu hai:"));
let c = Number(prompt("Nhap vao so thu ba:"));



let delta = parseFloat(Math.pow(b,2) - 4 *a *c);

let x1 = parseFloat((-b + Math.sqrt(delta))/(2*a));
let x2 = parseFloat((-b - Math.sqrt(delta))/(2*a));

document.write(
    `
    x1 = ${x1} <br>
    x2 = ${x2} <br>
    `
)