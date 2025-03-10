let menu =`
    1. Nhập chuỗi ký tự
    2. Hiển thị chuỗi ký tự
    3. Đếm số lượng các ký tự là chuỗi và số trong chuỗi ký tự nhập vào
    4. Chuyển đổi các ký tự viết hoa → viết thường, viết thường → viết hoa trong chuỗi.
    5. Trộn lẫn các ký tự của chuỗi gốc với chuỗi thứ 2 người dũng nhập vào. Ví dụ: "Hello", “abcdefg" → “Haeblcldoefg”
    6. Tách chuỗi thành các từ, sắp xếp chúng theo độ dài của từ, từ ngắn nhất đến dài nhất.
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
            arr = str.split("");
            for (let i = 0; i < arr.length; i++) {
                if (isNaN(arr[i])) {
                    count++;
                }
            }
            console.log(`Số lượng ký tự là ${count} và số lượng số là ${arr.length - count}`);
            break;
        case 4:
            arr = str.split("");
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === arr[i].toUpperCase()) {
                    arr[i] = arr[i].toLowerCase();
                } else {
                    arr[i] = arr[i].toUpperCase();
                }
            }
            console.log(arr.join(""));
            break;
        case 5:
            arr = str.split("");
            arr2 = prompt("Nhập chuỗi thứ 2").split("");
            for (let i = 0; i < arr.length; i++) {
                arr3.push(arr[i]);
                arr3.push(arr2[i]);
            }
            console.log(arr3.join(""));
            break;
        case 6:
            arr = str.split(" ");
            arr.sort((a, b) => a.length - b.length);
            console.log(arr);
            break;
        case 7:
            exit = false;
            break;
    }
}
