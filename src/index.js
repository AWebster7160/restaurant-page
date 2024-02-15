import homeLoad from './home.js';
import menuLoad from './menu.js';

const home = document.querySelector('#home-btn');
const menu = document.querySelector('#menu-btn');

window.onload = menuLoad();

home.addEventListener('click', () => {
    homeLoad();
});

menu.addEventListener('click', () => {
    menuLoad();
})
