class Product {
    constructor(id, name, price, quantity, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.category = category;
    }
}

let products = [
    new Product(1, "Harry Potter", 100, 10, "Novel"),
    new Product(2, "Sherlock Holmes", 200, 20, "Detective"),
    new Product(3, "Doraemon", 50, 30, "Comic"),
    new Product(4, "One Piece", 150, 40, "Comic"),
    new Product(5, "Naruto", 120, 50, "Comic"),
];

let cart = [];
let menu = `
    ----------MENU---------
    1. Hiển thị sách theo thể loại.
    2. Thêm sách mới vào kho.
    3. Tìm kiếm sách theo tên hoặc ID.
    4. Mua sách.
    5. Sắp xếp sách theo giá.
    6. Tính tổng số lượng sách đã mua và tổng tiền.
    7. Hiển thị tổng số lượng sách trong kho.
    8. Thoát.
`;

let choice;
do {
    choice = Number(prompt(menu));
    switch (choice) {
        case 1:
            let category = prompt("Nhập thể loại sách:");
            displayBooksByCategory(category);
            break;
        case 2:
            addNewBook();
            break;
        case 3:
            searchBook();
            break;
        case 4:
            buyBook();
            break;
        case 5:
            let order = prompt("Nhập 'a' để sắp xếp tăng dần, 'b' để sắp xếp giảm dần:");
            sortBooks(order);
            break;
        case 6:
            displayCartSummary();
            break;
        case 7:
            displayTotalStock();
            break;
        case 8:
            console.log("Cảm ơn bạn đã sử dụng chương trình!");
            break;
        default:
            console.log("Lựa chọn không hợp lệ.");
    }
} while (choice !== 8);

function displayBooksByCategory(category) {
    let filteredProducts = products.filter(product => product.category === category);
    if (filteredProducts.length > 0) {
        console.table(filteredProducts);
    } else {
        console.log("Không tìm thấy sách thuộc thể loại này.");
    }
}

function addNewBook() {
    let id = Number(prompt("Nhập ID sách:"));
    let name = prompt("Nhập tên sách:");
    let price = Number(prompt("Nhập giá sách:"));
    let quantity = Number(prompt("Nhập số lượng sách:"));
    let category = prompt("Nhập thể loại sách:");
    products.push(new Product(id, name, price, quantity, category));
    console.log("Đã thêm sách mới vào kho.");
    console.table(products);
}

function searchBook() {
    let searchTerm = prompt("Nhập tên hoặc ID sách cần tìm:");
    let result = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.id === Number(searchTerm)
    );
    if (result.length > 0) {
        console.table(result);
    } else {
        console.log("Không tìm thấy sách.");
    }
}

function buyBook() {
    let productId = Number(prompt("Nhập ID sách muốn mua:"));
    let quantity = Number(prompt("Nhập số lượng muốn mua:"));
    let product = products.find(p => p.id === productId);
    if (!product) {
        console.log("Sách không tồn tại.");
        return;
    }
    if (product.quantity < quantity) {
        console.log("Số lượng không đủ.");
        return;
    }
    product.quantity -= quantity;
    let cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity += quantity;
    } else {
        cart.push(new Product(product.id, product.name, product.price, quantity, product.category));
    }
    console.log(`Đã mua ${quantity} sách '${product.name}'.`);
    console.table(cart);
}

function sortBooks(order) {
    if (order === "a") {
        products.sort((a, b) => a.price - b.price);
    } else if (order === "b") {
        products.sort((a, b) => b.price - a.price);
    } else {
        console.log("Lựa chọn không hợp lệ.");
        return;
    }
    console.log("Danh sách sách sau khi sắp xếp:");
    console.table(products);
}

function displayCartSummary() {
    let totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    let totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    console.log(`Tổng số lượng sách đã mua: ${totalQuantity}`);
    console.log(`Tổng tiền: ${totalPrice} VNĐ`);
}

function displayTotalStock() {
    let totalStock = products.reduce((sum, item) => sum + item.quantity, 0);
    console.log(`Tổng số lượng sách trong kho: ${totalStock}`);
}