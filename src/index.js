import './styles/main.css';
import { createElement, append, remove } from './utils.js';
import { nav } from './nav.js';
import { menu } from './pages/menu.js';
import { home } from './pages/home.js';
import { contact } from './pages/contact.js';

const content = document.getElementById('content');

let navBar = nav();
let homePage = home();
let menuPage = menu();
let contactPage = contact();

let currentPage = menuPage;

append(content, navBar);
append(content, currentPage);

// Event listeners
const homeButton = document.querySelector('.home-button');
const menuButton = document.querySelector('.menu-button');
const contactButton = document.querySelector('.contact-button');

homeButton.addEventListener('click', () => {
    switchPage(currentPage, homePage);
});

menuButton.addEventListener('click', () => {
    switchPage(currentPage, menuPage);
});

contactButton.addEventListener('click', () => {
    switchPage(currentPage, contactPage);
});

const switchPage = (oldPage, newPage) => {
    remove(content, oldPage);
    append(content, newPage);
    currentPage = newPage;
}