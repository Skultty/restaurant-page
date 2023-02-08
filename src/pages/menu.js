import { createElement, append, remove, addClass, removeClass } from '../utils.js';

const menu = () => {
    let menu = createElement('div', 'menu');
    let menuText = createElement('p', 'menu-text', 'Menu');

    append(menu, menuText);

    return menu;
}

export { menu };