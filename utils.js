import { dice } from './products/dice.js';
import { CART, DICE } from './constants.js';

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

// ************BUTTON STARTS HERE**************
    button.addEventListener('click', () => {

        const myCart = getFromLocalStorage(CART) || [];
        
        const itemInCart = findById(myCart, dice.id);

        if (itemInCart === undefined) {
            const newItemInCart = {
                id: dice.id,
                quantity: 1
            };
            myCart.push(newItemInCart);
        } else {
            itemInCart.quantity++;
        }

        setInLocalStorage(CART, myCart);
    })
// ************BUTTON ENDS HERE**************

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

export function calcOrderTotal(cartArray, localStorageDice) {

    const localStoredDice = seedAndGetProducts();

    let accumulator = 0;

    for (let i = 0; i < cartArray.length; i++) {
        const theDice = cartArray[i];

        const trueDice = findById(localStoredDice, theDice.id);

        const grandTotal = trueDice.price * theDice.quantity;

        accumulator = accumulator + grandTotal;
    }
    return accumulator
}

//setFromLocalStorage FUNCTION STARTS HERE******
export function setInLocalStorage(key, value) {
    const stringyKey = JSON.stringify(value);
    localStorage.setItem(key, stringyKey);

return stringyKey;
}
//setFromLocalStorage FUNCTION ENDS HERE******

//getFromLocalStorage FUNCTION STARTS HERE******
export function getFromLocalStorage(key) {
    const item = localStorage.getItem(key);

    return JSON.parse(item);
}
//getFromLocalStorage FUNCTION ENDS HERE******

//seed FUNCTION STARTS HERE******
export function seedAndGetProducts() {
    let seed = (getFromLocalStorage(DICE));

    if (!seed) {
        const hardStringySeed = JSON.stringify(dice);

        localStorage.setItem(DICE, hardStringySeed);
        seed = dice;
    }
    return seed;
}

export function addProduct(newDie) {

    const localStorageDice = seedAndGetProducts();

    localStorageDice.push(newDie);

    const stringyLocalDice  = JSON.stringify(localStorageDice);

    localStorage.setItem(DICE, stringyLocalDice);
}