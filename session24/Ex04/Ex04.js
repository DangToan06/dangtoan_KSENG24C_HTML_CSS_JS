let menu = `
    1.Nhập mảng 2 chiều
    2.Hiển thị mảng 2 chiều
    3.Tính tổng các phần tử trong Mảng
    4.Tìm phần tử lớn nhất trong mảng và chỉ số của nó
    5.Tính trung bình cộng của các phần tử của một hàng cụ thể
    6.Đảo ngược cac shangf trong mảng
`
let arr = [];
let sum = 0;
let indexRow;
let indexCol;
let average;
let arr2;
let exit = true;
let n;
let m;
let chose;
let max;

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
            break;
        case 4:
            max = arr[0][0];
            for(let i = 0; i < n; i++){
                for(let j = 0; j < m; j++){
                    if(arr[i][j] > max){
                        max = arr[i][j];
                    }
                }
            }
            console.log("Phần tử lớn nhất trong mảng là" +max);
            break;
        case 5:
            let row;
            row = Number(prompt("Nhập hàng cần tính trung bình cộng"));
            while(row < 0 || row >= n){
                row = Number(prompt("Nhập lại"));
            }
            for(let i = 0; i < m; i++){
                sum += arr[row][i];
            }
            average = sum / m;
            console.log("Trung bình cộng của hàng " + row + " là " + average);
            break;
        case 6:
            arr2 = arr.reverse();
            console.log(arr2);
            break;
        case 7:
            exit = false;
            break;            
    }
}