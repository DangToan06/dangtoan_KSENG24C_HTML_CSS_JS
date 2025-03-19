console.dir(document);

let h1 = document.getElementById("demo-id");
console.log(h1);

//document.getElementById("element") (Lấy các phần tử có cùng id)
// document.getElementsByClassName("element") (Lấy tập hợp các phần tử có cùng class) tương tứng mảng nhưng không phải mảng(không thể sử dụng các phương thức với mảng như filter(),...) mà là HTML collection
// document.getElementsByTagName("element") (lấy ra các phần tử có cùng thẻ vd: lấy ra cacsther div, lấy ra các thẻ h1, ...)

// document.querySelector("element")

// Lấy ra thẻ div có sử dụng id là demo-id và class là demo-class
let div = document.querySelector("div#demo-id.demo-class")
console.log(div);

// document.querySelectorAll("element") 

// lấy ra TẬP HỢP ntất cả các thẻ div có sử dụng class là demo-class
let element = document.querySelectorAll("div.demo-class");


let p = document.getElementById("paragraph");

// .innerHTML
console.log(p.innerHTML); // Lấy ra toàn bộ nội dung là html nằm trong inner ở trong phần tử html

// .innerText
console.log(p.innerText); // Lấy ra toàn bộ nội dung là text ở trong phần tử html nhưng bỏ qua khảng trắng và xuống dòng

// .textContent
console.log(p.textContent); // Lấy ra toàn bộ nội dung là text lấy cả khảng trắng và xuống dòng ở trong phần tử html

// p.getAttribute("tên thuộc tính") lấy ra thuộc tính của thẻ

// p.setAttribute("tên thuộc tính" , "Giá trị cần thay thế") Cập nhật lại thuộc tính của 1 thẻ

//--------------------------------------Quán lý style

let div2 = document.getElementById("demo-style-property");

console.log(div2.style);

// div2.style.backgroundColor = "red";
// div2.style.fontSize = "30px";
// div2.style.color = "white";
// div2.style.width = "300px";
// div2.style.height = "300px";
// div2.style.borderRadius = "50%";
// div2.style.textAlign = "center";
// div2.style.lineHeight = "300px";


console.log(div2.classList) // gần giống như mảng lấy tất cả các class trong một thẻ

// Các phương thức add(), remove(), contains(), toggle()

// Thêm vào classList
div2.classList.add("c4");
console.log(div2.classList);

// Xóa
div2.classList.remove("c4");
console.log(div2.classList);

// Kiểm tra xem có class không
div2.classList.contains("c2"); // flase
div2.classList.contains("c2"); // true

// Tự động kiểm tra nếu có rồi sẽ tự động xóa đi nếu chưa có sẽ tự động thêm vào
div2.classList.toggle("demo-toggle") // c1 c3 c4


div2.classList.toggle("demo-class-list")
