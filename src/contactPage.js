import { content } from "./menu";

const createElement = (elementType) => {
    return document.createElement(elementType);
};

export const infoContact = () => {
    const divElem = createElement("div");
    divElem.classList.add("info-contact");
    divElem.innerText = "Reach us here:";

    content.children[1].appendChild(divElem);
};
