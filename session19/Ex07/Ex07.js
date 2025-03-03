let a = Number(prompt("Vui long nhap so thu 1"));
let b = Number(prompt("Vui long nhap so thu 2"));
let c = Number(prompt("Vui long nhap so thu 3"));

let max = a;

if (b > max) {
    max = b;
}

if (c > max) {
    max = c;
}

console.log("So lon nhat trong 3 so la: " + max);

