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