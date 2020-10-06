import { renderDice, findById, calcLineItem } from '../utils.js';
import { dice } from '../products/dice.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
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


test('function will take in an array and an id and return the object with that id', (expect) => {
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


test('This function takes a quantity and price, and it multiples them to find the total, and it returns the total', (expect) => {
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



// TEST 4
test('This function takes a quantity and price, and it multiples them to find the total, and it returns the total', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const howManyDice = 5
    const dicePrice = 2
    const expected = 10
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calcLineItem(howManyDice, dicePrice);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
