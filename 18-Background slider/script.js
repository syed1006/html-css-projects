const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let currActive = 0;

setBgToBody()

leftBtn.addEventListener('click', ()=>{
    if(currActive > 0){
        currActive--;
    }else{
        currActive = slides.length - 1;
    }
    setActiveSlide();
    setBgToBody();
})

rightBtn.addEventListener('click', ()=>{
    if(currActive < slides.length - 1){
        currActive++;
    }else{
        currActive = 0;
    }
    setActiveSlide();
    setBgToBody();
})

function setBgToBody(){
    body.style.backgroundImage = slides[currActive].style.backgroundImage;
}

function setActiveSlide(){
    slides.forEach(slide => slide.classList.remove('active'));

    slides[currActive].classList.add('active');
}