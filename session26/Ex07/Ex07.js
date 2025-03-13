let arr = [];
if (!Array.isArray(arr)) {
    console.log("Dữ liệu không hợp lệ");
} else {
    enterArray();
    let number = arr.filter(evenNumber => {
        if(Math.pow(evenNumber,2) % 2 === 0){
            return evenNumber;
        }
    });
    console.log(number);
}



function enterArray() {
    for (let i = 0; i < 10; i++) {
        arr[i] = Number(prompt("Nhập vào phần tử thứ " + (i + 1)));
    }
}