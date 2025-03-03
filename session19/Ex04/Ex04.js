let num = Number(prompt("Nhap vao mot so"));

if (num % 3 === 0 && num % 5 === 0) {
    console.log(num + " chia hết cho cả 3 và 5");
} else if (num % 3 === 0) {
    console.log(num + " chi chia het cho 3 va khong chia het cho 5");
} else if (num % 5 === 0) {
    console.log(num + " chi chia hết cho 5 va khong chia het cho 3");
} else {
    console.log(num + " khong chia het cho ca 3 va 5");
}