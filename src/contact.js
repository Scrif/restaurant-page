function contactTab() {
    const contact = document.createElement("div");
    contact.classList.add("contact");

    const phone = document.createElement("p");
    phone.textContent = "(xxx) xxx-xxxx";

    const address = document.createElement("p");
    address.textContent = "Choteau Ave., St. Louis, MO";

    contact.appendChild(phone);
    contact.appendChild(address);

    return contact;
};

function loadContact() {
    const main = document.getElementById("main")
    main.textContent = "";
    main.appendChild(contactTab());
};

export default loadContact;