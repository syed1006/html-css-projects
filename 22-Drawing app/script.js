const canvas = document.getElementById('canvas');
const decreaseBtn = document.getElementById('decrease');
const increaseBtn = document.getElementById('increase');
const displaySpan = document.getElementById('size');
const clearBtn = document.getElementById('clear');
const colorBtn = document.getElementById('color');
const context = canvas.getContext('2d');

let size = 10;
let color = 'black';
let isPressed = false;
let x;
let y;

decreaseBtn.addEventListener('click', ()=>{
    if(size > 5){
        size -= 5;
        displaySpan.innerText = size;
    }
})

increaseBtn.addEventListener('click', ()=>{
    if(size < 50){
        size += 5;
        displaySpan.innerText = size;
    }
})

colorBtn.addEventListener('change', (e)=>{
    color = e.target.value;
})

canvas.addEventListener('mousedown', (e)=>{
    isPressed = true;

    x = e.offsetX;
    y = e.offsetY;
})

canvas.addEventListener('mouseup', ()=>{
    isPressed = false;

    x = undefined;
    y = undefined;
})

canvas.addEventListener('mousemove', (e)=>{
    if(isPressed){
        let x2 = e.offsetX;
        let y2 = e.offsetY;

        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);

        x = x2; y = y2;
    }
})

clearBtn.addEventListener('click', ()=>{
    context.clearRect(0, 0, canvas.width, canvas.height)
})

function drawCircle(x, y){
    context.beginPath();
    context.arc(x, y, size, 0, Math.PI * 2);
    context.fillStyle = color;
    context.fill();
}

function drawLine(x1, y1, x2, y2){
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.strokeStyle = color;
    context.lineWidth = size * 2;
    context.stroke();
}

