let menu =
    `
    1. Nhập chuỗi
    2. Hiển thị chuỗi
    3. Tính độ dài chuỗi
    4. Đếm số lần xuất hiên của một ký tự (người dùng nhập) trong chuỗi
    5. Kiểm tra chuỗi có phải chuỗi đối xứng không
    6. Chuyển đổi chuỗi thành chữ in hoa các kí tự đàu tiên của từ
    7. Thoát chương trình
`
let str;
let chose;
let exit = true;
let char;
let count = 0;
let length;
let reverseStr;
let newStr;
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
            length = str.length;
            console.log("Độ dài chuỗi là: " + length);
            break;
        case 4:
            char = prompt("Nhập kí tự bạn muốn đếm");
            for (let i = 0; i < str.length; i++) {
                if (str[i] === char) {
                    count++;
                }
            }
            console.log(`Kí tự ${char} xuất hiện ${count} lần`);
            break;
        case 5:
            reverseStr = str.split("").reverse().join("");
            if (str === reverseStr) {
                console.log("Chuỗi đối xứng");
            } else {
                console.log("Chuỗi không đối xứng");
            }
            break;
        case 6:
            newStr = str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
            console.log(newStr);
            break;
        case 7:
            exit = false;
            break;
    }
}