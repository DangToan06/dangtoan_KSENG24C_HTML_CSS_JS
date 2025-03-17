class Food{
    constructor(name, price, detail){
        this.name = name;
        this.price = price;
        this.detail = detail;
    }
}

let menu = `
----------MENU----------
1. Thêm món ăn vào danh mục.
2. Xóa món ăn theo tên khỏi danh mục.
3. Cập nhật thông tin theo tên của món ăn  (tên, giá, mô tả).
4. Hiển thị toàn bộ menu gồm từng danh mục và từng món ăn.
5. Tìm kiếm món ăn theo tên trong toàn bộ menu.
6. Thoát

Nhập vào lựa chọn của bạn:`;

let choice;
let food = [];

while(choice !== 6){
    choice = Number(prompt(menu));
    switch(choice){
        case 1:
            let name = prompt("Nhập vào tên món ăn");
            let price = Number(prompt("Nhập vào giá món ăn"));
            let detail = prompt("Nhập vào mô tả món ăn");
            food.push(new Food(name, price, detail));
            break;
        case 2:
            let deleteFood = prompt("Nhập vào tên món ăn muốn xóa");
            let deleteIndex = search("name", deleteFood);
            if(deleteIndex === -1){
                console.log("Không tìm thấy món ăn cần xóa");
            }else{
                food.splice(deleteIndex, 1);
            }
            break;
        case 3:
            let updateFood = prompt("Nhập vào tên món ăn muốn cập nhật");
            let updateIndex = search("name", updateFood);
            if(updateIndex === -1){
                console.log("Không tìm thấy món ăn cần cập nhật");
            }else{
                food[updateIndex].name = prompt("Cập nhật tên món ăn");
                food[updateIndex].price = Number(prompt("Cập nhật giá món ăn"));
                food[updateIndex].detail = prompt("Cập nhật mô tả món ăn");
            }
            break;
        case 4:
            displayFood();
            break;
        case 5:
            let searchFood = prompt("Nhập vào tên món ăn muốn tìm");
            let findIndex = search("name", searchFood);
            if(findIndex === -1){
                console.log("Không tìm thấy món ăn cần tìm");
            }else{
                displayOneFood(food[findIndex], findIndex);
            }
            break;
    }
}

function search(property, value){
    for(let i = 0; i < food.length; i++){
        if(food[i][property] === value){
            return i;
        }
    }
    return -1;
}

function displayFood(){
    food.forEach((food, index) => {
        console.log("Món ăn thứ " + (index + 1));
        console.log("Tên món ăn: " + food.name);
        console.log("Giá món ăn: " + food.price);
        console.log("Mô tả món ăn: " + food.detail);
    });
}

function displayOneFood(food, index){
    console.log("Món ăn thứ " + (index + 1));
    console.log("Tên món ăn: " + food.name);
    console.log("Giá món ăn: " + food.price);
    console.log("Mô tả món ăn: " + food.detail);
}
