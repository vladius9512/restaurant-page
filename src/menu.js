import {resetInfo,infoMenu} from './menuPage';

export const content = document.querySelector('.content');
console.log(content);


const createElement = (elementType) => {
    return document.createElement(elementType);
}

const header = () => {
    const divElem = document.createElement('div');
    divElem.classList.add('header');
    const ulElem = document.createElement('ul');
    ulElem.classList.add('menu');
    const liElem1 = document.createElement('li');
    liElem1.innerText = 'Home';
    liElem1.addEventListener('click', () => {
        resetInfo();
        content.appendChild(infoHome());
    })
    const liElem2 = document.createElement('li');
    liElem2.innerText = 'Menu';
    liElem2.addEventListener('click', () => {
        resetInfo();
        infoMenu();
    })
    const liElem3 = document.createElement('li');
    liElem3.innerText = 'Contact';
    
    divElem.appendChild(ulElem);
    ulElem.appendChild(liElem1);
    ulElem.appendChild(liElem2);
    ulElem.appendChild(liElem3);

    return divElem;
}

const infoHome = () => {
    const divElem = document.createElement('div');
    divElem.classList.add('info');
    divElem.innerText = 'Served with love';

    return divElem;
}

const footer = () => {
    const divElem = document.createElement('div');
    divElem.classList.add('footer');
    divElem.innerText = 'Created by vladius9512';

    return divElem;
}


const startWebsite = () =>{
    content.appendChild(header());
    content.appendChild(infoHome());
    content.appendChild(footer());
}




export default startWebsite;
