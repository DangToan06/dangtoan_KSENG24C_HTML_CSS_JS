class Job {
    constructor(id, name, detail, timeStart, status) {
        this.id = id;
        this.name = name;
        this.detail = detail;
        this.timeStart = timeStart;
        this.status = status;
    }
}

let menu = `
----------MENU----------
    1. Thêm công việc mới.
    2. Hiển thị tất cả các công việc.
    3. Cập nhật trạng thái công việc theo ID.
    4. Lọc công việc theo trạng thái (Hoàn thành / Chưa hoàn thành).
    5. Sắp xếp công việc theo trạng thái.
    6. Thoát.
    
    Mời bạn chọn: `;

let jobs = [];
let choice;

while (true) {
    choice = Number(prompt(menu));
    
    if (choice === 6) {
        console.log("Thoát chương trình.");
        break;
    }

    switch (choice) {
        case 1:
            let id = Math.floor(Math.random() * 1000);
            let name = prompt("Nhập tên công việc:");
            let detail = prompt("Nhập mô tả công việc:");
            let timeStart = prompt("Nhập thời gian bắt đầu:");
            let status = prompt("Nhập trạng thái (Hoàn thành / Chưa hoàn thành):");
            jobs.push(new Job(id, name, detail, timeStart, status));
            console.log("Công việc đã được thêm.");
            break;

        case 2:
            displayJobs();
            break;

        case 3:
            let updateId = Number(prompt("Nhập ID công việc cần cập nhật trạng thái:"));
            let index = searchById(updateId);
            if (index === -1) {
                console.log("Không tìm thấy công việc có ID này.");
            } else {
                jobs[index].status = prompt("Nhập trạng thái mới (Hoàn thành / Chưa hoàn thành):");
                console.log("Cập nhật trạng thái thành công.");
            }
            break;

        case 4:
            let filterStatus = prompt("Nhập trạng thái muốn lọc (Hoàn thành / Chưa hoàn thành):");
            let filteredJobs = jobs.filter(job => job.status.toLowerCase() === filterStatus.toLowerCase());
            if (filteredJobs.length === 0) {
                console.log("Không có công việc nào có trạng thái này.");
            } else {
                console.table(filteredJobs);
            }
            break;

        case 5:
            jobs.sort((a, b) => a.status.localeCompare(b.status));
            console.log("Đã sắp xếp công việc theo trạng thái.");
            displayJobs();
            break;

        default:
            console.log("Lựa chọn không hợp lệ. Vui lòng nhập từ 1 đến 6.");
    }
}

function displayJobs() {
    if (jobs.length === 0) {
        console.log("Danh sách công việc trống.");
    } else {
        console.table(jobs);
    }
}

function searchById(id) {
    return jobs.findIndex(job => job.id === id);
}
