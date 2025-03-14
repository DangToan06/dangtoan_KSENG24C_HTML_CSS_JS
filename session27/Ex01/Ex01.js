let menu = `
    1. Cộng hai số
    2. Trừ hai số
    3. Nhân hai số
    4. Chi hai số
    5. Thoát

    Nập lựa chọn của bạn
`

let exit = true;
let number1;
let number2;

while (exit) {
    number1 = Number(prompt("Nhập vào số thứ nhất"));
    while(isNaN(number1)){
        number1 = Number(prompt("Nhập lại"));
    }
    number2 = Number(prompt("Nhập vào số thứ 2"));
    while(isNaN(number2)){
        number2 = Number(prompt("Nhập lại"));
    }
    let chose = Number(prompt(menu));
    switch (chose) {
        case 1:
            console.log(total(number1, number2));
            break;
        case 2:
            console.log(signal(number1, number2));
            break;
        case 3:
            console.log(multiply(number1, number2));
            break;
        case 4:
            console.log(divide(number1, number2));
            break;
        case 5:
            exit = false;
            break;
        default:
            console.log("Lựa chọn không thỏa m");
            break;
    }
}

function total(num1, num2){
    return num1 + num2;
}

function signal(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}