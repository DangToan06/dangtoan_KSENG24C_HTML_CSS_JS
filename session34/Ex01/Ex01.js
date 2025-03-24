let signUp = document.getElementById("sign");
let emailNoValid = document.getElementById("emailValue");
let passNovalid = document.getElementById("passwdValue");
let rePassword = document.getElementById("re-passwdValue");

signUp.addEventListener("click", function () {
    let emailValue = document.getElementById("email").value;
    if(validEmail(emailValue)){
        emailNoValid.innerHTML = `
        <p id="emailValue" style="display: flex;">${"Email cannot blank or  wrong format!!!"}</p>`
        emailNoValid.style.display = "flex";
    }else{
        emailNoValid.style.display = "none";
    }
    
    let passwdValue = document.getElementById("passwd").value;
    if(validPasswd(passwdValue)){
        passNovalid.innerHTML = `
        <p id="passwdValue" style="display: flex;">Pasword cannot blank !!</p>`
        passNovalid.style.display = "flex";
    }else{
        passNovalid.style.display = "none";
    }

    let confiPasswdValue = document.getElementById("re-passwd").value;
    if(confirmPassword(passwdValue, confiPasswdValue)){
        rePassword.innerHTML = `
        <p id="re-passwdValue" style="display: flex; color: red;">Password not match</p>`
        rePassword.style.display = "flex";
    }else{
        rePassword.style.display = "none";
        localStorage.setItem("Email", emailValue);
        localStorage.setItem("Password", confiPasswdValue);
    }
    if(!validEmail(emailValue) && !confirmPassword(passwdValue, confiPasswdValue)){
        alert("Tài khoản được tạo thành công");
    }
});

function validEmail(email) {
    if (email === "") {
        return 1;
    }
    let regex = /^[a-zA-z0-9._%+-]+@[a-zA-Z0-9]+\.(com|vn)$/;
    if (!regex.test(email)){
        return 1;
    }
}

function validPasswd(passwd){
    if(passwd = ""){
        return 1;
    }
}

function confirmPassword(passwd, valuePasswd){
    if(passwd !== valuePasswd){
        return 1;
    }
}