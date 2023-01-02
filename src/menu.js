
const content = document.querySelector('.content');

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
    const liElem2 = document.createElement('li');
    liElem2.innerText = 'Menu';
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

/*const menuUl = document.querySelector('.menu');

menuUl.addEventListener('click',(e) => {
    const target = e.target;
    console.log(target);
})*/

export default startWebsite;
