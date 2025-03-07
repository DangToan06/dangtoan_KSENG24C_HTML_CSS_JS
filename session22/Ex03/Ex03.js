let str = prompt("Nhập vào một mảng");

if(isNaN(str)){
    console.log("Dãy không hợp lệ");
}else{
    let arr = str.split("");
    console.log(arr.reverse());
}




