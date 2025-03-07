let numberArray = [2,5,7,4,1,8,6,2,5,7];
let input = Number(prompt("Nhập vào một số bất kì"));
let count = 0;

for(let i = 0; i < numberArray.length ; i++){
    if(input === numberArray[i]){
        count++;
    }
}

if( count > 0){
    console.log("Số " + input + " xuất hiện " + count + " trong mảng");
}else{
    console.log("Số " + input + " không tồn tại trong mảng");
}
