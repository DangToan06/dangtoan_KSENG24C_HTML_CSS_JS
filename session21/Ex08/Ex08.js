let sum;
let temp;

for (let i = 100; i <= 999; i++) {
    sum = 0;
    temp = i;
    while (temp > 0) {
        let digital = temp % 10;
        sum += Math.pow(digital, 3);
        temp = Math.floor(temp / 10);
    }
    if (i === sum) {
        console.log(i);
    }
}