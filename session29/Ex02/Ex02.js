class Product {
    constructor(id, name, price, category, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
        this.quantity = quantity;
    }
}

let product = [];

let menu = `
    ---------MENU---------
    1. Thêm sản phẩm vào danh sách sản phẩm.
    2. Hiển thị tất cả sản phẩm.
    3. Hiển thị chi tiết sản phẩm theo id.
    4. Cập nhật thông tin sản phẩm (name, price, category, quantity) theo id sản phẩm.
    5. Xóa sản phẩm theo id.
    6. Lọc sản phẩm theo khoảng giá (>5000).
    7. Thoát.
    
    Nhập vào lựa chọn của bạn:`;

let choice;

while (choice !== 7) {
    choice = Number(prompt(menu));
    switch (choice) {
        case 1:
            let id = Math.floor(Math.random() * 100);
            let name = prompt("Nhập vào tên sản phẩm");
            let price = Number(prompt("Nhập vào giá sản phẩm"));
            let category = prompt("Nhập vào danh mục sản phẩm");
            let quantity = Number(prompt("Nhập vào số lượng sản phẩm trong kho"));

            product.push(new Product(id, name, price, category, quantity));
            break;
        case 2:
            dispalylProduct();
            break;
        case 3:
            let searchProduct = Number(prompt("Nhập id sp muốn tìm"));
            let findIndex = search("id", searchProduct);
            if (findIndex === -1) {
                console.log("Không tìm thấy thông tin sp");
            } else {
                displayDetailProduct(product[findIndex], findIndex);
            }
            break;
        case 4:
            let updateProduct = Number(prompt("Nhập id sp bạn muốn cập nhật"));
            let updateIndex = search("id", updateProduct);
            if (updateIndex === -1) {
                console.log("Không tìm thấy id ban cần tìm");
            } else {
                product[updateIndex].name = prompt("Cập nhật tên sp");
                product[updateIndex].price = Number(prompt("Cập nhật giá sp"));
                product[updateIndex].category = prompt("Cập nhật danh mục sp");
                product[updateIndex].quantity = Number(prompt("Cập nhật số lượng sp trong kho"));
            }
            break;
        case 5:
            let deleteProduct = Number(prompt("Nhập id bạn muốn xóa"));
            let deleteIndex = search("id", deleteProduct);
            if(deleteIndex === -1){
                console.log("Không tìm thấy id ban cần tìm");
            }else{
                product.splice(deleteIndex,1);
            }
            break;
        case 6:
            let product2 = product.filter(element => element.price >= 5000);
            product2.forEach((element, index) => {
                console.log("Sản phẩm thứ ", (index + 1));
                console.log("Id của sản phẩm là: ", element.id);
                console.log("Tên sản phẩm là: ", element.name);
                console.log("Giá sản phẩm là: ", element.price);
                console.log("Danh mục sản phẩm là: ", element.category);
                console.log("Số lượng sản phẩm là: ", element.quantity);
                console.log("-----------------</>-----------------");
            });
            break;
        case 7:
            console.log("thanks for using menu");
            break;
        default:
            break;
    }
}

function dispalylProduct() {
    product.forEach((element, index) => {
        console.log("Sản phẩm thứ ", (index + 1));
        console.log("Id của sản phẩm là: ", element.id);
        console.log("Tên sản phẩm là: ", element.name);
        console.log("Giá sản phẩm là: ", element.price);
        console.log("Danh mục sản phẩm là: ", element.category);
        console.log("Số lượng sản phẩm là: ", element.quantity);
        console.log("-----------------</>-----------------");
    });
}

function search(key, value) {
    findIndex = -1;
    for (let i in product) {
        if (value === product[i][key]) {
            findIndex = i;
            break;
        }
    }
    return findIndex;
}

function displayDetailProduct(product, index) {
    console.log("Sp bạn cần tìm là:");
    console.log("Id sp là: " + product.id);
    console.log("Tên sp là: " + product.name);
    console.log("Giá sp là: " + product.price);
    console.log("Danh mục là: " + product.category);
    console.log("Số lượng sp là: " + product.quantity);
    console.log("---------------------------------------------");
}