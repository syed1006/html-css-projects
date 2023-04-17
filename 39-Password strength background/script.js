const passwordEl = document.getElementById('password');
const backgroundEl = document.querySelector('.background');

passwordEl.addEventListener('input', ()=>{
    backgroundEl.style.filter = `blur(${20 - passwordEl.value.length * 2}px)`;
})