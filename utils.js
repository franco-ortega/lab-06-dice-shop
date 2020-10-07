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

console.log('the user clicked: ' + dice.id)




//setFromLocalStorage FUNCTION STARTS HERE******
function setInLocalStorage(key, value) {
    const stringyKey = JSON.stringify(value);
    localStorage.setItem(key, stringyKey);

return stringyKey;
}
//setFromLocalStorage FUNCTION ENDS HERE******

//getFromLocalStorage FUNCTION STARTS HERE******
function getFromLocalStorage(key) {
    const item = localStorage.getItem(key);

    return JSON.parse(item);
}
//getFromLocalStorage FUNCTION ENDS HERE******




    const myCart = getFromLocalStorage('CART') || [];
console.log(myCart);
    

    const itemInCart = findById(myCart, dice.id);
console.log(itemInCart);
 ;

    if (itemInCart === undefined) {

        const newItemInCart = {
            id: dice.id,
            quantity: 1
        };

        myCart.push(newItemInCart);
    } else {
        itemInCart.quantity++;
    }

    setInLocalStorage('CART', myCart);

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





export function calcOrderTotal(cartArray, diceArray) {

    let accumulator = 0;

    for (let i = 0; i < cartArray.length; i++) {
        const theDice = cartArray[i];

        const trueDice = findById(diceArray, theDice.id);

        const grandTotal = trueDice.price * theDice.quantity;

        accumulator = accumulator + grandTotal;
    }
    return accumulator
}