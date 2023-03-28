const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', showBoxes);

function showBoxes(){
    const trigger = window.innerHeight / 5 * 4;
    boxes.forEach(box => {
        //getting the top position of the box;
        const boxTop = box.getBoundingClientRect().top;
        if(boxTop < trigger){
            box.classList.add('show');
        }else{
            box.classList.remove('show')
        }
    })
}

showBoxes();