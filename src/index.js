import './style.css';
import home from './home.js';
import menu from './menu.js';
import contact from './contact.js';

const content = document.querySelector("#content");
content.appendChild(home());

function tabSwitching () {
    const homeBtn = document.querySelector("#home");
    const menuBtn = document.querySelector("#menu");
    const contactBtn = document.querySelector("#contact");
    homeBtn.addEventListener("click", () => {
        const element = document.querySelector("#content div");
        element.remove();
        content.appendChild(home());
    });

    menuBtn.addEventListener("click", () => {
        const element = document.querySelector("#content div");
        element.remove();
        content.appendChild(menu());
    });

    contactBtn.addEventListener("click", () => {
        const element = document.querySelector("#content div");
        element.remove();
        content.appendChild(contact());
    });
}

tabSwitching();
