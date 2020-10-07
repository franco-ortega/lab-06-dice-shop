export function renderDice(dice) {
    const li = document.createElement('li');
    const id = document.createElement('id')
    const name =  document.createElement('p');
    const photo =  document.createElement('img');
    const description =  document.createElement('p');
    const category =  document.createElement('p');
    const price =  document.createElement('p');
    const button =  document.createElement('button');

    li.classList.add('dice');

    name.classList.add('name');
    name.textContent = dice.name;

    photo.classList.add('photo');
    photo.textContent = dice.photo;
    photo.src = `../assets/${dice.photo}`;

    description.classList.add('description');
    description.textContent = dice.description;

    category.classList.add('category');
    category.textContent = dice.category;

    price.classList.add('price');
    price.textContent = `$${dice.price}`;

    button.textContent = "Add to dice bag.";
    button.value = dice.id;

    li.appendChild(name);
    li.appendChild(photo);
    li.appendChild(description);
    li.appendChild(category);
    li.appendChild(price);
    li.appendChild(button);

    return li;
}

export function findById(diceArray, diceId) {
    for (let i = 0; i < diceArray.length; i++) {
        const myDice = diceArray[i];

        if (myDice.id === diceId) {
            return myDice;
        } 
    }
}

export function calcLineItem(quantity, price) {
    const subTotal = quantity * price;

    return subTotal.toFixed(2);
}

import { dice } from '../products/dice.js';

export function calcOrderTotal(cartArray, diceArray) {

    let accumulator = 0;

    for (let i = 0; i < cartArray.length; i++) {
        const item = cartArray[i];

        const trueItem = findById(diceArray, item.id);

        const subtotal = trueItem.price * item.quantity;

        accumulator = accumulator + subtotal;
console.log(accumulator);

    }
console.log(accumulator);
    return 10;

}