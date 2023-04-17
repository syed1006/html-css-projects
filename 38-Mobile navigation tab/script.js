const images = document.querySelectorAll('.phone .content');
const liEls = document.querySelectorAll('li');


liEls.forEach((li, idx)=>{
    li.addEventListener('click', ()=>{
        removeShowAndActive();
        li.classList.add('active');
        images[idx].classList.add('show');
    })
})

function removeShowAndActive(){
    images.forEach(image => image.classList.remove('show'));

    liEls.forEach(li => li.classList.remove('active'));
}