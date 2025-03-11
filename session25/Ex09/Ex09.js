let users = [];

function checkEmail(email){
    if(email.includes("@") && (email.endsWith(".com") || email.endsWith(".vn"))){
        return true;
    }
    return false;
}

function checkExist(email){
    for(let i = 0; i < users.length; i++){
        if(users[i] === email){
            return true;
        }
    }
    return false;
}

function register(){
    let email = prompt("Nhập vào email muốn đăng ký");
    if(checkEmail(email)){
        if(checkExist(email)){
            console.log("Tài khoản đã tồn tại");
        }else{
            users.push(email);
            console.log("Đăng ký thành công");
        }
    }else{
        console.log("Email không hợp lệ");
    }
}


register();
console.log(users);
