let cout1 = 0;
let cout2 = 0;

for(let i = 0; i < 5; i++){
    num = Number(prompt("Nhập vào số thứ " + Number(i+1)));
    while(isNaN(num)){
        num = Number(prompt("số nhập vào không thỏa mãn vui lòng nhập lại " + Number(i+1)));
    }
    if(num % 2 === 0){
        cout1++;
    }else{
        cout2++;
    }
}

console.log("Số lượng số chẵn là: " +cout1);
console.log("Số lượng số lẻ là: " +cout2);