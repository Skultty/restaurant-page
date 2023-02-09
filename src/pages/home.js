import { createElement, append, remove, addClass, removeClass } from '../utils.js';

const home = () => {
    let home = createElement('div', 'home');
    let homeText = createElement('h1', 'home-text', 'Minimalist Restaurant');
    let introduction = createElement('p', 'introduction', 'Welcome to The Minimalist Restaurant, where less is more...unless you\'re talking about the flavors in our dishes! Our menu is like a crossword puzzle, not too hard but still satisfying. We believe that the key to a great meal is keeping things simple, just like our menu. Get ready for a dining experience that\'s both effortless and delicious!');

    append(home, homeText);
    append(home, introduction);

    return home;
}

export { home };