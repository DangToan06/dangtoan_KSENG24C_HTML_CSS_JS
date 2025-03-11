let str = String(prompt("Nhập vào một chuỗi"));
let str2;
let str3;

function checkSymmetry() {
    str2 = str.split("");
    str3 = [...str2].reverse();
    for(let i = 0; i < str2.length; i++){
        if(str2[i] !== str3[i]){
            return false;
        }
    }
    return true;
}

if(checkSymmetry()){
    console.log("là chuỗi đối xứng");
}else{
    console.log("không phải chuỗi đối xứng");
}

