let menu = `
    1. Tính diện tích hình tròn.
    2. Tính chu vi hình tròn.
    3. Tính diện tích hình chữ nhật.
    4. Tính chu vi hình chữ nhật.
    5. Thoát.

    Nhập vào sự lựa chọn của bạn
`

let exit = true;

while (exit) {
    let chose = Number(prompt(menu));
    switch (chose) {
        case 1:
            circularArea();
            break;
        case 2:
            circleCircumference();
            break;
        case 3:
            rectangleArea();
            break;
        case 4:
            rectanglePerimetet();
            break;
        case 5:
            exit = false;
            break;
        default :
            console.log("Lựa chọn không hợp lệ");
            break;
    }
}

function circularArea (){
    let r = Number(prompt("Nhập vào bán kính"));
    console.log((Math.PI*Math.pow(r,2)).toFixed(2));
}

function circleCircumference (){
    let r = Number(prompt("Nhập vào bán kính"));
    console.log((2*Math.PI*r).toFixed(2));
}

function rectangleArea (){
    let a = Number(prompt("Nhập vào chiều rộng"));
    let b = Number(prompt("Nhập vào chiều cao"));
    console.log(a * b);
}

function rectanglePerimetet (){
    let a = Number(prompt("Nhập vào chiều rộng"));
    let b = Number(prompt("Nhập vào chiều cao"));
    console.log((a + b)*2);
}