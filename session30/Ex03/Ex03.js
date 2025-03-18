class Phone {
    constructor(id, name, price, quantity, brand) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.brand = brand;
    }
}

let phones = [
    new Phone(1, "iPhone 13", 2000, 10, "Apple"),
    new Phone(2, "Galaxy S22", 1500, 15, "Samsung"),
    new Phone(3, "Redmi Note 11", 500, 20, "Xiaomi"),
    new Phone(4, "iPhone 14", 2500, 5, "Apple"),
    new Phone(5, "Galaxy A52", 800, 12, "Samsung"),
];

let cart = [];
let menu = `
    ----------MENU---------
    1. Hiển thị điện thoại theo hãng.
    2. Thêm điện thoại mới vào cửa hàng.
    3. Tìm kiếm điện thoại theo tên hoặc ID.
    4. Mua điện thoại.
    5. Thanh toán giỏ hàng.
    6. Sắp xếp điện thoại theo giá.
    7. Hiển thị tổng số tiền của các điện thoại trong kho.
    8. Hiển thị tổng số lượng điện thoại theo từng hãng.
    9. Thoát.
`;

let choice;
do {
    choice = Number(prompt(menu));
    switch (choice) {
        case 1:
            let brand = prompt("Nhập hãng điện thoại:");
            displayPhonesByBrand(brand);
            break;
        case 2:
            addNewPhone();
            break;
        case 3:
            searchPhone();
            break;
        case 4:
            buyPhone();
            break;
        case 5:
            checkoutCart();
            break;
        case 6:
            let order = prompt("Nhập 'asc' để sắp xếp tăng dần, 'desc' để sắp xếp giảm dần:");
            sortPhones(order);
            break;
        case 7:
            displayTotalStockValue();
            break;
        case 8:
            displayTotalQuantityByBrand();
            break;
        case 9:
            console.log("Cảm ơn bạn đã sử dụng chương trình!");
            break;
        default:
            console.log("Lựa chọn không hợp lệ.");
    }
} while (choice !== 9);

function displayPhonesByBrand(brand) {
    let filteredPhones = phones.filter(phone => phone.brand.toLowerCase() === brand.toLowerCase());
    if (filteredPhones.length > 0) {
        console.table(filteredPhones);
    } else {
        console.log("Không tìm thấy điện thoại thuộc hãng này.");
    }
}

function addNewPhone() {
    let id = Number(prompt("Nhập ID điện thoại:"));
    let name = prompt("Nhập tên điện thoại:");
    let price = Number(prompt("Nhập giá điện thoại:"));
    let quantity = Number(prompt("Nhập số lượng điện thoại:"));
    let brand = prompt("Nhập hãng điện thoại:");
    phones.push(new Phone(id, name, price, quantity, brand));
    console.log("Đã thêm điện thoại mới vào cửa hàng.");
    console.table(phones);
}

function searchPhone() {
    let searchTerm = prompt("Nhập tên hoặc ID điện thoại cần tìm:");
    let result = phones.filter(phone =>
        phone.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        phone.id === Number(searchTerm)
    );
    if (result.length > 0) {
        console.table(result);
    } else {
        console.log("Không tìm thấy điện thoại.");
    }
}

function buyPhone() {
    let phoneId = Number(prompt("Nhập ID điện thoại muốn mua:"));
    let quantity = Number(prompt("Nhập số lượng muốn mua:"));
    let phone = phones.find(p => p.id === phoneId);
    if (!phone) {
        console.log("Điện thoại không tồn tại.");
        return;
    }
    if (phone.quantity < quantity) {
        console.log("Số lượng không đủ.");
        return;
    }
    phone.quantity -= quantity;
    let cartItem = cart.find(item => item.id === phoneId);
    if (cartItem) {
        cartItem.quantity += quantity;
    } else {
        cart.push(new Phone(phone.id, phone.name, phone.price, quantity, phone.brand));
    }
    console.log(`Đã mua ${quantity} điện thoại '${phone.name}'.`);
    console.table(cart);
}

function checkoutCart() {
    if (cart.length === 0) {
        console.log("Giỏ hàng trống.");
        return;
    }
    let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    console.log(`Tổng tiền thanh toán: ${total} VNĐ`);
    console.log("Thanh toán thành công!");
    cart = [];
}

function sortPhones(order) {
    if (order === "asc") {
        phones.sort((a, b) => a.price - b.price);
    } else if (order === "desc") {
        phones.sort((a, b) => b.price - a.price);
    } else {
        console.log("Lựa chọn không hợp lệ.");
        return;
    }
    console.log("Danh sách điện thoại sau khi sắp xếp:");
    console.table(phones);
}

function displayTotalStockValue() {
    let totalValue = phones.reduce((sum, phone) => sum + phone.price * phone.quantity, 0);
    console.log(`Tổng giá trị các điện thoại trong kho: ${totalValue} VNĐ`);
}

function displayTotalQuantityByBrand() {
    let brandSummary = phones.reduce((summary, phone) => {
        summary[phone.brand] = (summary[phone.brand] || 0) + phone.quantity;
        return summary;
    }, {});
    console.log("Tổng số lượng điện thoại theo từng hãng:");
    console.table(brandSummary);
}