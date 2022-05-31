import _ from 'lodash';
import './style.css';

function component() {
  const element = document.createElement('div');
  const element2 = document.createElement('h1');

  // Lodash, now imported by this script
  element2.innerHTML = _.join(['Hello', 'Webpack!'], ' ');

  element.appendChild(element2);

  return element;
}

document.body.appendChild(component());
