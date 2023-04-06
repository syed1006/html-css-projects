const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profileImg = document.getElementById('profile-img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animatedBgs = document.querySelectorAll('.animated-bg');
const animatedBgTexts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 3000);

function getData(){
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1531266752426-aad472b7bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d29ybGR8ZW58MHx8MHx8&auto=format&fit=crop&q=60" alt="">';

    title.innerHTML = 'Lorem ipsum dolor sit amet.';
    excerpt.innerHTML = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab enim excepturi, sit neque nostrum quos.';

    profileImg.innerHTML = '<img src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YW5pbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=200&h=200&q=60" alt="">';

    name.innerHTML = 'Syed Salman';
    date.innerHTML = 'OCT 06, 2020';

    animatedBgs.forEach(ele => ele.classList.remove('animated-bg'));
    animatedBgTexts.forEach(ele => ele.classList.remove('animated-bg-text'));
}