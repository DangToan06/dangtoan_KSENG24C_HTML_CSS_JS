let products = [
    ["mì tôm", 5, 5000],
    ["Bánh mì", 12, 15000],
    ["bánh bao", 5, 8000],
    ["mèn mén", 30, 20000]
];

let cart = [];

//B1 Tạo ra menu
let menu = `
-----------MENU----------
1. Danh sách sản phẩm
2. Mua hàng
3.Tính tiền + hóa đơn
4.Thoat
Mời bạn nhập vào sự lụa chọn của bạn:
`;

//B2: Cho người dùng nhập vào sự lựa chọn

let exit = true;
while (exit) {
    let input = Number(prompt(menu));
    switch (input) {
        case 1: // Hiển thị danh sách sản phẩm
            displayProducts();
            break;
        case 2: // Mua hàng
            // B3: Cho người dùng nhập vào tên sản phẩm muốn mua
            let productsName = String(prompt("Mời bạn nhập tên sản phẩm"));
            // B4: Tìm kiếm xem sản phẩm có tồn tại trong cửa hàng hay không
            let findIndex = -1;
            for (let index in products) {
                if (productsName === products[index][0]);
                findIndex = index;
            }
            if (findIndex === -1) {
                console.log("Không tìm thấy sản phẩm");
            } else {
                // B5: Nếu không --> Hiển thị sản phẩm 0 tồn tại
                //// B6: Nếu có --> Tiến hành mua hàng
                // B7: Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng (cart)
                let inCartindex = -1;
                for(let i in cart){
                    if(cart[i][0] === productsName){
                        inCartindex = i;
                    }
                }

                // if(inCartindex === -1){
                //     console.log("Sản phẩm không tồn tại trong cửa tử")
                //     let product = products[findIndex];

                // }else{
                //     console.log("Sản phẩm đã tồn tại trong cửa hàng");
                // }

                if(inCartindex === -1){
                    // B8: Nếu chưa --> Thêm sản phẩm đó vào giỏ hàng
                    let product = products[findIndex];
                    let addProduct = [...addProduct];
                    cart.push(addProduct);
                    console.log(cart);
                }else{
                    // B9: Nếu rồi --> Tìm vị trí của sản phẩm đó trong giỏ hàng và tăng
                // só lượng lên 1 đơn vị
                    cart[inCartindex][1]++;
                }
                // B10: Giảm số lượng của sản phẩm đó trong cửa hà
                // ng đi 1 đơn vị
                console.log(products[findIndex]);
            }

            break;
        case 3: // Hóa đơn

            break;
        case 4: // Thoát
            exit = false;
            break;
        default:
            console.log("Lựa chọn không hợp lệ");
            break;
    }
}


function displayProducts() {
    for (let index in products) {
        console.log(
            `${index + 1}. ${products[index][0]} - ${products[index][2]} - ${products[index][1]}`
        );
    }
}