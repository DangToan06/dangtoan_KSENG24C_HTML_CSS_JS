let number = Number(prompt("Nhap vao mot so bat ki"));

switch (number) {
    case 0:
        letter = "Không";
        break;
    case 1:
        letter = "Một";
        break;
    case 2:
        letter = "Hai";
        break;
    case 3:
        letter = "Ba";
        break;
    case 4:
        letter = "Bốn";
        break;
    case 5:
        letter = "Năm";
        break;
    case 6:
        letter = "Sáu";
        break;
    case 7:
        letter = "Bảy";
        break;
    case 8:
        letter = "Tám";
        break;
    case 9:
        letter = "Chín";
        break;
    default:
        console.log("Khong ton tai trong he thong");
}

console.log("Số " + letter);