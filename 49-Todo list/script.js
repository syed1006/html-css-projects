const form = document.getElementById('form');
const input = document.getElementById('input');
const todoUl = document.getElementById('todos');

const todos = JSON.parse(localStorage.getItem('todos'));
if(todos){
    todos.forEach(todo => {
        addTodo(todo);
    });
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    addTodo();
})

function addTodo(todo){
    let todoText = input.value;
    if(todo){
        todoText = todo.text;
    }

    if(todoText){
        const li = document.createElement('li');
        if(todo && todo.completed){
            li.classList.add('completed');
        }

        li.addEventListener('click', ()=> {
            li.classList.toggle('completed');
            updateLs()
        });

        li.addEventListener('contextmenu', (e)=>{
            e.preventDefault();

            li.remove();
            updateLs()
        });

        li.innerText = todoText;
        todoUl.appendChild(li);
        input.value = '';

        updateLs();
    }

}

function updateLs(){
    const todoLis = document.querySelectorAll('li');

    const todos = [];

    todoLis.forEach(todoli => {
        todos.push({
            text: todoli.innerText,
            completed: todoli.classList.contains('completed')
        })
    })

    localStorage.setItem('todos', JSON.stringify(todos));
}