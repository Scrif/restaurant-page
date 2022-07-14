import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

function generateHeader() {
    const header = document.createElement("header");
    header.classList.add("header");

    const title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = "Wanderlust";

    header.appendChild(title);
    header.appendChild(generateNav());

    return header;
}

function generateNav() {
    const nav = document.createElement("nav");

    const homeBtn = document.createElement("button");
    homeBtn.classList.add("nav-btn");
    homeBtn.textContent = "Home";
    homeBtn.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(homeBtn);
        loadHome();
    });

    const menuBtn = document.createElement("button");
    menuBtn.classList.add("nav-btn");
    menuBtn.textContent = "Menu";
    menuBtn.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(menuBtn);
        loadMenu;
    });

    const contactBtn = document.createElement("button");
    contactBtn.classList.add("nav-btn");
    contactBtn.textContent = "Contact";
    contactBtn.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(contactBtn);
        loadContact;
    });

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);

    return nav;
}

function setActiveButton(button) {
    const buttons = document.querySelectorAll(".nav-btn");

    buttons.forEach((button) => {
        if (button !== this) {
            buttons.classList.remove("active");
        }
    });

    button.classList.add("active");
}

function generateMain() {
    const main = document.createElement("main");
    main.classList.add("main");
    main.setAttribute("id", "main");
    return main;
}

function generateFooter() {
    const footer = document.createElement("footer");
    footer.classList.add("footer");

    const ghLink = document.createElement("a");
    ghLink.href = "https://github.com/Scrif";

    const ghIcon = document.createElement("i");
    ghIcon.classList.add("fab");
    ghIcon.classList.add("fa-github");

    ghLink.appendChild(ghIcon);
    footer.appendChild(ghLink);

    return footer;
}

function generateSite() {
    const content = document.getElementById("content");

    content.appendChild(generateHeader());
    content.appendChild(generateMain());
    content.appendChild(generateFooter());

    setActiveButton(document.querySelector(".nav-btn"));
    loadHome();
}