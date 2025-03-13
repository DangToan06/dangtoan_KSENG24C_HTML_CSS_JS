let arr = [];
let n = Number(prompt("Nhập vào độ dài mảng"))
while (isNaN(n) || n < 0) {
    n = Number(prompt("Nhập vào dộ dài mảng"));
}
let prime;
if (n === 0) {
    console.log("mảng không có phần tử nào");
} else if (!Array.isArray(arr)) {
    console.log("Dữ liệu không hợp lệ");
} else {
    enterArray();
    let dateFormat = arr.map(dateStr => {
        let date = new Date(dateStr);
        if (isNaN(date.getTime())) {
            return "Dữ liệu không hợp lệ";
        }
        
        let day = String(date.getDate()).padStart(2, '0');
        let month = String(date.getMonth() + 1).padStart(2, '0');
        let year = date.getFullYear();
        
        return `${day}/${month}/${year}`;
    });
    console.log(dateFormat);
}



function enterArray() {
    for (let i = 0; i < n; i++) {
        arr[i] = prompt("Nhập vào phần tử thứ " + (i + 1));
    }
}