let library = [];

class Library {
    constructor(id, title, author, year, price, isAvailable) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
        this.price = price;
        this.isAvailable = isAvailable;
    }
}

library = [
    new Library(1, "Cạnh tranh", "Thầy Phạm Hữu Giang", 2024, 5, true),
    new Library(2, "Harry Potter", "J.K.Celling", 2000, 10, true)
]

let menu = `
----------MENU---------
    1. Thêm sách mới.
    2. Hiển thị danh sách sách.
    3. Tìm kiếm sách theo tiêu đề.
    4. Cập nhật trạng thái mượn/trả sách theo id sách.
    5. Xóa sách theo id sách ra khỏi danh sách.
    6. Sắp xếp sách theo giá tăng dần.
    7. Thoát.

    Nhập sự lựa chọn:
`;

let input;

while (input !== 7) {
    input = +prompt(menu);

    switch (input) {
        case 1:
            // Thêm mới sách
            // Cho người dùng nhập vào lần lượt các trường thông tin của quảng sách muốn Thêm
            //title, author, year, price, isAvailable
            let id = Math.floor(Math.random() * 100);
            let title = prompt("Mời bạn nhập vào tiêu đề sách");
            let author = prompt("Mời bạn nhập vào tác giả");
            let year = prompt("Mời bạn nhập vào năm xuất bản");
            let price = prompt("Mời bạn nhập vào giá sách");
            let isAvailable = prompt("Mời bạn nhập vào trang thái sách");

            //Tạo ra đối tượng mới bao gầm các thông tin
            //Người dùng nhập vào từ bàn phím
            //book(id- tự sinh, title, year, price, isAvailable)
            // let book = {
            //     id: Math.random(),
            //     title,
            //     author,
            //     year,
            //     price,
            //     isAvailable
            // };

            //Thêm mới sách vào trong library
            library.push(new Library(id, title, author, year, price, isAvailable));
            displayBook();
            break;
        case 2:
            // Hiển thị sách
            displayBook();
            break;
        case 3:
            // Tìm kiếm sách theo tiêu ddef
            let searchTitle = prompt("Mời bạn nhập vào tiêu đề của sách");
            let findIndex = search("title", searchTitle);
            if (findIndex === -1) {
                console.log("Không tìm thấy sách nào tiêu đề: " + searchTitle);
            }else{
                displayOneBook(library[findIndex], findIndex); 
            }
            break;
        case 4:
            // Cập nhận giá , trang thái
            let searchId = prompt("Mời bạn nhập id sách bạn muốn cập nhật");
            let updateIndex = search("id", searchTitle);
            if (updateIndex === -1) {
                console.log("Không tìm thấy quyển scahs nào");
            } else {
                library[updateIndex].price = prompt("Mời bạn cập nhật giá sách");
                library[updateIndex].isAvailable = prompt("Mời bạn cập nhật trạng thái");
            }
            break;
        case 5:
            // Xóa sách theo id ra khỏi danh sách
            break;
        case 6:
            // Sắp xếp sách theo tăng dần
            break;
        case 7:
            // Thoát chương trình
            console.log("Thank you using Library");
            break;
        default:
            break;
    }
}

function displayBook() {
    library.forEach(function (book, index) {
        console.log("Quyển sách ", (index + 1));
        console.log("Id sách là: ", book.id);
        console.log("Tên sách là: ", book.title);
        console.log("Tác giả sách là: ", book.author);
        console.log("Năm sanre xuất là: ", book.year);
        console.log("Giá quyển sách là: ", book.price);
        console.log("Trạng thái sách là: ", book.isAvailable);
        console.log("-------------------------------------------")
    })
}

function displayOneBook(book, index) {
    console.log(`Quyển sách ${index + 1}:`)
    console.log("Id sách ", book.id)
    console.log("Tên sách ", book.title)
    console.log("Tác giả ", book.author)
    console.log("Năm xuất bản", book.year)
    console.log("Giá sách ", book.price)
    console.log("Trạng thái sách", book.isAvailable)
    console.log("-----------------------")
}

function search(key, value) {
    let findIndex = -1;
    for (let i in library) {
        if (value === library[i][key]) {
            findIndex = i;
            break;
        }
    }
    return findIndex;
}