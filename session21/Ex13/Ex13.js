document.write("a.");
document.write(`<br>`);
for (let i = 0; i < 10; i++) {
    for (let j = 0; j <= i; j++) {
        document.write("*");
    }
    document.write(`<br>`);
}
document.write(`<br>`);
document.write("b.");
document.write(`<br>`);
for (let i = 9; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
        document.write("*");
    }
    document.write(`<br>`);
}
document.write(`<br>`);
document.write("c.");
document.write(`<br>`);
for (let i = 0; i < 10; i++) {
    for (let j = 8; j >= i; j--) {
        document.write("&nbsp&nbsp");
    }
    for(let k = 0; k <= i;k++){
        document.write("*");
    }
    document.write(`<br>`);
}
document.write(`<br>`);
document.write("c.");
document.write(`<br>`);
for (let i = 0; i < 10; i++) {
    for(let k = 0; k <= i;k++){
        document.write("&nbsp&nbsp");
    }
    for (let j = 8; j >= i; j--) {
        document.write("*");
    }
    document.write(`<br>`);
}