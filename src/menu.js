import { resetInfo, infoMenu } from "./menuPage";
import { infoContact } from "./contactPage";

export const content = document.querySelector(".content");

const createElement = (elementType) => {
    return document.createElement(elementType);
};

const header = () => {
    const divElem = createElement("div");
    divElem.classList.add("header");
    const textBackground = createElement("div");
    textBackground.classList.add("text-background");
    const ulElem = createElement("ul");
    ulElem.classList.add("menu");
    const liElem1 = createElement("li");
    liElem1.innerText = "Home";
    liElem1.addEventListener("click", () => {
        if (content.children[1].children[0].className === "info-container") {
            return;
        }
        resetInfo();
        infoHome();
    });
    const liElem2 = createElement("li");
    liElem2.innerText = "Menu";
    liElem2.addEventListener("click", () => {
        if (content.children[1].children[0].className === "info-grid-menu") {
            return;
        }
        resetInfo();
        infoMenu();
    });
    const liElem3 = createElement("li");
    liElem3.innerText = "Contact";
    liElem3.addEventListener("click", () => {
        if (content.children[1].children[0].className === "info-contact") {
            return;
        }
        resetInfo();
        infoContact();
    });

    divElem.appendChild(textBackground);
    divElem.appendChild(ulElem);
    ulElem.appendChild(liElem1);
    ulElem.appendChild(liElem2);
    ulElem.appendChild(liElem3);

    return divElem;
};

const infoDiv = () => {
    const divElem = createElement("div");
    divElem.classList.add("info");
    const infoContainer = createElement("div");
    infoContainer.classList.add("info-container");
    const divChild1 = createElement("div");
    divChild1.classList.add("info-child");
    const divChild2 = createElement("div");
    divChild2.classList.add("info-child");
    const pElem = createElement("p");
    pElem.innerText =
        "Welcome! Are you in for a great culinary experience? Our services are top. Want to test the validity of this statement? Grab your friends and test our food!";
    const imgElem = createElement("img");
    imgElem.src = "../src/images/healthy-dinner.jpg";
    imgElem.alt = "Healthy-dinner";
    const imgElem2 = createElement("img");
    imgElem2.src = "../src/images/fried-salmon.jpg";
    imgElem2.alt = "Fried salmon";
    const pElem2 = createElement("p");
    pElem2.innerText =
        "We also have a really good offer. If you come with friends, the drinks are 1+1. And if you can guess our daily riddles, the dessert is on us";
    divChild1.appendChild(pElem);
    divChild1.appendChild(imgElem);
    divChild2.appendChild(imgElem2);
    divChild2.appendChild(pElem2);
    infoContainer.appendChild(divChild1);
    infoContainer.appendChild(divChild2);
    divElem.appendChild(infoContainer);
    return divElem;
};

const infoHome = () => {
    const infoContainer = createElement("div");
    infoContainer.classList.add("info-container");
    const divChild1 = createElement("div");
    divChild1.classList.add("info-child");
    const divChild2 = createElement("div");
    divChild2.classList.add("info-child");
    const pElem = createElement("p");
    pElem.innerText =
        "Welcome! Are you in for a great culinary experience? Our services are top. Want to test the validity of this statement? Grab your friends and test our food!";
    const imgElem = createElement("img");
    imgElem.src = "../src/images/healthy-dinner.jpg";
    imgElem.alt = "Healthy-dinner";
    const imgElem2 = createElement("img");
    imgElem2.src = "../src/images/fried-salmon.jpg";
    imgElem2.alt = "Fried salmon";
    const pElem2 = createElement("p");
    pElem2.innerText =
        "We also have a really good offer. If you come with friends, the drinks are 1+1. And if you can guess our daily riddles, the dessert is on us";
    divChild1.appendChild(pElem);
    divChild1.appendChild(imgElem);
    divChild2.appendChild(imgElem2);
    divChild2.appendChild(pElem2);
    infoContainer.appendChild(divChild1);
    infoContainer.appendChild(divChild2);
    content.children[1].appendChild(infoContainer);
};

const footer = () => {
    const divElem = createElement("div");
    divElem.classList.add("footer");
    divElem.innerText = "Created by vladius9512";
    const svgElem = createElement("img");
    svgElem.src = "../src/images/github.svg";
    svgElem.alt = "Github logo";
    const linkElem = createElement("a");
    linkElem.href = "https://github.com/vladius9512";
    linkElem.target = "_blank";
    divElem.appendChild(linkElem);
    linkElem.appendChild(svgElem);

    return divElem;
};

const startWebsite = () => {
    content.appendChild(header());
    content.appendChild(infoDiv());
    content.appendChild(footer());
};

export default startWebsite;
