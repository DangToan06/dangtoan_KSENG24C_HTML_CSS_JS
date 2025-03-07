let student = ["Đặng Văn Thanh", "Nguyễn Văn A", "Trần Thị B", "Phạm Văn C", "Nguyễn Thị D"];
console.log(student)
let radomArr = [1, "hell0 world",true, false, []]
console.log(radomArr)
let student1 = student[0] // "Đặng Văn Thanh"
console.log("Mời em " + student[2]  +"  lên bảng")


// for(let i = 0; i < student.length; i = i + 1){
//     console.log(student[i])

// }

// for(let i = student.length; ){

// }

// for (let studentCon of student){
//     console.log(studentCon);
// }

// for (let index of student){
//     console.log(index);
// }


student.unshift("Nguyễn Như E");// thêm vào đầu
console.log(student);

student.push("Trần Thị F");// Thêm vào cuối
console.log(student);

student.splice(1, 0, "hello");// thêm vòa giữa
console.log(student);

//xóa

//xóa đầu
student.shift(student);
console.log(student);


//xóa cuối
student.pop(student);
console.log(student);

//xóa vi tri bát ki
student.splice(3,1);
console.log(student);