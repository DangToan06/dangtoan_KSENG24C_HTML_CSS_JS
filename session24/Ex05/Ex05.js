let menu =`
    1. Nhập mảng 2 chiều
    2. Hiển thị mảng 2 chiều
    3. Tính tổng các phần tử trong mảng
    4. Tính tổng theo đường chéo chính
    5. Tính tổng theo đường chéo phụ
    6. Tính trung bình cộng các phần tử trong một hàng hoặc một cột (do người dùng chọn)
    7. Thoát chương trình
`

let arr = [];
let sum = 0;
let sumMain;
let sumSub;
let average;
let exit = true;
let n;
let m;
let chose;

while(exit){
    chose = Number(prompt(menu));
    switch(chose){
        case 1:
            n = Number(prompt("Nhập số hàng"));
            m = Number(prompt("Nhập số cột"));
            for(let i = 0; i < n; i++){
                arr[i] = [];
                for(let j = 0; j < m; j++){
                    arr[i][j] = Number(prompt());
                }
            }
            break;
        case 2:
            for(let i = 0; i < n; i++){
                for(let j = 0; j < m; j++){
                    console.log(arr[i][j]);
                }
            }
            break;
        case 3:
            for(let i = 0; i < n; i++){
                for(let j = 0; j < m; j++){
                    sum += arr[i][j];
                }
            }
            console.log("Tổng các phần tử trong mảng là: " + sum);
            break;
        case 4:
            sumMain = 0;
            for(let i = 0; i < n; i++){
                sumMain += arr[i][i];
            }
            console.log("Tổng các phần tử trong đường chéo chính là: " + sumMain);
            break;
        case 5:
            sumSub = 0;
            for(let i = 0; i < n; i++){
                sumSub += arr[i][n - 1 - i];
            }
            console.log("Tổng các phần tử trong đường chéo phụ là: " + sumSub);
            break;
        case 6:
            let rowCol = Number(prompt("Bạn muốn tính trung bình cộng của hàng hay cột? (Nhập 1 nếu là hàng, 2 nếu là cột)"));
            let index = Number(prompt("Nhập chỉ số hàng hoặc cột"));
            while(index < 0 || (rowCol === 1 && index >= n) || (rowCol === 2 && index >= m)){
                index = Number(prompt("Nhập lại"));
            }
            average = 0;
            if(rowCol === 1){
                for(let i = 0; i < m; i++){
                    average += arr[index][i];
                }
                console.log("Trung bình cộng của hàng " + index + " là: " + (average / m));
            } else {
                for(let i = 0; i < n; i++){
                    average += arr[i][index];
                }
                console.log("Trung bình cộng của cột " + index + " là: " + (average / n));
            }
            break;
        case 7:
            exit = false;
            break;
    }
}
