import { createElement, append, remove, addClass, removeClass } from '../utils.js';
import { food } from '../menuData.js';

const menu = () => {
    let menu = createElement('div', 'menu');

    for (let item in food) {
        let menuItem = createElement('div', 'menu-item');
        let menuItemName = createElement('h2', 'menu-item-name', item);
        let menuItemDescription = createElement('p', 'menu-item-description', food[item].description);
        let menuItemPrice = createElement('p', 'menu-item-price', food[item].price);

        append(menuItem, menuItemName);
        append(menuItem, menuItemDescription);
        append(menuItem, menuItemPrice);
        append(menu, menuItem);
    }

    return menu;
}

export { menu };