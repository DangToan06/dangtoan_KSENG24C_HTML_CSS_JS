document.getElementById("login-btn").addEventListener("click", function () {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const fixedUsername = "huanrose@gmail.com";
    const fixedPassword = "123456";

    if (username === fixedUsername && password === fixedPassword) {
        console.log("Đăng nhập thành công!");
    } else {
        console.log("Đăng nhập thất bại! Vui lòng kiểm tra lại thông tin.");
    }
});
