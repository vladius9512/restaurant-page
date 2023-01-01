import _ from 'lodash';

function component() {
    const element = document.createElement('div');

    console.log('merge');

    return element;
}

document.body.appendChild(component());