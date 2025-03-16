class Person {
    constructor(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
    }

    show() {
        return `name: ${this.name}
            age: ${this.age}
            job: ${this.job}`;

    }
}

let person1 = new Person("John Doe", 25, "Develope");

console.log(`
    name: ${person1.name}
    age: ${person1.age}
    job: ${person1.job}
`);

