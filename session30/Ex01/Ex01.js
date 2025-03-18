class Products {
    constructor(id, name, price, quantity, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.category = category;
    }
}

class BuyProducts {
    constructor(id, name, price, quantity, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.category = category;
    }
}

let cart = [];
let count = 0;

let products = [
    new Products(1, "mèn mén", 20000, 20, "món ăn dân tộc mông"),
    new Products(2, "mứt", 80000, 21, "món ăn dân tộc kinh"),
    new Products(3, "cơm lam", 40000, 15, "món ăn dân tộc mông"),
    new Products(4, "bánh đậu xanh", 60000, 30, "món ăn dân tộc kinh")
]

let choice;

let menu = `
    ----------MENU---------
    1. Hiển thị các sản phẩm theo tên danh mục.
    2. Chọn sản phẩm để mua bằng cách nhập id sản phẩm.
    3. Sắp xếp các sản phẩm trong cửa hàng theo giá:
    4. Tính số tiền thanh toán trong giỏ hàng.
    5. Thoát.
    
    Mời bạn nhập vào sự lựa chọn: `;

while (choice !== 5) {
    choice = Number(prompt(menu));
    switch (choice) {
        case 1:
            let searchCategory = prompt("Mời bạn nhập danh mục sản phẩm");
            let category = products.filter(item => item.category === searchCategory);
            console.table(category);
            break;
        case 2:
            let searchId = Number(prompt("Nhập id sản phẩm muốn tìm"));
            let searchIndex = search("id", searchId);
            if (searchIndex === -1) {
                console.log("Id bạn nhập không tồn tại");
            } else {
                dispalyOneProduct(products[searchIndex])
                let buyProduct = Number(prompt("Nhập số lượng sản phẩm muốn mua"));
                if (buyProduct > products[searchIndex].quantity || products[searchIndex].quantity === 0) {
                    console.log("Số lượng sản phẩm không đủ");
                } else {
                    products[searchIndex].quantity -= buyProduct;
                    cart[count] = new Products(products[searchIndex].id, products[searchIndex].name, products[searchIndex].price, buyProduct, products[searchIndex].category);
                    count++;
                }
                console.log(`Bạn vừa mua ${buyProduct} từ sản phẩm ${products[searchIndex].name}`);
                console.log("Giỏ hàng của bạn hiện có");
                console.table(cart);
            }
            break;
        case 3:
            let input = prompt(`
                Nhập lựa chọn bạn muốn sắp xếp: 
                a. Tăng dần
                b. Giảm dần`);
            if (input === "a" || input === "A") {
                sortUp();
            } else if (input === "b" || input === "B") {
                sortDown();
            } else {
                console.log("Lựa chọn không tồn tại");
            }
            break;
        case 4:
            let totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
            let totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
            console.log(`Tổng số lượng sách đã mua: ${totalQuantity}`);
            console.log(`Tổng tiền giỏ hàng: ${totalPrice} VNĐ`);
            break;
        case 5:
            console.log("Thanks for using shop");
            break;
        default:
            console.log("Error");
            break;
    }
}

function search(key, value) {
    findIndex = -1;
    for (let i in products) {
        if (value === products[i][key]) {
            findIndex = i;
            break;
        }
    }
    return findIndex;
}

function dispalyOneProduct(element) {
    console.log("----------</>----------")
    console.log("Sản phẩm bạn cần tìm là: ");
    console.log(element.id);
    console.log(element.name);
    console.log(element.price);
    console.log(element.quantity);
    console.log(element.category);
}

function sortUp() {
    for (let i = 0; i < products.length - 1; i++) {
        for (let j = 0; j < products.length - i - 1; j++) {
            if (products[j].price > products[j + 1].price) {
                let tmp = products[j];
                products[j] = products[j + 1];
                products[j + 1] = tmp;
            }
        }
    }
    console.table(products);
}

function sortDown() {
    for (let i = 0; i < products.length - 1; i++) {
        for (let j = 0; j < products.length - i - 1; j++) {
            if (products[j].price < products[j + 1].price) {
                let tmp = products[j];
                products[j] = products[j + 1];
                products[j + 1] = tmp;
            }
        }
    }
    console.table(products);
}

function payProducts(){
    return products.reduce((sum, cost) => sum + cost);
}