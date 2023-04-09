const loveMe = document.querySelector('.loveMe');
const times = document.querySelector('#times');

let clickTime = 0;
let clickCount = 0;
//use can use dblclick event also
loveMe.addEventListener('click', (e)=>{
    if(clickTime === 0){
        clickTime = new Date().getTime();
    }else{
        if((new Date().getTime()) - clickTime < 800){
            createHeart(e);
            clickTime = 0;
        }else{
            clickTime = new Date().getTime();
        }
    }
})

function createHeart(e){
    const heart = document.createElement('i');
    heart.classList.add('fas');
    heart.classList.add('fa-heart');

    let x = e.clientX;
    let y = e.clientY;

    let leftOffset = e.target.offsetLeft;
    let topOffset = e.target.offsetTop;

    heart.style.top = `${y-topOffset}px`;
    heart.style.left = `${x-leftOffset}px`;

    loveMe.appendChild(heart);
    times.innerHTML = ++clickCount;
    setTimeout(()=>heart.remove(), 1000);
}