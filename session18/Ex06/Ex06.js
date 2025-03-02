let years = Number(prompt("Nhap vao so nam"));

if((years % 4 === 0) && (years % 100 != 0) || (years % 400 === 0)){
    console.log("Day la nam nhuan");
}else{
    console.log("Day khong phai la nam nhuan");
}