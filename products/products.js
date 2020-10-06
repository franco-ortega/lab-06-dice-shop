import { dice } from './dice.js';
import { renderDice } from '../utils.js';

const ul = document.querySelector('#list');

for (let i = 0; i < dice.length; i++) {
    const die = dice[i];

    const li = renderDice(die);

    ul.appendChild(li)
}