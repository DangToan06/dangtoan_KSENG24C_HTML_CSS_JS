let code = Number(prompt("Nhap vao HTTP"));

switch (code) {
    case 200:
        console.log("Thanh cong");
        break;
    case 201:
        console.log("Them thanh cong");
        break;
    case 400:
        console.log("Loi request");
        break;
    case 404:
        console.log("Loi khong tim thay");
        break;
    case 500:
        console.log("Loi sever");
        break;
    default:
        console.log("error");
}