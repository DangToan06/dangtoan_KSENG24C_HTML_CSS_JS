class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
}

let car1 = new Car("Toyota", "Corolla", 2020);
console.log(`
    Doi tượng ban dau la:
    brand: ${car1.brand}
    model: ${car1.model}
    year: ${car1.year}
    `);

car1.color = "pink";

console.log(`
    Doi tượng sau khi thêm là:
    brand: ${car1.brand}
    model: ${car1.model}
    year: ${car1.year}
    color: ${car1.color}
    `);

car1.year = 2022;

console.log(`
    Doi tượng sau khi cập nhật là:
    brand: ${car1.brand}
    model: ${car1.model}
    year: ${car1.year}
    color: ${car1.color}
    `);