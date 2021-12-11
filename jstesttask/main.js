const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
let score = document.getElementById('score');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.addEventListener('click', handleMouse);

let rect = canvas.getBoundingClientRect();
let counter = 0;
let x = randomiser(canvas.width - 20) - 20;
let y = -20;
let speed = randomiser(4, 1);
const colors = ['#fd5151', '#adfd51', '#51fd7c', '#51fdfd', '#5154fd', '#d551fd', '#fd5193'];
let currentColor = randomiser(colors.length - 1, );
let animationRequest;

function handleGame() {
    startBtn.addEventListener('click', () => {
        counter = 0;
        start()
    });
    stopBtn.addEventListener('click', () => {
        stop();
    })
}

function handleMouse(event) {
    let mouseX = event.clientX - rect.left;
    let mouseY = event.clientY - rect.top;
    if (mouseX >= x && mouseX <= x + 20 && mouseY >= y - 30 && mouseY <= y + 20) {
        clearPosition();
        counter++;
        score.innerHTML = 'counter';
    }
}

function randomiser(max, min = 0, prevValue) {
    let result = Math.floor(Math.random() * (max - min + 1)) + min;

    if (result == prevValue && prevValue != undefined) {

        return randomiser(max, min = 0, prevValue);
    }

    return result;
}

function animate() {
    animationRequest = undefined;

    if (y >= canvas.height) {
        clearPosition();
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.strokeRect(x, y, 20, 20);
    ctx.rect(x, y, 20, 20);
    ctx.fillStyle = colors[currentColor];
    ctx.fill();
    y += speed;

    start()
}

function clearPosition() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    y = -20;
    speed = randomiser(4, 1);
    x = randomiser(canvas.width - 20);
    currentColor = randomiser(colors.length - 1, 0, currentColor);
}

function start() {
    if (!animationRequest) {
        animationRequest = requestAnimationFrame(animate);
        score.innerHTML = counter;
    }
}

function stop() {
    if (animationRequest) {
        window.cancelAnimationFrame(animationRequest);
        animationRequest = undefined;
        clearPosition();
    }
}

document.body.onload = handleGame;