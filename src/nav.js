import { createElement, append, remove, addClass, removeClass } from './utils.js';

const nav = () => {
    let nav = createElement('div', 'nav');
    let homeButton = createElement('button', 'home-button', 'Home');
    let menuButton = createElement('button', 'menu-button', 'Menu');
    let contactButton = createElement('button', 'contact-button', 'Contact');
    
    append(nav, homeButton);
    append(nav, menuButton);
    append(nav, contactButton);

    return nav;
}

export { nav };