let arr = [2,5,7,4,1,8,6,2,5,7];

let number = [];
let count = [];

for(let i = 0; i < arr.length; i++){
    let index = number.indexOf(arr[i]);
    if(index === -1){
        number.push(arr[i]);
        count.push(1);
    }else{
        count[index]++;
    }
}

let countMax = Math.max(...count);

let mostFrequentNumbers = [];

for(let i = 0; i< number.length; i++){
    if(count[i] === countMax){
        mostFrequentNumbers.push(number[i]);
    }
}

let result = Math.min(...mostFrequentNumbers);

console.log(result);