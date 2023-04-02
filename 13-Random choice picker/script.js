const tagsEle = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus()

textarea.addEventListener('keyup', (e)=>{
    createTags(e.target.value);

    if(e.key === 'Enter'){
        setTimeout(()=>{
            e.target.value = '';
        }, 10)

        selectRandom();
    }
})

function createTags(str){
    const tags = str.split(',').filter(tag => tag.trim()!== '').map(tag => tag.trim());
    tagsEle.innerHTML = '';
    tags.forEach(tag =>{
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerText = tag;
        tagsEle.appendChild(tagEl);
    })
}

function selectRandom(){
    const times = 30 ;

    const interval = setInterval(()=>{
        const randomTag = pickRandomTag();

        if(randomTag !== undefined){
            highLightTag(randomTag);
            setTimeout(()=>{
                unHighlightTag(randomTag);
            }, 100)
        }
    }, 100)

    setTimeout(()=>{
        clearInterval(interval);
        const randomTag = pickRandomTag();
        if(randomTag !== undefined){
            setTimeout(()=>{
                highLightTag(randomTag);
            }, 100)
        }
    }, times * 100)
}

function pickRandomTag(){
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];
}

function highLightTag(tag){
    tag.classList.add('highlight');
}

function unHighlightTag(tag){
    tag.classList.remove('highlight');
}