let input = document.getElementsByClassName("button-add");
let arr = [];
let value = document.getElementById("value");
let total = document.getElementById("total");

class Cart {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}

let nameProduct = document.getElementsByClassName("name-product");
let price = document.getElementsByClassName("price");
let pay = document.getElementById("pay");

for (let i = 0; i < input.length; i++) {
    input[i].addEventListener("click", function () {
        if (!checkCart(nameProduct[i].innerHTML)) {
            add(nameProduct[i].innerHTML);
        } else {
            quantity = 1;
            arr.push(new Cart(nameProduct[i].innerHTML, price[i].innerHTML, quantity));
        }
        showCart(arr);
    });
}

function add(value) {
    for (let j = 0; j < arr.length; j++) {
        if (value === arr[j].name) {
            arr[j].quantity++;
        }
    }
    showCart(arr);
}

function checkCart(nameValue) {
    for (let i = 0; i < arr.length; i++) {
        if (nameValue === arr[i].name) {
            return 0;
        }
    }
    return 1;
}


function attachQuantityEvents() {
    let upButtons = document.getElementsByClassName("up");
    let downButtons = document.getElementsByClassName("down");
    let deleteButtons = document.getElementsByClassName("dele-all");


    for (let i = 0; i < upButtons.length; i++) {
        upButtons[i].addEventListener("click", function () {
            arr[i].quantity++;
            showCart(arr);
        });
    }


    for (let i = 0; i < downButtons.length; i++) {
        downButtons[i].addEventListener("click", function () {
            if (arr[i].quantity > 1) {
                arr[i].quantity--;
            } else {

                arr.splice(i, 1);
            }
            showCart(arr);
        });
    }


    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener("click", function () {
            arr.splice(i, 1);
            showCart(arr);
        });
    }
}

function showCart(arr) {
    if (arr.length > 0) {
        value.style.display = "none";
        pay.innerHTML = "";
        arr.forEach((element, index) => {
            pay.innerHTML += `
                <li>
                    <div class="cart" style="display: flex;">
                        <div class="name-product-pay">
                            <p class="name-product-detail">${element.name}</p>
                            <p class="price-product">${element.price} x ${element.quantity}</p>
                        </div>
                        <div class="quantity">
                            <div class="button-choice">
                                <button class="down" data-index="${index}">-</button>
                                <span class="quantity-product">${element.quantity}</span>
                                <button class="up" data-index="${index}">+</button>
                                <button class="dele-all" data-index="${index}">X</button>
                            </div>
                        </div>
                    </div>
                </li>
            `;
        });

        total.innerHTML = "";
        let sum = arr.reduce((sum, item) => {
            let priceNumber = parseInt(item.price.replace(/\D/g, ""), 10);
            return sum + priceNumber * item.quantity;
        }, 0);

        total.innerHTML = `<p class="total" id="total">Tổng: ${sum.toLocaleString()}₫</p>`;
    } else {
        value.style.display = "block";
        pay.innerHTML = `<li class="value" id="value">Giỏ hàng trống</li>`;
        total.innerHTML = `<p class="total" id="total">Tổng: 0₫</p>`;
    }

    attachQuantityEvents();
}

showCart(arr);

let payButton = document.querySelector(".btn-pay");

payButton.addEventListener("click", function () {
    if (arr.length > 0) {
        alert("Thanh toán thành công! Cảm ơn bạn đã mua hàng.");
        arr = [];
        showCart(arr);
    } else {
        alert("Giỏ hàng của bạn đang trống. Vui lòng thêm sản phẩm trước khi thanh toán.");
    }
});