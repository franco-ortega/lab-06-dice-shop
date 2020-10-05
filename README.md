# lab-06-dice-shop

## Summary

Pick a product and outline all the details that will need to be displayed to the user who is interested in purchasing the product.


## Details

### Products
Each product needs (at least):

1. id (unique string for this individual product)
1. name (user-friendly product name)
1. image (photo that lives in assets folder/directory)
1. description (longer description of product)
1. category (category of product)
1. price (what the user will pay)

Product Ex: Dice

1. id: diceid
1. name: Jade Roller
1. image: dice photo
1. description: very pretty dice with green trim and sparkle numbers
1. 4-sided dice
1. $9.99

### Pages

#### Folders/Directories
1. main folder/directory
1. Products sub-directory

#### HTML
1. index.html
1. products -> index.html

#### CSS
1. main.css
1. products -> products.css

#### JavaScript
1. i.e. fruits.js -> dice.js


## Process
### 1. Design List:
    1. Design one product in list
        1. li
        1. "Add" button whose value is the product ID
    1. ACP

##
### 2. Product Data
Place in dice.js:
1. Create object literals for each product
    1. Store in a variable with same name as product ID.
    1. Objects contain key/value pairs
    1. All products must have exactly the same keys
1. Create variable that is array of all products
1. Export this array
1. ACP

### TDD
Write a test that passes/sends products to a function and assers that the return dome with .toOuterHTML matches the static html example
1. Copy HTML from page
1. Remove extra whitesplace
1. Copy the object product data for the item that is in the example, and use as your input to your function
1. Use DOM API to create static example programmatically using JS; start by creating the top level element (li for product list).
1. Make the test pass
1. ACP


### Generate Product List
In products.js:
1. Import data and DOM generation function
1. locate the list **element** where products will go
1. loop thru data
    1. create variable that is the singular of your domain list and assign based on the current array index. For example, const dice = dice[i];
    1. Pass to DOM generation function and capture result in a variable
    1. Append to the top-level list element
1. ACP


## Points:
1. Hosted on GitHub with URL in **About** section, Product HTML works and uses good Semantic choices = 2
1. CSS used consciously and correctly = 1
1. Procuct Object Literals and Array of all Products = 2
1. **Test the DOM Render Function = 3**
1. Correctly orchestrate product generation in products.js using for loop and render function.


# Getting started

## 1. Create:
1. **products** folder
1. **index.html** in products folder
1. **products.css** in products folder
1. **products.js** in products folder
1. **dice.js** in main folder
1. **main.css** that all pages will link to


## 2. Design List in HTML
1. ### Product: Dice

    1. id: diceid
    1. name: Jade Roller
    1. image: dice photo
    1. description: very pretty dice with green trim and sparkle numbers
    1. 4-sided dice
    1. $9.99
2. ### **ACP**

## 3. Redesign List in JS with object literals.
1. Do this in dice.js
1. Create object literals for each product.
1. Create array of all products.
1. Export the array
1. **ACP**

## 4. Testing
1. use the toOuterHTML
1. **ACP**

## 5. Create product list
Do this is products.js
1. Import data and DOM generation function
1. Locate list element where products will go. (the LI?)
1. Loop thru data (see long instructions above for details)
1. **ACP**

