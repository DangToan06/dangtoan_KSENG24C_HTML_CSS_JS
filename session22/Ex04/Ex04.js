let str = prompt("NHập vào dãy số bất kỳ");

if(isNaN(str)){
    console.log("Dãy số không hợp lệ");
}else{
    let arr = str.split("");
    let max = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    console.log(max + " là số lớn nhất trong dãy");
}