var tabheads = document.querySelectorAll('.tabhead');
var boxes = document.querySelectorAll('.box');

/*
tabheads.forEach(function(elem) {
    elem.addEventListener('click', function() {
        tabheads.forEach(function(elem) {
            elem.classList.remove('active');
        });
        this.classList.add('active');
    });
});
*/

tabheads.forEach(elem => {
    elem.addEventListener('click', function() {
        tabheads.forEach(elem => elem.classList.remove('active'));
        this.classList.add('active');
        boxes.forEach(elem => elem.classList.remove('active'));
        document.getElementById(this.dataset.idFolder).classList.add('active');
    });
});

// измененные данные записать в локал стор
document.querySelector('.user-name').addEventListener('keyup', function() {
    localStorage.setItem('user-name', this.innerHTML);
});
// измененные данные записать в локал стор
document.querySelector('#status').addEventListener('keyup', function() {
    localStorage.setItem('status', this.value);
});
// измененные данные записать в локал стор - tel
document.querySelector('#phone').addEventListener('keyup', function() {
    localStorage.setItem('phone', this.value);
});
// измененные данные записать в локал стор - email
document.querySelector('#email').addEventListener('keyup', function() {
    localStorage.setItem('email', this.innerHTML);
});

// прочитать данные из стора и записать на страницу
if (localStorage.getItem('user-name')) {
    document.querySelector('.user-name').innerHTML = localStorage.getItem('user-name');
}
if (localStorage.getItem('status')) {
    document.querySelector('#status').value = localStorage.getItem('status');
}
if (localStorage.getItem('phone')) {
    document.querySelector('#phone').value = localStorage.getItem('phone');
}
if (localStorage.getItem('email')) {
    document.querySelector('#email').innerHTML = localStorage.getItem('email');
}


var a1 = 345;
var s = 'uydkyd';
var t = [12, 56, 89, 'ui', null];
t.length
t.push(46);
var b = true;
var c = null;
var d = undefined;
var obj = {
    key: 1234,
    gyht: '765kygh'
};
obj.g111 = true;

if (a1 || s) {
    console.log(123);
} else {
    console.log(321);
}

for (var i = 0; i < t.length; i++) {
    console.log(i, t[i]);
}

while (true) {
    console.log('я исполнился ровно один раз!');
    break;
}

function f1(a, b, c) {
    return a + b + c;
}

f1(2, 3, 4);
f1(a1);
