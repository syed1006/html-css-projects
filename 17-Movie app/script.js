const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a56cfd234d5fe7df1a5039e8066a5f8e&page1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=a56cfd234d5fe7df1a5039e8066a5f8e&query="';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

//get initial movies
getMovies(API_URL)

async function getMovies(url){
    const res = await fetch(url);
    const data = await res.json();
    showMovies(data.results);
}

function showMovies(movies){
    main.innerHTML = '';

    movies.forEach(movie => {
        const { title, poster_path, vote_average, overview } = movie;

        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');

        movieEl.innerHTML = `
        <img src="${IMG_PATH + poster_path}" alt="${title}">
        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${vote_average < 5 ? 'red' : vote_average < 8 ? 'orange': 'green'}">${vote_average}</span>
        </div>
        <div class="overview">
            <h3>Overview</h3>
            ${overview}
        </div>`;

        main.appendChild(movieEl);
    })
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const searchTerm = search.value;

    if(searchTerm && searchTerm !== ''){
        getMovies(SEARCH_URL + searchTerm);

        search.value = '';
    }else{
        window.location.reload();
    }
})