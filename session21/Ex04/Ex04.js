let a = Number(prompt("Nhap vao so thu nhat"));
while(isNaN(a)){
    a = Number(prompt("Vui lòng nhập lại số thứ nhất"));
}
let b = Number(prompt("Nhap vao so thu 2"));
while(isNaN(b)){
    b = Number(prompt("Vui lòng nhập lại số thứ 2"));
}
let c = Number(prompt("Nhap vao so thu 3"));
while(isNaN(c)){
    c = Number(prompt("Vui lòng nhập lại số thứ 3"));
}

let delta;

let x1, x2;

if (a === 0) {
    if(b === 0){
        console.log("phuong trinh vo nghiem")
    }else{
        console.log("phuong trinh co mot nghiem: " + (-c / b));
    }
} else {
    delta = Math.pow(b, 2) - 4 * a * c;
    if (delta > 0) {
        x1 = (-b + Math.sqrt(delta)) / (2 * a);
        x2 = (-b - Math.sqrt(delta)) / (2 * a);
        console.log(`phuong trinh co hai nghiem: ${x1} ; ${x2}`);
    } else if (delta === 0) {
        console.log("phuong trinh co mot nghiem kep: " + (-b / (2 * a)));
    } else {
        console.log("phuong trinh vô nghiệm");
    }
}