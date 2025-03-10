let menu = `
    1.Nhập mảng
    2.Hiển thị mảng
    3.Tìm phần tử lớn nhất và nhỏ nhất trong mảng
    4.Tính tổng các phần tử trong mảng
    5.Tìm số lần xuất hiện của một phần tử trong mảng
    6.Xắp xếp mảng tăng dần
    7.Thoát chương trình

    nhập lựa chọn của bạn: 
`
let n;
let chose;
let exit = true;
let arr = [];
let max;
let min;
let sum = 0;
let count = 0;
while (exit) {
    chose = Number(prompt(menu));
    switch (chose) {
        case 1:
            n = Number(prompt("Nhập vào độ dài mảng"));
            while (isNaN(n) || n < 0) {
                n = Number(prompt("Nhập lại độ dài mảng"));
            }
            for (let i = 0; i < n; i++) {
                arr[i] = Number(prompt("Nhập vào phần tử thứ " + (i + 1)));
                while (isNaN(arr[i])) {
                    arr[i] = Number(prompt("Nhập lại"));
                }
            }
            break;
        case 2:
            for (let i = 0; i < arr.length; i++) {
                console.log(arr[i]);
            }
            break;
        case 3:
            max = arr[0];
            min = arr[0];
            for (let i = 0; i < arr.length; i++) {
                if (max < arr[i]) {
                    max = arr[i];
                }
                if (min > arr[i]) {
                    min = arr[i];
                }
            }
            console.log("Số lớn nhất là: " + max);
            console.log("Số nhỏ nhất là: " + min);
            break;
        case 4:
            for (let i = 0; i < arr.length; i++) {
                sum += arr[i];
            }
            console.log("Tổng các phần tử trong mảng là: " + sum);
            break;
        case 5:
            let value = Number(prompt("Nhập phần tử muốn đếm"));
            while (isNaN(value)) {
                value = Number(prompt("Nhập lại phần tử muốn đếm"));
            }
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === value) {
                    count++;
                }
            }
            if (count === 0) {
                console.log("phần tử không tồn tại trong mảng");
            } else {
                console.log(` Phần tủ ${value} xuất hiện ${count} lần trong mảng`);
            }
            break;
        case 6:
            for (let i = 0; i < n - 1; i++) {
                for (let j = 0; j < n - i - 1; j++) {
                    if (arr[j] > arr[j + 1]) {
                        let tmp = arr[j + 1];
                        arr[j + 1] = arr[j];
                        arr[j] = tmp;
                    }
                }
            }
            for (let i = 0; i < arr.length; i++) {
                console.log(arr[i]);
            }
            break;
        case 7:
            exit = false;
            break
    }
}