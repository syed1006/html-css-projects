const result = document.getElementById('result');
const filter = document.getElementById('filter');
const listItems = [];

fetchUsers(50);

filter.addEventListener('input', (e)=> filterUsers(e.target.value));

function filterUsers(searchTerm){
    listItems.forEach(item =>{
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())){
            item.classList.remove('hide');
        }else{
            item.classList.add('hide');
        }
    })
}

async function fetchUsers(count){
    try {
        const url = `https://randomuser.me/api?results=${count}`
        const res = await fetch(url);
        const {results} = await res.json();

        //clear result element
        result.innerHTML = '';

        results.forEach(user => {
            const li = document.createElement('li');

            listItems.push(li);

            li.innerHTML = `
                <img src=${user.picture.large} alt=${user.name.first} />
                <div class="user-info" >
                    <h4>${user.name.first} ${user.name.last}</h4>
                    <p>${user.location.city}, ${user.location.country}</p>
                </div>    
            `;

            result.appendChild(li);
        });

    } catch (error) {
        console.log(error);;
    }
}