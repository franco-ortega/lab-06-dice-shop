import { dice } from '../products/dice.js';
import { myCart } from './cart.js';
import { renderLineItems } from './render-line-items.js';
import { calcOrderTotal } from '../utils.js';

const table = document.querySelector('tbody');

for (let i = 0; i < myCart.length; i++) {
    const myDie = myCart[i];

    const tr = renderLineItems(myDie);

    table.appendChild(tr)
}

const tdCartTotal = document.querySelector('.cart-total');
const orderTotal = calcOrderTotal(myCart, dice);

tdCartTotal.textContent = `$${orderTotal}`;