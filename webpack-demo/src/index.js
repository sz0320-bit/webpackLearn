import _ from 'lodash';
/*require('./index.css');*/
import styles from "./stylesheets/index.css";
console.log(styles);
import myName from './myName';
function component() {
    const element = document.createElement('div');
    element.className = 'skeleton';
    // use your function!
    element.textContent = myName('Syed\'\s program!!!!');
    return element;
}


document.body.appendChild(component());