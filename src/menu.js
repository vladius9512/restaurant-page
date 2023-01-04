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
    const pElem = createElement("p");
    pElem.innerText =
        "Welcome! Are you in for a great culinary experience? Our services are top. Want to test the validity of this statement? Grab your friends and test our food!";
    const imgElem = createElement("img");
    imgElem.src = "../src/images/healthy-dinner.jpg";
    imgElem.alt = "Healthy-dinner";
    infoContainer.appendChild(pElem);
    infoContainer.appendChild(imgElem);

    divElem.appendChild(infoContainer);
    return divElem;
};

const infoHome = () => {
    const infoContainer = createElement("div");
    infoContainer.classList.add("info-container");
    const pElem = createElement("p");
    pElem.innerText =
        "Welcome! Are you in for a great culinary experience? Our services are top. Want to test the validity of this statement? Grab your friends and test our food!";
    const imgElem = createElement("img");
    imgElem.src = "../src/images/healthy-dinner.jpg";
    imgElem.alt = "Healthy-dinner";
    infoContainer.appendChild(pElem);
    infoContainer.appendChild(imgElem);
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
