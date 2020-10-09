//import { dice } from './dice.js';
import { renderDice, seedAndGetProducts } from '../utils.js';
//import { DICE } from '../constants.js';

const ul = document.querySelector('#list');

const diceList = seedAndGetProducts();

for (let i = 0; i < diceList.length; i++) {
    const die = diceList[i];

    const li = renderDice(die);

    ul.appendChild(li)
}