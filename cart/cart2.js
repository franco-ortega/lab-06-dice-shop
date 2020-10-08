import { dice } from '../products/dice.js';
import { renderLineItems } from './render-line-items.js';
import { calcOrderTotal, getFromLocalStorage } from '../utils.js';

const table = document.querySelector('tbody');

const cart = getFromLocalStorage('CART') || [];

for (let i = 0; i < cart.length; i++) {
    const myDie = cart[i];

    const tr = renderLineItems(myDie);

    table.appendChild(tr)
}

const tdCartTotal = document.querySelector('.cart-total');
const orderTotal = calcOrderTotal(cart, dice);

tdCartTotal.textContent = `$${orderTotal}`;

//*****START OF ORDER BUTTON*****
const orderButton = document.querySelector('.order-button');

orderButton.addEventListener('click', () => {

    const stringy = JSON.stringify(cart, true, 2);

    if (cart.length) {
        alert('Your order is:' + stringy);
        localStorage.removeItem('CART');
        window.location.href = '/';
    } else {
        orderButton.disabled = true;
        alert('Please select items for you cart to place an order.')
    }
})
//*****END OF ORDER BUTTON*****