function loadMenu() {
    const content = document.getElementById("content");
    //clears the page
    content.innerHTML = "";

    const menuTitle = document.createElement("h1");
    menuTitle.textContent = "Menu";
    content.appendChild(menuTitle);
}

export default loadMenu;