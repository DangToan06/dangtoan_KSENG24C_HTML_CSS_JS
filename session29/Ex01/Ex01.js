class Contact {
    constructor(id, name, email, phone) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
}

let contact = [];

let menu = `
    1. Thêm đối tượng Contact vào danh sách liên hệ.
    2. Hiển thị danh sách danh bạ.
    3. Tìm kiếm thông tin Contact theo số điện thoại.
    4. Cập nhật thông tin Contact(name, email, phone) theo id.
    5. Xóa một đối tượng Contact  khỏi danh sách danh bạ theo id.
    6. Thoát.
    
    Nhập vào lựa chọn của bạn:`;

let choice;

while (choice !== 6) {
    choice = Number(prompt(menu));
    switch (choice) {
        case 1:
            let id = Math.floor(Math.random() * 100);
            let name = prompt("Nhập tên người liên hệ");
            let email = prompt("Nhập email người liên hệ");
            let phone = prompt("Nhập số điện thoại người liên hệ");
            contact.push(new Contact(id, name, email, phone));
            dispalyContact();
            break;
        case 2:
            dispalyContact();
            break;
        case 3:
            let searchPhone = prompt("Nhập số điện thoại muốn tìm kiếm");
            let findIndex = search("phone", searchPhone);
            if (findIndex === -1) {
                console.log("Không tìm thấy thông tin sách");
            } else {
                displayOneContact(contact[findIndex], findIndex);
            }
            break;
        case 4:
            let searchId = Number(prompt("Nhập id bạn muốn cập nhật"));
            let updateIndex = search("id", searchId);
            if(updateIndex === -1){
                console.log("Không tìm thấy id ban cần tìm");
            }else{
                contact[updateIndex].name = prompt("Cập nhật tên người liên hệ");
                contact[updateIndex].email = prompt("Cập nhật email người liên hệ");
                contact[updateIndex].phone = prompt("Cập nhật số điện thoại người liên hệ");
            }
            break;
        case 5:
            let deleteContact = Number(prompt("Nhập id bạn muốn xóa"));
            let deleteIndex = search("id", deleteContact);
            if(deleteIndex === -1){
                console.log("Không tìm thấy id ban cần tìm");
            }else{
                contact.splice(deleteIndex,1);
            }
            break;
        case 6:
            console.log("Thanks for using menu");
            break;
        default:
            break;
    }
}

function dispalyContact() {
    contact.forEach((contact, index) => {
        console.log("Contact thứ: " + (index + 1));
        console.log("Id người liên hệ là: " + contact.id);
        console.log("Tên người liên hệ là: " + contact.name);
        console.log("Email người liên hệ là: " + contact.email);
        console.log("Sđt người liên hệ là: " + contact.phone);
        console.log("---------------------------------------------");
    })
}

function search(key, value) {
    findIndex = -1;
    for (let i in contact) {
        if (value === contact[i][key]) {
            findIndex = i;
            break;
        }
    }
    return findIndex;
}

function displayOneContact(contact, index) {
    console.log("Contact bạn cần tìm là:");
    console.log("Id người liên hệ là: " + contact.id);
    console.log("Tên người liên hệ là: " + contact.name);
    console.log("Email người liên hệ là: " + contact.email);
    console.log("Sđt người liên hệ là: " + contact.phone);
    console.log("---------------------------------------------");
}