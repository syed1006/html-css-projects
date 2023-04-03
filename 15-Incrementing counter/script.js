const counters = document.querySelectorAll('.counter');

counters.forEach(counter =>{
    counter.innerText = '0';

    const updateCounter = ()=>{
        let target = parseInt(counter.getAttribute('data-target'));
        let curr = parseInt(counter.innerText);

        let increment = target / 200;

        if(curr < target){
            counter.innerText = `${Math.ceil(curr + increment)}`;
            setTimeout(updateCounter, 3);
        }else{
            counter.innerText = target;
        }
    }

    updateCounter();
})