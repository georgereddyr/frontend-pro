//1
window.addEventListener('mousemove', (e) => {
    document.getElementById('globalCoordinates').textContent = (`Глобальные координаты - x: ${e.clientX}, y: ${e.clientY}`);
});

const box = document.querySelector('.box');
const x = document.getElementById('x');
const y = document.getElementById('y');

function getBoxCoordinates(e) {
    x.textContent = (`x: ${e.pageX - this.offsetLeft}`);
    y.textContent = (`y: ${e.pageY - this.offsetTop}`);
}

box.addEventListener('mousemove', getBoxCoordinates);
box.addEventListener('mouseenter', getBoxCoordinates);
box.addEventListener('mouseleave', getBoxCoordinates);


//2
function getTime() {
    const time = document.querySelector('#time');
    time.innerHTML = new Date().toTimeString().replace(/ .*/, '');
}

let t = setInterval(getTime);

const start = document.querySelector('#start').addEventListener('click', () => {
    clearInterval(t);
    t = setInterval(getTime);
});

const stop = document.querySelector('#stop').addEventListener('click', () => {
    clearInterval(t);
});