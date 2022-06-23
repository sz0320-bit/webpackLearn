import _ from 'lodash';
import myName from './myName';
function component() {
    const element = document.createElement('div');

    // use your function!
    element.textContent = myName('Syed\'\s program!');
    return element;
}


document.body.appendChild(component());