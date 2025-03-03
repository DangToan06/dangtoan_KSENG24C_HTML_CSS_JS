let months = Number(prompt("Nhap vao so thang"));

if( months < 1 || months >12 || isNaN(months)){
    console.log("Thang nhap vao khong hop le");
}else{
    switch(months){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            console.log("Thang " + months + " có 31 ngay");
            break;
        case 2:
            console.log("Thang " + months + " có 28 ngay hoac 29 ngay nam nhuan");
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            console.log("Thang " + months + " có 30 ngay");
            break;
    }   
}