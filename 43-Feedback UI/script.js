const ratings = document.querySelectorAll('.rating');
const sendBtn = document.getElementById('send');
const panel = document.getElementById('panel');
let selectedRating = 'Satisfied';

panel.addEventListener('click', (e)=>{

    if(e.target.parentNode.classList.contains('rating')){
        removeActive();
        e.target.parentNode.classList.add('active');
        selectedRating = e.target.nextElementSibling.innerText;
    }
})

sendBtn.addEventListener('click', (e)=>{
    e.stopPropagation();
    panel.innerHTML =`
        <i class="fas fa-heart" ></i>
        <strong>Thank you !</strong>
        <br/>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use you rating to improve our customer support.</p>
    `
})

function removeActive(){
    ratings.forEach(ele => ele.classList.remove('active'));
}