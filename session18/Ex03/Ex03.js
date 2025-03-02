user = prompt("Hay nhap teen dang nhap");

if (user === "ADMIN") {
    passwd = prompt("Hay nhap mat khau");
    if (passwd === "TheMaster") {
        console.log("Welcome");
    } else if (passwd == null) {
        console.log("Cancelled");
    } else{
        console.log("Wrong password");
    }
} else if (user == null) {
    console.log("Cancelled");
} else {
    console.log("I Don't know you");
}