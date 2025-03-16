class Book {
    constructor (title, author, page){
        this.title = title;
        this.author = author;
        this.page = page;
    }

    deletePage(){
        delete this.page;
    }
}

let book1 = new Book("JavaScript Basics", "John Smith", 200);
console.log("Thuộc tính sách ban ddaauf là:" ,book1);

book1.deletePage();
console.log("Thuộc tính sách sau khi xóa là:" ,book1);