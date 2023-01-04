import { content } from "./menu";

const createElement = (elementType) => {
    return document.createElement(elementType);
};

export const resetInfo = () => {
    return content.children[1].removeChild(content.children[1].children[0]);
};

const generateMenuItem = (
    imageSrc,
    imageAlt,
    itemDescription,
    parentToAppend
) => {
    const image1 = createElement("img");
    image1.src = imageSrc;
    image1.alt = imageAlt;
    const p1 = createElement("p");
    p1.innerText = itemDescription;
    parentToAppend.appendChild(image1);
    parentToAppend.appendChild(p1);
};

export const infoMenu = () => {
    const divElem = createElement("div");
    divElem.classList.add("info-grid-menu");
    generateMenuItem(
        "../src/images/starter.jpg",
        "A tuna salad",
        "You came to our restaurant and don't know how to start? This is the option for you. You are eating at home? This tuna salad is the definition of healthy food.",
        divElem
    );
    generateMenuItem(
        "../src/images/eggs.jpg",
        "Eggs breakfast",
        "What can be so delicious about this eggs that everyone brags about? Well why don't you try it out and tell us. If you guess the secret incredient, the desert is on the house :)",
        divElem
    );
    generateMenuItem(
        "../src/images/pizza.jpg",
        "Pizza",
        "Pizza is love. What is more to say, we think the photo is convincing enough.",
        divElem
    );
    generateMenuItem(
        "../src/images/desert.jpg",
        "Dessert",
        "Was the food already delicious? Migh as well try the desert.",
        divElem
    );

    content.children[1].appendChild(divElem);
};
