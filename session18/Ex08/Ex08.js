let a = Number(prompt("Nhap canh thu nhat"));
let b = Number(prompt("Nhap canh thu 2"));
let c = Number(prompt("Nhap canh thu 3"));

if (a + b > c && a + c > b && b + c > a) {
    if (a === b && b === c) {
        console.log("Day la tam giac deu");
    } else if (a === b || a === c || b === c) {
        console.log("Day la tam giac can");
    } else if (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2) || Math.pow(a, 2) + Math.pow(c, 2) === Math.pow(b, 2) || Math.pow(c, 2) + Math.pow(b, 2) === Math.pow(a, 2)) {
        console.log("Day la tam giac vuong");
    } else {
        console.log("Day la tam giac thuong");
    }
} else {
    console.log("Day khong phai tam giac");
}