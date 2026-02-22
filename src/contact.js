function loadContact() {
    const content = document.getElementById("content");
    //clears the page
    content.innerHTML = "";

    const contactTitle = document.createElement("h1");
    contactTitle.textContent = "Contact";
    content.appendChild(contactTitle);
}

export default loadContact;