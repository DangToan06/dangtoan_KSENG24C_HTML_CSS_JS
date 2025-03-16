class Cart {
    constructor(name, price, quantity){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}

const cart = [
    new Cart ("Mèn mén",30000,2),
    new Cart("Mì tôm",5000,1),
    new Cart("Bánh bao",15000,3)
];

function TotalPrice(cartItems) {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

let sum = TotalPrice(cart);
console.log("Tổng giá trị giỏ hàng:", sum);