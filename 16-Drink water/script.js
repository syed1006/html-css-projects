const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const remained = document.getElementById('remained');
const percent = document.getElementById('percentage');

updateBigCup();

smallCups.forEach((cup, idx)=>{
    cup.addEventListener('click', ()=>highlightCups(idx))
})

function highlightCups(idx){
    if(smallCups[idx].classList.contains('full') && !smallCups[idx+1]?.classList.contains('full')){
        idx--;
    }
    smallCups.forEach((cup, ind)=>{
        if(ind <= idx){
            cup.classList.add('full');
        }else{
            cup.classList.remove('full');
        }
    })

    updateBigCup();
}

function updateBigCup(){
    const fullCups = document.querySelectorAll('.cup-small.full').length;
    const totalCups = smallCups.length;

    if(fullCups === 0){
        percent.style.visibility = 'hidden';
        percent.style.height = 0;
        liters.innerText = '2 L'
    }else{
        percent.style.visibility = 'visible';
        percent.style.height = `${fullCups / totalCups * 330}px`;
        percent.innerText = `${(fullCups/totalCups * 100)} %`;
        liters.innerText = `${2 - fullCups * 0.25} L`;
    }

    if(fullCups === totalCups){
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    }else{
        remained.style.visibility = 'visible';
    }
}