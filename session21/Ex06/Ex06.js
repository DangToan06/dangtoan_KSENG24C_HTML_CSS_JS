let num = Number(prompt("Hãy nhập một số nguyên bất kì"));

for(let i = 1; i <= Math.sqrt(num); i++){
    if(num % i === 0){
        console.log(i);
        if (i !== num / i) {
            console.log(num / i);
        }
    }
}
