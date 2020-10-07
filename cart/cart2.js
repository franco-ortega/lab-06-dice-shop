import { myCart } from './cart.js';
import { renderLineItems } from './render-line-items.js';

const table = document.querySelector('tbody');

for (let i = 0; i < myCart.length; i++) {
    const myDie = myCart[i];

    const tr = renderLineItems(myDie);

    table.appendChild(tr)
}
