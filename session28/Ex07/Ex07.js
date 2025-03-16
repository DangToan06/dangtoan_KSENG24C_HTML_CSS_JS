class Student {
    constructor (name, math, english, literature){
        this.name = name;
        this.score = {math, english, literature};
    }

    averageScore(){
        let math = this.score.math;
        let english = this.score.english;
        let literature = this.score.literature;
        return (math + english + literature) / 3;
    }

    isTop(){
        return this.averageScore() >=8;
    }
}

const students = [
    new Student("Trần Trí Dương", 9, 8, 7),
    new Student("Hà Bích Ngọc", 3, 2, 5),
    new Student("Bùi Thái Sơn", 9.5, 9, 9)
];

let goodStuden = students.filter(std => std.isTop());
console.log("Danh sách sinh viên có điểm trung bình >= 8:", goodStuden);