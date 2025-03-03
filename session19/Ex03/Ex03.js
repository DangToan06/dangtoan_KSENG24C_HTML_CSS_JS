let contry = prompt("Nhap vao dơn vi ban muon chuyen doi (VND / USD)");

let money = Number(prompt("Nhap vao so tien ban muon chuyen doi"));

let vnd;
let dollar;

if(contry === "VND"){
    vnd = money * 23000;
    console.log(vnd.toLocaleString("vi-VE") + " VND");
}else if(contry === "USD"){
    dollar = money / 23000;
    console.log(dollar.toLocaleString("vi-VE") + " USD");
}else{
    console.log("Don vi nay khong co trong he thong");
}