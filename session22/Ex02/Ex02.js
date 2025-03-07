let numbers = [2,5,7,4,1,8,6];
let input = Number(prompt("Nhập vào một số bất kì"));
let check = false;

for(let i = 0; i < numbers.length; i++){
    if(input === numbers[i]){
        check = true;
        break;
    }
}

if(check){
    console.log("Bingo");
}else{
    console.log("Chúc bạn may mắn lần sau");
}