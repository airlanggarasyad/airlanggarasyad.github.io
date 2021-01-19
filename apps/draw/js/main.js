const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const clearButton = document.querySelector('.clear');
const stroke = document.querySelector('.stroke');

canvas.addEventListener('mousedown', start);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stop);

clearButton.addEventListener('click', clearCanvas);
stroke.addEventListener('change', stroke);

function start(e) {
    isPainting = true;
    draw(e);
}

function draw({clientX: x, clientY: y}) {
    if(!isPainting) return;
    ctx.lineWidth = stroke.value;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#FFF'

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
}

function stop() {
    isPainting = false;
    ctx.beginPath();
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

window.addEventListener('resize', resizeCanvas);
function resizeCanvas() {
    canvas.width = window.innerWidth * 0.97;
    canvas.height = window.innerHeight * 0.7;
}
resizeCanvas();

