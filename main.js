function calculator() {
    var button = document.getElementsByClassName('btn');
    var input = document.getElementsByClassName('input')[0];    
    for (const btn of button) {
        btn.addEventListener('click', () => {
            if (input.value == '0') {
                input.value = '';
                if (btn.innerText == '=') {
                    input.value = '0'
                }
            }
            
            if (btn.innerText == 'AC') {
                input.value = '0';
            }
            else if (btn.innerText == 'DEL') {
                arrText = Array.from(input.value);
                arrText.pop();
                if (input.value == '0') {
                    input.value = '0'
                } else {
                    input.value = arrText.join('');
                }
            } else if(btn.innerText == '=') {
                input.value = eval(input.value);
            } else if(btn.innerText == 'X2') {
                input.value *= input.value;
            } else if (btn.innerText == button[5].innerText) {
                input.value = Math.sqrt(input.value)
            } 
            else input.value += btn.innerText;
        })
    }
}
calculator();

dateNow = () => {
    var d = new Date();
    var date = formatDate(d);
    document.getElementsByClassName('time-now')[0].innerHTML = date;
}
formatDate = (day) => {
    var year = day.getFullYear();
    var month = day.getMonth()+1;
    var date = day.getDate();
    var days = day.getDay();
    switch (days) {
        case 1: days = "Thứ Hai"
            break;
        case 2: days = "Thứ Ba"
            break;
        case 3: days = "Thứ Tư"
            break;
        case 4: days = "Thứ Năm"
            break;
        case 5: days = "Thứ Sáu"
            break;
        case 6: days = "Thứ Bảy"
            break;
        case 7: days = "Chủ Nhật"
            break;
    }
    var hours = day.getHours();
    var minute = day.getMinutes().toString();
    var minute = minute.toString();
    if (minute.length === 1) {
        minute = "0" + minute;
    }
    var second = day.getSeconds().toString();
    if (second.length === 1) {
        second = "0" + second;
    }
    return `${days}, ${date}/${month}/${year} - ${hours}:${minute}:${second}`; 
}
dateNow();
var d = new Date();
setInterval(() => {
    dateNow();
},1000);
