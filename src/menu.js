import { resetInfo, infoMenu } from "./menuPage";

export const content = document.querySelector(".content");

const createElement = (elementType) => {
    return document.createElement(elementType);
};

const header = () => {
    const divElem = document.createElement("div");
    divElem.classList.add("header");
    const textBackground = document.createElement("div");
    textBackground.classList.add("text-background");
    const ulElem = document.createElement("ul");
    ulElem.classList.add("menu");
    const liElem1 = document.createElement("li");
    liElem1.innerText = "Home";
    liElem1.addEventListener("click", () => {
        if (content.children[1].children[0].className === "info-container") {
            return;
        }
        resetInfo();
        infoHome();
    });
    const liElem2 = document.createElement("li");
    liElem2.innerText = "Menu";
    liElem2.addEventListener("click", () => {
        if (content.children[1].children[0].className === "info-grid-menu") {
            return;
        }
        resetInfo();
        infoMenu();
    });
    const liElem3 = document.createElement("li");
    liElem3.innerText = "Contact";

    divElem.appendChild(textBackground);
    divElem.appendChild(ulElem);
    ulElem.appendChild(liElem1);
    ulElem.appendChild(liElem2);
    ulElem.appendChild(liElem3);

    return divElem;
};

const infoDiv = () => {
    const divElem = document.createElement("div");
    divElem.classList.add("info");
    const infoContainer = document.createElement("div");
    infoContainer.classList.add("info-container");
    infoContainer.innerText = "Merge";

    divElem.appendChild(infoContainer);
    return divElem;
};

const infoHome = () => {
    const infoContainer = document.createElement("div");
    infoContainer.classList.add("info-container");
    infoContainer.innerText = "Merge";
    infoDiv().appendChild(infoContainer);
};

const footer = () => {
    const divElem = document.createElement("div");
    divElem.classList.add("footer");
    divElem.innerText = "Created by vladius9512";

    return divElem;
};

const startWebsite = () => {
    content.appendChild(header());
    content.appendChild(infoDiv());
    content.appendChild(footer());
};

export default startWebsite;
