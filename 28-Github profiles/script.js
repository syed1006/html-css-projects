const APIURL = 'https://api.github.com/users/';

const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

async function getUser(username) {
    try {
        const { data } = await axios.get(APIURL + username);
        creatUserCard(data);
        getRepos(username);
    } catch (error) {
        if(error.response.status == 404){
            createErrorCard('No profile with this username');
        }
    }
}

async function getRepos(username) {
    try {
        const { data } = await axios.get(APIURL + username + '/repos?sort=ceated');
        addReposToCard(data);
    } catch (error) {
        createErrorCard('Problem fetching repos');
    }
}

function creatUserCard(user) {
    const cardHTML = `
        <div class="card">
            <div>
                <img class="avatar" src="${user.avatar_url}" alt="">
            </div>
            <div class="user-info">
                <h2>${user.name}</h2>
                <p>${user.bio}</p>

                <ul>
                    <li>${user.followers} <strong>Followers</strong></li>
                    <li>${user.following} <strong>Following</strong></li>
                    <li>${user.public_repos} <strong>Repos</strong></li>
                </ul>

                <div id="repos"></div>
            </div>
        </div>
    `

    main.innerHTML = cardHTML;
}

function createErrorCard(msg){
    const cardHTML = `
        <div class="card" >
            <h1>${msg}</h1>
        </div>
    `
    main.innerHTML = cardHTML;
}

function addReposToCard(repos){
    const reposEl = document.getElementById('repos');

    repos.slice(0, 10)
        .forEach(repo =>{
            const repoTag = document.createElement('a');
            repoTag.classList.add('repo');
            repoTag.href = repo.html_url;
            repoTag.innerText = repo.name;
            repoTag.target = '_blank';
            reposEl.appendChild(repoTag);
        })
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const user = search.value;
    if (user) {
        getUser(user);

        search.value = '';
    }
})