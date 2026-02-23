function loadHomePage() {
    const content = document.getElementById("content");
    //clears the page
    content.innerHTML = "";

    const newHeader = document.createElement("h1");
    newHeader.textContent = "Best Indian Restaurant in NYC"
    content.appendChild(newHeader);

    const newSubHeader = document.createElement("h3");
    newSubHeader.textContent = "Serving South Indian staples 7 days a week"
    content.appendChild(newSubHeader);
}

export default loadHomePage;
