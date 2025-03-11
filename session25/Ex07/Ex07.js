function capitalizeFirstLetter(str) {
    let arr = str.split(" ");
    let result = "";
    for (let i = 0; i < arr.length; i++) {
        result += arr[i].charAt(0).toUpperCase() + arr[i].slice(1) + " ";
    }
    return result.trim();
}

let str = String(prompt("Nhập vào một chuỗi"));
console.log(capitalizeFirstLetter(str));