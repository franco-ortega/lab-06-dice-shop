import { findById, calcLineItem, seedAndGetProducts } from '../utils.js';

const localStorageDice = seedAndGetProducts();

export function renderLineItems(cartItem) {
    const tr = document.createElement('tr')
    const tdName = document.createElement('td')
    const tdPrice = document.createElement('td')
    const tdQuantity = document.createElement('td')
    const tdSubtotal = document.createElement('td')

    tdQuantity.textContent = cartItem.quantity;

    const diceData = findById(localStorageDice, cartItem.id);

    const price = diceData.price;
    const name = diceData.name

    tdPrice.textContent = `$${price}`;
    tdName.textContent = name;

    const finalTotal = calcLineItem(cartItem.quantity, price);

    tdSubtotal.textContent = `$${finalTotal}`;

    const quantity = cartItem.quantity;

    tdQuantity.textContent = quantity;

    tr.append(tdName, tdPrice, tdQuantity, tdSubtotal);

    return tr;
}