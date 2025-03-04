    let num = Number(prompt("Nhập vào một số"));
    let count = 0;
    let i = 2;

    if(isNaN(num) || num < 1){
        console.log("Không hợp lệ");
    }else{
        while(count < num){
            let check = true;

            for(let j = 2; j <= Math.sqrt(i); j++){
                if (i % j === 0){
                    check = false;
                    break;
                }
            }
            if(check){
                console.log(i);
                count++;
            }
            if(count === num){
                break;
            }
            i++;
        }
    }

