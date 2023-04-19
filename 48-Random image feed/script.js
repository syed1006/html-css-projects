const container = document.querySelector('.container');
const rows = 10;

for(let i = 0; i < 3 * rows; i++){
    const img = document.createElement('img');
    img.src = `https://source.unsplash.com/random/?random/${300 + Math.floor(Math.random()*10)}x${300 + Math.floor(Math.random()*10)}`;

    container.appendChild(img);
}