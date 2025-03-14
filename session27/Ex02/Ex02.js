let students = [];
let menu = `
1. Nhập danh sách sinh viên
2. Hiển thị danh sách sinh viên
3. Tìm sinh viên theo tên
4. Xóa sinh viên theo tên
5. Thoát
Nhập lựa chọn (1-5):`

let exit = true;

while (exit) {
    let choice = Number(prompt(menu));
    switch (choice) {
        case 1:
            inputStudent(students);
            break;
        case 2:
            showStudent(students);
            break;
        case 3:
            findStudent(students);
            break;
        case 4:
            removeStudent(students);
            break;
        case 5:
            exit = false;
            break;
        default:
            console.log("Lựa chọn không hợp lệ");
            break;
    }
}

function inputStudent(students) {
    let n = Number(prompt("Nhập số lượng sinh viên"));
    for (let i = 0; i < n; i++) {
        students[i] = prompt(`Sinh viên ${i + 1} :`);
    }
}
function showStudent(students) {
    if (students.length === 0) console.log("Danh sách sinh viên trống");
    else {
        let result = "";
        for (let i = 0; i < students.length; i++) {
            result += `${i + 1}. ${students[i]} \n`;
        }
        console.log(result);
    }
}
function findStudent(students) {
    if (students.length === 0) console.log("Danh sách sinh viên trống");
    else {
        let nameStudent = prompt("Nhập tên sinh viên muốn tìm");
        let foundStudent = students.filter((temp) =>
            temp.includes(nameStudent)
        );
        let result = foundStudent
            .map((student, index) => `${index + 1}. ${student}`)
            .join("\n");
            console.log(result || "Không có sinh viên nào phù hợp");
    }
}
function removeStudent(students) {
    if (students.length === 0) {
        console.log("Danh sách sinh viên trống");
    } else {
        let nameStudent = prompt("Nhập tên sinh viên cần xóa");
        let index = students.findIndex((student) => student === nameStudent);
        if (index === -1) {
            console.log("Không tìm thấy sinh viên cần xóa");
        } else {
            students.splice(index, 1);
           console.log("Xóa thành công");
        }
    }
}