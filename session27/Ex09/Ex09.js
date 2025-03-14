let arr = [];
let n = Number(prompt("Nhập vào độ dài mảng"));
enterArray();
sortEven();

function sortEven() {
    let even = arr.filter((temp) => temp % 2 === 0).sort((a, b) => a - b);
    let i = 0;
    let b = arr.map((temp) => (temp % 2 === 0 ? even[i++] : temp));
    return console.log(`${arr.join(" ")} => ${b.join(" ")}`);
}

function enterArray() {
    for (let i = 0; i < n; i++) {
        arr[i] = Number(prompt("Nhập vào phần tử thứ " + (i + 1)));
    }
}