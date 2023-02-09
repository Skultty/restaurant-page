import { createElement, append, remove, addClass, removeClass } from '../utils.js';

const contact = () => {
    let contact = createElement('div', 'contact');
    
    let title = createElement('h1', 'contact-title', 'Contact Us');
    let text = createElement('p', 'contact-text', 'The Minimalist Restaurant is always here to answer any questions you may have. Whether you want to make a reservation, ask about our menu, or just say hello, we\'d love to hear from you!');
    let address = createElement('p', 'contact-address', '123 Main Street, Anytown, USA');
    let phone = createElement('p', 'contact-phone', '(123) 456-7890');
    let email = createElement('p', 'contact-email', 'info@theminimalistrestaurant.com');
    let hoursWeek = createElement('p', 'contact-hours', 'Monday to Friday: 5pm to 10pm');
    let hoursWeekend = createElement('p', 'contact-hours', 'Saturday and Sunday: 12pm to 3pm and 5pm to 10pm');
    let outro = createElement('p', 'contact-outro', 'Don\'t be a stranger! Reach out to us and we\'ll make sure to get back to you as soon as possible. We can\'t wait to hear from you!');

    append(contact, title);
    append(contact, text);
    append(contact, address);
    append(contact, phone);
    append(contact, email);
    append(contact, hoursWeek);
    append(contact, hoursWeekend);
    append(contact, outro);

    return contact;
}

export { contact };