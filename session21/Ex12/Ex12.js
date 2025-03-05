for(let i = 0; i < 5; i++){
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    console.log("%c Màu sắc đã được thay đổi" , "color: #" + n.slice(0,6) +";");
}