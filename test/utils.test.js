import { dice } from '../products/dice.js';
import { renderDice, findById, calcLineItem, calcOrderTotal } from '../utils.js';
import { renderLineItems } from '../cart/render-line-items.js';
//import { myCart } from '../cart/cart.js';

const test = QUnit.test;

test('TEST 1: time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const singleDie = {
        
            id: 'black d10',
            name: 'Black d10',
            photo: 'd10_black.jpeg',
            description: 'A medium, black 10-sided die.',
            category: '',
            price: '3',
        
    };
    
    const expected = `<li class="dice"><p class="name">Black d10</p><img class="photo" src="../assets/d10_black.jpeg"><p class="description">A medium, black 10-sided die.</p><p class="category"></p><p class="price">$3</p><button value="black d10">Add to dice bag.</button></li>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderDice(singleDie);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});


test('TEST 2: function will take in an array and an id and return the object with that id', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const theDice = dice
    const theId = 'blue d10'
    const expected = {
        id: 'blue d10',
        name: 'Blue d10',
        photo: 'd10_blue.jpeg',
        description: 'A blue 10-sided die',
        category: '',
        price: '4'
    };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById(theDice, theId);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});


test('TEST 3: This function takes a quantity and price, and it multiples them to find the total, and it returns the total', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const howManyDice = 6
    const dicePrice = 3
    const expected = 18
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calcLineItem(howManyDice, dicePrice);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


test('TEST 4: This function takes both a cart line item, and the corresponding product, and returns dom that matches your static html example', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const thisItem =     {
        id: 'green d10',
        name: 'Green d10',
        photo: 'd10_green.jpeg',
        description: 'A green 10-sided die',
        category: '',
        price: '2'
    }
    const thisDice = {
        id: 'green d10',
        quantity: 3
    };
    
    const expected = `<tr><td>Green d10</td><td>$2</td><td>3</td><td>$6.00</td></tr>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderLineItems(thisDice);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});


test('TEST 5: This function takes the cart array and products array. Then it calculates the total of your cart data as the expected value.', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const cartArray = [ {
        id: 'yellow d10',
        quantity: 2
    }];
    const productsArray = [    {
        id: 'yellow d10',
        name: 'Yellow d10',
        photo: 'd10_yellow.jpeg',
        description: 'A yellow 10-sided die',
        category: '',
        price: '5'
    }]
    const expected = 10
console.log(expected)
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calcOrderTotal(cartArray, productsArray);
console.log(actual)

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
