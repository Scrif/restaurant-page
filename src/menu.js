function menuTab() {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    menu.appendChild(
        createMenuItem(
            "Industry Sour",
            "fernet branca, green chartreuse, lime, turbinado",
            "$13"
        )
    );

    menu.appendChild(
        createMenuItem(
            "Mule",
            "vodka, lime, ginger",
            "11"
        )
    );

    menu.appendChild(
        createMenuItem(
            "Caipirinha",
            "cachaca, lime, sugar",
            "11"
        )
    );

    menu.appendChild(
        createMenuItem(
            "Negroni",
            "gin, vermouth, campari",
            "11"
        )
    );

    menu.appendChild(
        createMenuItem(
            "Paloma",
            "mezcal, grapefruit, bubbles",
            "11"
        )
    );

    menu.appendChild(
        createMenuItem(
            "Old Fashioned",
            "rye, sugar, molé bitters",
            "11"
        )
    );

    return menu;
}

function createMenuItem(name, description, price) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const itemName = document.createElement("h2");
    itemName.textContent = name;

    const itemDescription = document.createElement("p");
    itemDescription.textContent = description;

    const itemPrice = document.createElement("div");
    itemPrice.textContent = price;

    menuItem.appendChild(itemName);
    menuItem.appendChild(itemDescription);
    menuItem.appendChild(itemPrice);

    return menuItem;
}

function loadMenu() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
}

export default loadMenu;