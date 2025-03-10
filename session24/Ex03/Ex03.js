let menu = `
    1.Nhập mảng
    2.Hiển thị mảng
    3.Tìm phần lớn nhất và in ra chỉ số
    4.Tính trung bình cộng các số dương trong mảng
    5.Đảo ngược mảng
    6.Kiểm tra mảng có đối xứng
    7.Thoát chương trình

    nhập lựa chọn của bạn: 
`
let n;
let chose;
let exit = true;
let arr = [];
let arr2 = [];
let sum = 0;
let max;
let index;
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
            let max = arr[0];
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > max) {
                    max = arr[i];
                    index = i;
                }
            }
            console.log(`Phần tử lớn nhất trong mảng là ${max} chỉ số của nó là ${index}`);
            break;
        case 4:
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > 0) {
                    sum += arr[i];
                }
            }
            console.log("Trung bình cộng và tổng các số dương trong mảng là: " + (sum / arr.length) + "và" + sum);
            break;
        case 5:
            arr2 = arr.reverse();
            console.log(arr2);
            break;
        case 6:
            arr2 = arr.reverse();
            let check = true;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] !== arr2[i]) {
                    check = false;
                    break;
                }
            }
            if (check) {
                console.log("Đây là mảng đối xứng");
            } else {
                console.log("Mảng không đối xứng");
            }
            break;
        case 7:
            exit = false;
            break;
    }
}