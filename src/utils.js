const createElement = (tag, className, textContent) => {
    const element = document.createElement(tag);
    element.className = className;
    element.textContent = textContent;
    return element;
}

const append = (parent, child) => parent.appendChild(child);

const remove = (parent, child) => parent.removeChild(child);

const addClass = (element, className) => element.classList.add(className);

const removeClass = (element, className) => element.classList.remove(className);


export { createElement, append, remove, addClass, removeClass };