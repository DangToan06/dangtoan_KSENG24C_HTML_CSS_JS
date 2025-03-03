let months = Number(prompt("Nhap so thang trong nam"));

switch (months) {
    case 1:
    case 2:
    case 3:
        console.log("mua xuan");
        break;
    case 4:
    case 5:
    case 6:
        console.log("mua ha");
        break;
    case 7:
    case 8:
    case 9:
        console.log("mua thu");
        break;
    case 10:
    case 11:
    case 12:
        console.log("mua dong");
        break;
    default:
        console.log("thang khong hop le");
}
