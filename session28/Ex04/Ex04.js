class Rectangle {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    get getArea(){
        return this.width*this.height;
    }
}

let rectangle1 = new Rectangle(10, 5);

let area = rectangle1.getArea;
console.log("Diện tích hình chữ nhật là:" ,area);