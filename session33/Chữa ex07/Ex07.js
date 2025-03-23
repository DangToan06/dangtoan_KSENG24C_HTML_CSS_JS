// B1:
// Xây dựng kho lưu trữ dữ liệu mô phỏng

const imgList = [
    {
        id: 1,
        url: "https://static.vecteezy.com/system/resources/thumbnails/045/132/934/small_2x/a-beautiful-picture-of-the-eiffel-tower-in-paris-the-capital-of-france-with-a-wonderful-background-in-wonderful-natural-colors-photo.jpg",
    },
    {
        id: 2,
        url: "https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg",
    },
    {
        id: 3,
        url: "https://www.shutterstock.com/image-photo/natural-hills-picture-growing-shining-600nw-1735499282.jpg",
    },
];

let container = document.getElementById("container");
let modal = document.getElementById("modal");
let img = document.getElementsByTagName("img")[0];

modal.style.display = "none";


// B2: Tính năng render (read)
// Chuyển toàn bộ dữ liệu thành phần tử html xuất hiện trên trình duyệt

for(let i in imgList) {
    // B2.2 Chuyển đổi các đối tượng thành dữ liệu HTML
    let div = `<div class = "img" style = "background-image: url(${imgList[i].url})"></div>`

    //B2.3 Noois các chuỗi với định dạng html vừa tạo ra từ dữ liệu vào làm bên trong là html của container

    container.innerHTML += div;
}

// B3 xay dựng cấu truc html dành cho lớp phủ

// B4 gọi tập hợp thẻ div img và găn sự kiện onclick

let divList = document.getElementsByClassName("img");

for(let i = 0; i < divList.length; i++){
    divList[i].onclick = function (){
        modal.style.display = "flex";
        // B6 trích xuất được url của hình ảnh khi bấm vào
        let url = divList[i].style.backgroundImage;
        // B7 Gắn url đó vào làm src của hình ảnh ở bên trong modal
        url = url.replace(`url("`,"");
        
    }
}



