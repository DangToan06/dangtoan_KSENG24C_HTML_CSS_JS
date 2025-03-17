class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
}

let users = [];
let menu = `
------ MENU ------
1. Đăng ký người dùng mới.
2. Đăng nhập.
3. Thoát.
Mời bạn chọn:`;

let choice;

while (choice !== 3) {
    choice = Number(prompt(menu));
    switch (choice) {
        case 1:
            let name = prompt("Nhập vào tên người dùng");
            let email = prompt("Nhập vào email người dùng");
            let password = prompt("Nhập vào mật khẩu người dùng");
            users.push(new User(name, email, password));
            break;
        case 2:
            let loginEmail = prompt("Nhập vào email người dùng");
            let loginPassword = prompt("Nhập vào mật khẩu người dùng");
            let loginIndex = search("email", loginEmail);
            if (loginIndex === -1) {
                console.log("Email không tồn tại");
            } else {
                if (users[loginIndex].password === loginPassword) {
                    console.log("Đăng nhập thành công");
                } else {
                    console.log("Mật khẩu không chính xác");
                }
            }
            break;
    }
}

function search(key, value) {
    for (let i = 0; i < users.length; i++) {
        if (users[i][key] === value) {
            return i;
        }
    }
    return -1;
}
