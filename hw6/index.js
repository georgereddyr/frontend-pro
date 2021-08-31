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
    let time = new Date(),
        minutes = time.getMinutes().toString(),
        hours = time.getHours().toString(),
        seconds = time.getSeconds().toString();
    document.getElementById('time').textContent = hours + ':' + minutes + ':' + seconds;
}

const t = setInterval(getTime);

const start = document.getElementById('start').addEventListener('click', () => {
    setInterval(getTime);
});

const stop = document.getElementById('stop').addEventListener('click', () => {
    clearInterval(t);
});