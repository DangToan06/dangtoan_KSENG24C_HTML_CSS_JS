// let isActive = true;
// let thayBachHansome = false;

// console.log(1 > 1); // false
// console.log(1 >= 1); // true
// console.log(1 == "1"); // true
// console.log(1 === "1"); // false
// console.log( 1 != "1"); // false
// console.log(1 !== "1"); //true

// // thay Bach vua di cat toc 
// thayBachHansome = !thayBachHansome;

// console.log(thayBachHansome);// true

// console.log(1 == "1" && "a" === "a");// true
// console.log(1 === "1" && "a" === "a"); // false

// console.log(1 === "1" || "a" === "a");// true


let salary = Number(prompt("Nhap vao muc thu nhap"));

let tax;

if(salary < 5000000){
    tax = 0 * salary;
}else if(salary < 10000000){
    tax = (5/100) * salary;
}else if(salary < 18000000){
    tax = (10/100) * salary;
}else if(salary < 32000000){
    tax = (15/100) * salary;
}else {
    tax = (20/100) * salary;
}

console.log("thue thu nhap cac nhan la: " +tax.toLocaleString("vi-VE")+"vnđ");