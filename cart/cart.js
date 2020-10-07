import { dice } from '../products/dice.js';
import { renderLineItems } from './render-line-items.js';

export const myCart = [
    {
        id: 'black d10',
        quantity: 5
    },
    {
        id: 'green d10',
        quantity: 3
    },
    {
        id: 'yellow d10',
        quantity: 2
    }
];


const table = document.querySelector('tbody');
console.log(table);

for (let i = 0; i < myCart.length; i++) {
    const myDie = myCart[i];
console.log(myDie);
    const tr = renderLineItems(myDie);
console.log(tr);
    table.appendChild(tr)
    console.log(table);
}