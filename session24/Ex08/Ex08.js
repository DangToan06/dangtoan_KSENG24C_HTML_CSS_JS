let menu = `
    1. Nhập chuỗi ký tự
    2. Hiển thị chuỗi ký tự
    3. Tìm tất cả các từ con trùng lặp trong chuỗi và số lần xuất hiện
    4. Tìm các từ có độ dài lớn nhất và nhỏ nhất trong chuỗi
    5. Tìm số lần xuất hiện nhiều nhất của các ký tự trong chuỗi
    6. Chuyển đổi chuỗi ký tự thành dạng snake_case
    7. Thoát chương trình
`
let str;
let chose;
let exit = true;
let arr = [];
let arr2 = [];
let arr3 = [];
let arr4 = [];
let arr5 = [];
let count = 0;
let max;
let min;
let maxCount = 0;
let maxChar;
let snakeCase;
while (exit) {
    chose = Number(prompt(menu));
    switch (chose) {
        case 1:
            str = prompt("Nhập chuỗi");
            break;
        case 2:
            console.log(str);
            break;
        case 3:
            arr = str.split(" ");
            for (let i = 0; i < arr.length; i++) {
                count = 0;
                for (let j = 0; j < arr.length; j++) {
                    if (arr[i] === arr[j]) {
                        count++;
                    }
                }
                if (count > 1) {
                    arr2.push(arr[i]);
                }
            }
            console.log(arr2);
            break;
        case 4:
            arr3 = str.split(" ");
            max = arr3[0];
            min = arr3[0];
            for (let i = 0; i < arr3.length; i++) {
                if (arr3[i].length > max.length) {
                    max = arr3[i];
                }
                if (arr3[i].length < min.length) {
                    min = arr3[i];
                }
            }
            console.log(`Từ dài nhất là ${max} và từ ngắn nhất là ${min}`);
            break;
        case 5:
            arr4 = str.split("");
            for (let i = 0; i < arr4.length; i++) {
                count = 0;
                for (let j = 0; j < arr4.length; j++) {
                    if (arr4[i] === arr4[j]) {
                        count++;
                    }
                }
                if (count > maxCount) {
                    maxCount = count;
                    maxChar = arr4[i];
                }
            }
            console.log(`Ký tự xuất hiện nhiều nhất là ${maxChar} với số lần xuất hiện là ${maxCount}`);
            break;
        case 6:
            snakeCase = str.split(" ").join("_");
            console.log(snakeCase);
            break;
        case 7:
            exit = false;
            break;
    }
}
