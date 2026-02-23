import loadHomePage from "./page-load.js"
import loadMenu from "./menu.js"
import loadContact from "./contact.js"
import "./style.css"

loadHomePage();

const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");
const contactButton = document.getElementById("contact");

menuButton.addEventListener("click",loadMenu);
contactButton.addEventListener("click",loadContact);
homeButton.addEventListener("click", loadHomePage)