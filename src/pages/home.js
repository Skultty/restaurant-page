import { createElement, append, remove, addClass, removeClass } from '../utils.js';

const home = () => {
    let home = createElement('div', 'home');
    let homeText = createElement('p', 'home-text', 'Welcome to our restaurant!');

    append(home, homeText);

    return home;
}

export { home };