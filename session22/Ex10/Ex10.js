let chose;
let menu =
    `
    MENU
    1. Nhập vào mảng
    2. Hiển thị mảng
    3. Thêm phần tử
    4. Sửa phần tử
    5. Xóa phần tử
    6. Thoát

    Nhập lựa chọn của bạn:
`
let array = [];
let n;
let position;
let value;
do {
    chose = Number(prompt(menu));
    while (chose < 1 || chose > 6 || isNaN(chose)) {
        chose = Number(prompt("Lựa chọn không thỏa mãn.Vui lòng nhập lại lựa chọn của bạn"));
    }
    switch (chose) {
        case 1:
            n = Number(prompt("Nhập số lượng phần tử"));
            for (let i = 0; i < n; i++) {
                array[i] = prompt("Nhập phần tử thứ " + (i + 1));
            }
            break;
        case 2:
            console.log("Các phần tử trong mảng");
            console.log(array);
            break;
        case 3:
            position = Number(prompt("Nhaapoj vị trí bạn muốn thêm"));
            while(isNaN(position) || position <= 0){
                position = Number(prompt("Vị trí không hợp lệ vui lòng nhập lại"));
            }
            value = prompt("Nhập phần tử bạn muốn thêm");
            array.splice(position-1,0,value);
            break;
        case 4:
            position = Number(prompt("Nhaapoj vị trí bạn muốn sửa"));
            while(isNaN(position) || position <= 0){
                position = Number(prompt("Vị trí không hợp lệ vui lòng nhập lại"));
            }
            value = prompt("Nhập phần tử bạn muốn sửa");
            array.splice(position-1,1,value);
            break;
        case 5:
            position = Number(prompt("Nhaapoj vị trí bạn muốn xóa"));
            while(isNaN(position) || position <= 0){
                position = Number(prompt("Vị trí không hợp lệ vui lòng nhập lại"));
            }
            array.splice(position-1,1);
            break;
    }
} while (chose !== 6);




