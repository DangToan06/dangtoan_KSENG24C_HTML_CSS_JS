//function
//khai báo hàm thông thường
//input
// process
//output
//Tham số - parameters
function calculateSum(number1, number2) {
    // logic
    // let number1 = 1
    // let number2 = 2
    return number1 + number2;
}

//function execution
//Thực thi hàm

//Đối số thực tế
//Arguments
let sum = calculateSum(10, 20); //Output: 30 
calculateSum(1, 2); //Output: 3
calculateSum(-2, 3);//Output: 1

console.log(sum);

mayPhahCaPhe("Hạt cà phê", "Đường", "Nước");

//Hàm không tên - Anoynimous function


let reusult = (function (a, b){
    return a*b;
})(10, 20);

console.log(reusult);

//function 

let calculateResult = function(a, b){
    return a/b;
};

calculateResult(10,20);