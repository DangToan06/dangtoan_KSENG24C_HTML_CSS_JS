let num = Number(prompt("Nhập vào một số"));
let check = 0;

if (num < 2) {
    console.log("Không phải là số nguyên tố");
} else if (num === 2) {
    console.log("Là số nguyên tố");
} else {
    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
        if (num % i === 0) {
            check++;
        }
    }

    if (check === 0) {
        console.log("Là số nguyên tố");
    } else {
        console.log("Không phải là số nguyên tố");
    }
}

