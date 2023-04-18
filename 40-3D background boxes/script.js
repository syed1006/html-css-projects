const boxesContainer = document.getElementById('boxes');
const btn = document.getElementById('btn');

btn.addEventListener('click', ()=> boxesContainer.classList.toggle('big'));

createBoxes()

function createBoxes(){
    for(let i = 0; i < 16; i++){
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.backgroundPosition = `${(i%4) * (-125)}px ${Math.floor(i/4) * (-125)}px`
    
        boxesContainer.appendChild(box);
    }
}