class Employee {
    constructor(name, postion){
        this.name = name;
        this.postion = postion;
    }
}

class Company {
    constructor(name, location, employees){
        this.name = name;
        this.location = location;
        this.employees = employees;
    }

    show(){
        console.log("Tên công ty: " ,this.name);
        console.log("Danh scahs các nhân viên");
        this.employees.forEach(element => {
            console.log("- ",element.name)
        });
    }
}

let employees = [
    new Employee("Nguyễn Văn Luận", "Developer"),
    new Employee("Nguyễn Văn Hoàng", "Tester"),
    new Employee("Hoàng Nam Cao", "Manager")
];

let company = new Company("RikkeiSoft", "Hà Nội", employees);

company.show();