function homeTab() {
    const home = document.createElement("div");
    home.classList.add("home");

    const homeImage = document.createElement("img");
    homeImage.src = "images/cocktails.jpg";
    homeImage.alt = "Cocktails";

    home.appendChild(createParagraph("Cocktails. Small Plates."));
    home.appendChild(homeImage);

    return home;
}

function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
}

function loadHome() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(homeTab());
}

export default loadHome