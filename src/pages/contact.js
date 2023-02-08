import { createElement, append, remove, addClass, removeClass } from '../utils.js';

const contact = () => {
    let contact = createElement('div', 'contact');
    let contactText = createElement('p', 'contact-text', 'Contact us at:');

    append(contact, contactText);

    return contact;
}

export { contact };