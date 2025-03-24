let signUp = document.getElementById("sign");
let emailNoValid = document.getElementById("emailValue");
let passNovalid = document.getElementById("passwdValue");
let btnSignUp = document.getElementById("signUp");

btnSignUp.addEventListener("click", function () {
    setTimeout(() => {
        window.location.href = "http://127.0.0.1:5502/session34/Ex01/Ex01.html";
    }, 1000);
});

signUp.addEventListener("click", function () {
    let emailValue = document.getElementById("email").value;
    if (validEmail(emailValue)) {
        emailNoValid.innerHTML = `
        <p id="emailValue" style="display: flex;">${"Email cannot blank or  wrong format!!!"}</p>`
        emailNoValid.style.display = "flex";
    } else {
        if (searchEmail(emailValue)) {
            emailNoValid.style.display = "none";
        } else {
            emailNoValid.innerHTML = `
        <p id="emailValue" style="display: flex;">${"Email not exist"}</p>`
            emailNoValid.style.display = "flex";
        }
    }

    let passwdValue = document.getElementById("passwd").value;
    if (validPasswd(passwdValue)) {
        passNovalid.innerHTML = `
        <p id="passwdValue" style="display: flex;">Pasword cannot blank !!</p>`
        passNovalid.style.display = "flex";
    } else {
        if (searchPasswd(passwdValue)) {
            passNovalid.style.display = "none";
        } else {
            passNovalid.innerHTML = `
        <p id="emailValue" style="display: flex;">${"Password false"}</p>`
            passNovalid.style.display = "flex";
        }
    }
});

function validEmail(email) {
    if (email === "") {
        return 1;
    }
    let regex = /^[a-zA-z0-9._%+-]+@[a-zA-Z0-9]+\.(com|vn)$/;
    if (!regex.test(email)) {
        return 1;
    }
}

function validPasswd(passwd) {
    if (passwd = "") {
        return 1;
    }
}

function confirmPassword(passwd, valuePasswd) {
    if (passwd !== valuePasswd) {
        return 1;
    }
}

function searchEmail(email) {
    if (email === localStorage.Email) {
        return 1;
    }
}

function searchPasswd(passwd){
    if (passwd === localStorage.Password) {
        return 1;
    } 
}