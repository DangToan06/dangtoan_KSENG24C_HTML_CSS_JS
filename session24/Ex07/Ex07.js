let menu = `
    1.Nhập Chuỗi
    2.Hiển thị Chuỗi
    3.Loại bỏ các khảng trắng ở đầu và ở cuối Chuỗi
    4.Đảo ngược chuỗi kí tự
    5.Đếm số lượng từ trong chuỗi kí tự
    6.Tìm kiếm và thay thế các ký tự (Do người dùng nhập vào) trong chuỗi gốc. Ví dụ người dùng nhập “e”, chuỗi gốc “Hello” → Tìm thấy ký tự. Cho người dùng nhập vào ký tự thay thế “o” → Output: “Hollo”
    7.Thoát chương trình
`
let str;
let chose;
let exit = true;
let newStr;
let count;
let char;
let replaceChar;
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
            newStr = str.trim();
            console.log(newStr);
            break;
        case 4:
            newStr = str.split("").reverse().join("");
            console.log(newStr);
            break;
        case 5:
            count = str.split(" ").length;
            console.log(count);
            break;
        case 6: 
            char = prompt("Nhập kí tự bạn muốn tìm");
            replaceChar = prompt("Nhập kí tự bạn muốn thay thế");
            newStr = str.split(char).join(replaceChar);
            console.log(newStr);
            break;
        case 7:
            exit = false;
            break;
    }
}