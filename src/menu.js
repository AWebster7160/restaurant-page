import './menu.css';

export default function menuLoad() {
    const container = document.querySelector('#container');
    while (container.lastChild) {
        container.removeChild(container.lastChild);
    }
    container.style.backgroundImage = 'none';
    const menu = document.createElement('div');
    menu.setAttribute('id', 'menu');
    container.appendChild(menu);
    const menuLeft = document.createElement('div');
    menuLeft.setAttribute('id', 'menu-left');
    menu.appendChild(menuLeft);
    const menuRight = document.createElement('div');
    menuRight.setAttribute('id', 'menu-right');
    menu.appendChild(menuRight);
    const menuRightWrapper = document.createElement('div');
    menuRightWrapper.setAttribute('id', 'right-wrapper');
    menuRight.appendChild(menuRightWrapper);
    const specials = document.createElement('div');
    specials.setAttribute('id', 'specials');
    menuLeft.appendChild(specials);
    const sashimi = document.createElement('div');
    sashimi.setAttribute('id', 'sashimi');
    specials.appendChild(sashimi);
    const rolls = document.createElement('div');
    rolls.setAttribute('id', 'rolls');
    specials.appendChild(rolls);
    const plates = document.createElement('div');
    plates.setAttribute('id', 'plates');
    menuRightWrapper.appendChild(plates);
    const dessert = document.createElement('div') ;
    dessert.setAttribute('id', 'dessert');
    menuRightWrapper.appendChild(dessert);
}