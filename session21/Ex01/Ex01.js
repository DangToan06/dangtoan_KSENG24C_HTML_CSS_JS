let sum = 0;
let num;
for(let i = 0; i < 5; i++){
    num = Number(prompt("Nhập vào số thứ " + Number(i+1)));
    while(isNaN(num)){
        num = Number(prompt("số nhập vào không thỏa mãn vui lòng nhập lại " + Number(i+1)));
    }
    if(num % 2 !== 0){
        sum += num;
    }
}

console.log("Tổng các số lẻ là: " +sum);
