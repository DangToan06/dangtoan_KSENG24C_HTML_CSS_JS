let str = String(prompt("Nhap vao mot chuoi"));
let search = String(prompt("Nhap vao ki tu can tim"));

let length = str.length;
let check = 0;
for(let i = 0; i < length; i++){
    if(str[i] === search){
        check = 1;
    }
}
if(check === 1){
    console.log("Tồn tại phần tử cần tìm kiếm");
}else{
    console.log("Không tồn tại phần tử cần tìm kiếm");
}
    