import homeLoad from './home.js';
import menuLoad from './menu.js';
import contactLoad from './contact.js';

const home = document.querySelector('#home-btn');
const menu = document.querySelector('#menu-btn');
const contact = document.querySelector('#contact-btn');

window.onload = homeLoad();

home.addEventListener('click', () => {
    homeLoad();
});

menu.addEventListener('click', () => {
    menuLoad();
})

contact.addEventListener('click', () => {
    contactLoad();
})