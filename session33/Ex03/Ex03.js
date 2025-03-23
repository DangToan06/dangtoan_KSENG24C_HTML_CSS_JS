let dish = [
    { name: "Rau sạch", category: "Đồ ăn" },
    { name: "Thịt lợn", category: "Đồ ăn" },
    { name: "Pepsi không calo", category: "Nước" },
    { name: "Cocacola", category: "Nước" },
    { name: "Cờ lê", category: "Dụng cụ" },
    { name: "Tuy vít", category: "Dụng cụ" }
];

const categorySelect = document.getElementById("category-select");
const filterBtn = document.getElementById("filter-btn");
const resultList = document.getElementById("result");

function filterProducts() {
    let selectedCategory = categorySelect.value;
    resultList.innerHTML = "";

    let filteredProducts = dish.filter(item => item.category === selectedCategory);

    if (filteredProducts.length === 0) {
        resultList.innerHTML = "<li>Không có sản phẩm nào!</li>";
    } else {
        filteredProducts.forEach(item => {
            let li = document.createElement("li");
            li.innerHTML = `<b>Tên đồ ăn:</b> ${item.name} - <b>Danh mục:</b> ${item.category}`;
            resultList.appendChild(li);
        });
    }
}

filterBtn.addEventListener("click", filterProducts);
