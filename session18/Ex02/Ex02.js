let math = Number(prompt("Nhap diem mon Toan"));
let literature = Number(prompt("Nhap diem mon Van"));
let english = Number(prompt("Nhap diem mon Tieng Anh"));

if (0 <= math && math <= 10 && 0 <= literature && literature <= 10 && 0 <= english && english <= 10) {
    let average = (math + literature + english) / 3;

    if (average >= 8) {
        console.log("Gioi");
    } else if (average >= 6.5) {
        console.log("Khá");
    } else if (average >= 5) {
        console.log("Trung Binh");
    } else {
        console.log("Yeu");
    }
} else {
    console.log("Diem ban nhap vao khong thoa man")
}

