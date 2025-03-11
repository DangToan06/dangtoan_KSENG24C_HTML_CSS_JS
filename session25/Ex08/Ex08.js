function isStrongPassword(password){
    let check = false;
    let check2 = false;
    let check3 = false;
    let check4 = false;
    if(password.length >= 8){
        check = true;
    }
    for(let i = 0; i < password.length; i++){
        if(password[i] >= 'A' && password[i] <= 'Z'){
            check2 = true;
        }
        if(password[i] >= 'a' && password[i] <= 'z'){
            check3 = true;
        }
        if(!isNaN(password[i])){
            check4 = true;
        }
    }
    if(check && check2 && check3 && check4){
        return true;
    }else{
        return false;
    }
}

let password = prompt("Nhập vào mật khẩu");
if(isStrongPassword(password)){
    console.log("Mật khẩu hợp lệ");
}
else{
    console.log("Mật khẩu không hợp lệ");
}

