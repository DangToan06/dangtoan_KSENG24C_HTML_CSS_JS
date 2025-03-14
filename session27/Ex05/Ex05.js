let arr = [];
let arr2 = [];

let n = Number(prompt("Nhập vào độ dài mảng"));
for (let i = 0; i < n; i++) {
    arr[i] = prompt("Nhập phần tử thứ " + (i + 1));
}

let cut = Number(prompt("Nhập độ dài muốn cắt"));

let count = 0;

for (i = 0; i < arr.length / cut; i++) {
    arr2[i] = arr.slice(count, count + cut);
    count = count + cut;
}

console.log(arr2);