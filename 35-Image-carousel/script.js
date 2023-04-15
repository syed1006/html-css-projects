const imageContainer = document.getElementById('images');
const prevBtn = document.getElementById('left');
const nextBtn = document.getElementById('right');

let currIdx = 0;
let timer;

prevBtn.addEventListener('click', ()=>{
    currIdx--;
    slideImage();
    clearTimeout(timer);
    timer = setTimeout(autoSlide, 2000);
})

nextBtn.addEventListener('click', ()=>{
    currIdx++;
    slideImage();
    clearTimeout(timer);
    timer = setTimeout(autoSlide, 2000);
})

autoSlide();

function slideImage(){
    
    if(currIdx === imageContainer.childElementCount){
        currIdx  = 0;
    }
    else if(currIdx < 0){
        currIdx = imageContainer.childElementCount - 1 ;
    }
    
    imageContainer.style.transform = `translateX(${currIdx * (-500)}px)`;

}

function autoSlide(){
    currIdx++;
    slideImage();
    timer = setTimeout(autoSlide, 2000);
}