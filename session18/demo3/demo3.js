let Status = String(prompt("nhap vao trang thai nhan vien"));

let description = Status === "WORKING" ? "dang lam viec" : Status === "ON_LEAVE" ? "Dang nghi phep" : Status === "RESIGNED" ? "Da nghi viec" : Status === "TERMINATED" ? "Bi sa thai" : "khong co mo ta trang thai nay";

console.log(description);