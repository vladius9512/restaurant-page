import { content } from "./menu";

const createElement = (elementType) => {
    return document.createElement(elementType);
};

const infoContactLinkItem = (aHref, pText, parentToAppend) => {
    const aElem2 = createElement("a");
    aElem2.href = aHref;
    aElem2.target = "_blank";
    const pElem2 = createElement("p");
    pElem2.innerText = pText;

    aElem2.appendChild(pElem2);
    parentToAppend.appendChild(aElem2);
};

export const infoContact = () => {
    const divElem = createElement("div");
    divElem.classList.add("info-contact");
    const pElem = createElement("p");
    pElem.innerText =
        "Here is the site i took the photos from. I praise this talented people whose amazing photos make this site better looking. Click the button for the site, click on the names to find the exact photos i used.";
    const aElem = createElement("a");
    aElem.href = "https://www.foodiesfeed.com/";
    aElem.target = "_blank";
    const button = createElement("button");
    button.type = "button";
    button.innerText = "Take me there!";
    aElem.appendChild(button);
    divElem.appendChild(pElem);
    divElem.appendChild(aElem);
    infoContactLinkItem(
        "https://www.foodiesfeed.com/author/kaboompics/",
        "Karolina Grabowska",
        divElem
    );
    infoContactLinkItem(
        "https://www.foodiesfeed.com/author/galyafanaseva/",
        "Galina Afanaseva",
        divElem
    );
    infoContactLinkItem(
        "https://www.foodiesfeed.com/author/jakubkapusnak/",
        "Jakub Kapusnak",
        divElem
    );
    infoContactLinkItem(
        "https://www.foodiesfeed.com/author/moug/",
        "Mahmoud Gamal",
        divElem
    );
    content.children[1].appendChild(divElem);
};
