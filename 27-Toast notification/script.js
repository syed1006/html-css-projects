const btn = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four'
];

btn.addEventListener('click', createNotification);

function createNotification(){
    let idx = Math.floor(Math.random() *messages.length);
    const toast = document.createElement('div');
    toast.classList.add('toast');
    if(idx < 1){
        toast.classList.add('success');
    }
    else if(idx > 2){
        toast.classList.add('error');
    }else{
        toast.classList.add('info');
    }
    toast.innerText = messages[idx];
    toasts.appendChild(toast);

    setTimeout(()=>{
        toasts.removeChild(toast);
    }, 3000);
}