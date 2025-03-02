let h = Number(prompt("Hãy nhập vào giờ"));
let m = Number(prompt("Hay nhâp vào phút"));
let s = Number(prompt("Hay nhâp vào giây"));
let form;
if (h < 0 || h > 23 ||
    m < 0 || m > 59 ||
    s < 0 || s > 59 ||
    isNaN(h) || isNaN(m) || isNaN(s)
) {
    console.log("Thời gian không họp lệ");
} else {
    if (h < 12) {
        form = "AM";
    } else {
        form = "PM";
    }

    let hour = h % 12;

    if (hour === 0) {
        hour = 12;
    }

    let time = `${hour}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')} ${form}`;
    console.log("Giờ 12h:" + time);
}