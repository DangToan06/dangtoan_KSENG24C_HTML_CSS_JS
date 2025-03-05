let row = Number(prompt("Nhập vào chiều ngang"));
let col = Number(prompt("Nhập vào chiều dọc"));

for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
        if (j === 0 || j === row - 1 || i === 0 || i === col - 1) {
            document.write("*");
        }
        else{
            document.write("&nbsp;&nbsp;")
        }
    }
    document.write(`<br>`);
}