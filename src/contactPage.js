import content from "./menu";

const createElement = (elementType) => {
    return document.createElement(elementType);
};

const resetInfo = () => {
    return content.removeChild("info");
};

const infoMenu = () => {
    const divElem = createElement("div");
    divElem.classList.add("info");
    divElem.innerText = "Reach us here:";

    content.appendChild(divElem);
};
