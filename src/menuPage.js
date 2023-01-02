import content from './menu';

const createElement = (elementType) => {
    return document.createElement(elementType);
}

const resetInfo = () => {
    return content.removeChild('info');
}

const infoMenu = () => {
    const divElem = createElement('div');
    divElem.classList.add('info grid');
    divElem.innerText = 'Menu';
    const image1 = createElement('img');
    image1.src = '../images/starter.jpg';
    const p1 = createElement('p');
    p1.innerText = "You came to our restaurant and don't know how to start? This is the option for you. You are eating at home? This tuna salad is the definition of healthy food.";
    const image2 = createElement('img');
    image2.src = '../images/eggs.jpg';
    const p2 = createElement('p');
    p2.innerText = "What can be so delicious about this eggs that everyone brags about? Well why don't you try it out and tell us. If you guess the secret incredient, the desert is on the house :)";
    const image3 = createElement('img');
    image3.src = '../images/pizza.jpg';
    const p3 = createElement('p');
    p3.innerText = "Pizza is love. What is more to say, we think the photo is convincing enough."
    const image4 = createElement('img');
    image4.src = '../images/desert.jpg';
    const p4 = createElement('p');
    p4.innerText = "Was the food already delicious? Migh as well try the desert.";
    divElem.appendChild(image1);
    divElem.appendChild(p1);
    divElem.appendChild(image2);
    divElem.appendChild(p2);
    divElem.appendChild(image3);
    divElem.appendChild(p3);
    divElem.appendChild(image4);
    divElem.appendChild(p4);
    content.appendChild(divElem);
}