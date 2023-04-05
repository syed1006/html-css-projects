const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button =>{
    button.addEventListener('click', (e)=>{
        const x = e.clientX;
        const y = e.clientY;

        const btnTop = e.target.offsetTop;
        const btnLeft = e.target.offsetLeft;

        button.innerHTML = 'Click Me';
        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.top = y - btnTop + 'px';
        circle.style.left = x - btnLeft + 'px';

        button.appendChild(circle);
    })
})