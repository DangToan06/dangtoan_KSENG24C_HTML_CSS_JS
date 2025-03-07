let arr = [4,4,4,6,1,6,6,4,4,3];

let arr2 = [];

for(let i = 0; i < arr.length; i++){
    let index = arr2.indexOf(arr[i]);
    if(index === -1){
        arr2.push(arr[i]);
    }
}

for(let i = 0; i < arr2.length-1;i++){
    for(let j = 0; j < arr2.length - i - 1; j++){
        if(arr2[j] > arr2[j+1]){
            let tmp = arr2[j+1];
            arr2[j+1] = arr2[j];
            arr2[j] = tmp;
        }
    }
}

console.log(arr2);
