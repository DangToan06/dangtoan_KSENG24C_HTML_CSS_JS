let emailArray = [];
let n = Number(prompt("Nhập vào đọ dài mảng"));
while (isNaN(n) || n < 0) {
    n = Number(prompt("Nhập vào đọ dài mảng"));
}

let valiEmail;

if (n === 0) {
    console.log("Mảng không có phần tử nào");
} else {
    enterArray();
    valiEmail = emailArray.filter((email) => email.includes("@") && !email.includes(` `));
    console.log(valiEmail);
}


function enterArray() {
    for (let i = 0; i < n; i++) {
        emailArray[i] = prompt("Nhập vào phần tử thứ " + (i + 1));
    }
}


