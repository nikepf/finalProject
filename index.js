let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector(`.btn2`);
let btn3 = document.querySelector(`.btn3`);


btn1.addEventListener('click', function(){
    var win = window.open('index2.html');
    win.document.body.innerHTML = "HTML";
});

btn2.addEventListener('click', function(){
    var win = window.open('index2.html');
    win.document.body.innerHTML = "HTML";
});

btn3.addEventListener('click', function(){
    var win = window.open('index2.html');
    win.document.body.innerHTML = "HTML";
});

