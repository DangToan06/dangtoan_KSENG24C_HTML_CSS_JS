let num = Number(prompt("Nhập vào một so (0 -> 999)"));
let number = "";

if ( num < 0 || num > 999 || isNaN(num)) {
    console.log("Số bạn nhập vao không hợp lệ");
} else if (num === 0) {
    console.log("Không")
} else {
    let hangTram = Math.floor(num / 100);
    let hangChuc = Math.floor((num % 100) / 10);
    let hangDonVi = num % 10;

    if (hangTram > 0) {
        if (hangTram === 1) {
            number += "một trăm";
        } else if (hangTram === 2) {
            number += "hai trăm";
        } else if (hangTram === 3) {
            number += "ba trăm";
        } else if (hangTram === 4) {
            number += "bốn trăm";
        } else if (hangTram === 5) {
            number += "năm trăm";
        } else if (hangTram === 6) {
            number += "sau trăm";
        } else if (hangTram === 7) {
            number += "bảy trăm";
        } else if (hangTram === 8) {
            number += "tám trăm";
        } else if (hangTram === 9) {
            number += "chín trăm";
        }
    }

    if (hangChuc > 0) {
        if (hangChuc === 1) {
            number += " mười";
        } else if (hangChuc === 2) {
            number += " hai mươi";
        } else if (hangChuc === 3) {
            number += " ba mươi";
        } else if (hangChuc === 4) {
            number += " tư mươi";
        } else if (hangChuc === 5) {
            number += " năm mươi";
        } else if (hangChuc === 6) {
            number += " sau mươi";
        } else if (hangChuc === 7) {
            number += " bảy mươi";
        } else if (hangChuc === 8) {
            number += " tám mươi";
        } else if (hangChuc === 9) {
            number += " chín mươi";
        }
    } else if (hangTram > 0 && hangDonVi > 0) {
        number += " lẻ";
    }

    if (hangDonVi > 0) {
        if (hangDonVi === 1 && hangChuc > 1) {
            number += " mốt";
        } else if (hangDonVi === 2) {
            number += " hai";
        } else if (hangDonVi === 3) {
            number += " ba";
        } else if (hangDonVi === 4) {
            number += " tư";
        } else if (hangDonVi === 5 && hangChuc > 0) {
            number += " lăm";
        } else if (hangDonVi === 6) {
            number += " sáu";
        } else if (hangDonVi === 7) {
            number += " bảy";
        } else if (hangDonVi === 8) {
            number += " tám";
        } else if (hangDonVi === 9) {
            number += " chín";
        } else if (hangDonVi === 1) {
            number += " một";
        } else if (hangDonVi === 5) {
            number += " năm";
        }
    }
}

console.log(number);
