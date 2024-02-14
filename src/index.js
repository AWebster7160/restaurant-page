import homeLoad from './home.js';
import menuLoad from './menu.js';

const home = document.querySelector('#home');
window.onload = menuLoad();

home.addEventListener('click', () => {
    homeLoad();
});

menu.addEventListener('click', () => {
    menuLoad();
})
