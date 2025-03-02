let a = Number(prompt("Hay nhap vao so a"));
let b = Number(prompt("Hay nhap vao so b"));
let dau = prompt("Moi ban nhap vao cac phep tinh (+, -, *, /)");

if(dau === "+"){
    console.log("a + b = " + (a+b));
}else if(dau === "-"){
    console.log("a - b = " + (a-b));
}else if(dau === "*"){
    console.log("a * b = " + (a*b));
}else if(dau === "/"){
    console.log("a / b = " + (a/b));
}else{
    console.log("error");
}