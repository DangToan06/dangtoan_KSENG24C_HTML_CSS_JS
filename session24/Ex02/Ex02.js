let menu = `
    1.Nhập mảng
    2.Hiển thị mảng
    3.Tìm phần tử chẵn lẻ
    4.Tính trung bình cộng của mảng
    5.Xóa phần tủ tại vị trí chỉ định
    6.Tìm phần tủ lớn thứ hai trong mảng
    7.Thoát chương trình

    nhập lựa chọn của bạn: 
`
let n;
let chose;
let exit = true;
let arr = [];
let sum = 0;
let chan = "";
let le = "";
let position;
let max1;
let max2;
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
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] % 2 === 0) {
                    chan = chan + String(arr[i]) + " ";
                } else {
                    le = le + String(arr[i]) + " ";
                }
            }

            console.log("Các phần tử chẵn là: " + chan);
            console.log("Các phần tủ lẻ là: " + le);
            break;
        case 4:
            for (let i = 0; i < arr.length; i++) {
                sum += arr[i];
            }
            console.log("Trung bình cộng các phần tử trong mảng là: " + (sum / arr.length));
            break;
        case 5:
            position = Number(prompt("Nhập vị trí bạn muốn xóa"));
            while (isNaN(position) || position < 0 || position > arr.length) {
                position = Number(prompt("Vị trí không hợp lệ vui lòng nhập lại"));
            }
            arr.splice(position - 1, 1);
            break;
        case 6:
            max1 = arr[0];
            max2 = arr[0];
            for(let i = 0; i < arr.length; i++){
                if(arr[i] > max1){
                    max2 = max1;
                    max1 = arr[i];
                }
                if(arr[i] > max2 && arr[i] !== max1){
                    max2 = arr[i];
                }
            }
            console.log("Số lớn thứ 2 là: " +max2);
            break;
        case 7:
            exit = false;
            break;
    }
}