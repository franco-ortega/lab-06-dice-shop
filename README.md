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

## 1a. Create:
1. **products** folder
1. **index.html** in products folder
1. **products.css** in products folder
1. **dice.js** in products folder
1. **dice.js** in main folder
1. **main.css** that all pages will link to

## 1b. Find Images:
    1. Dice: d10 x 5


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



# Day 2 - Add a Shopping Cart


## Things to make:

1. Cart folder
    1. index.html
    1. cart.css
    1. cart.js
    1. render-line-items.js

1. Cart index.html:
    1. Table (table)
        1. Table Header (th)
        1. Table Rows (tr: items x3?)
        1. Table Row (tr: total)
    1. Button (button: "Place Order")
    1. **ACP**

1. Array w/ Object Literals:
    1. Cart Rows in **cart.js**:
        1. item ID
        1. item quantity
    1. Export array
    1. **ACP**

1. TDD findById (utils.js)
    1. Takes array and id, and it returns item with that id.
    1. Use a Loop:
        1. Access item using ID from warmup
    
1. TDD calcLineItem (utils.js)
    1. (Function 7.2 below)
    1. Take quanity and price, and returns total.
    1. Use .toFixed(2)

1. TDD renderFunction (cart/render-line-items.js)
    1. (Function 7.1 below)
    1. Takes cart line item and product (object?) and returns DOM that matches static example in index.html
    1. Read this step more closely in repo!
    1. Create the static example programmatically using JS.
    1. Make sure tests pass.
    1. **ACP**

1. Functions:
    1. renderTable
    1. calculateItemSubtotal
    1. calculateCartTotal

1. Generate Shopping Cart
    1. Import:
        1. dice and cart data
        1. renderFunction
        1. util functions (as needed)
    1. Locate tbody where line items will go
    1. Loop thru data ((weeeeeee!!))
        1. use class example or lab example from yesterday
            1. create variable2 based on array index 
            1. use findById to get product for this line item
            1. Pass to DOM and capture in variable2
            1. Append to table (tbody)
    1. **ACP**

1. TDD calcOrderTotal() (utils.js)
    1. (Function 7.3 above)
    1. Takes dice array and cart array
    1. Adds up the Order Total
    1. Function:
        1. Create variable to hold order total
        1. Loop line items and use calcLineItem() to calcuate each line item and add it to the order total.
            1. ACCUMULATOR
            1. .toFixed(2)
        1. Return order total.

1. Add Order to Table (cart/cart.js)
    1. Import calcOrderTotal
    1. Use function to calculate cart total and display this total in the appropriate element.

1. Misc:  
    1. Link main.css to Cart index.html
    1. Link cart.js and maybe other js files to Cart index.html
    1. Product folder
        1. Hyperlink to Cart index.html
    1. Main index.html
        1. Hyperlink to Cart index.html

## Points
1. Hosted on GitHub with URL in About section, Product HTML works and uses good Semantic Element choices = **2**
1. CSS used consciously and correctly = **1**
1. TDD calcCaertItemTotal and calcOrderTotal = **2**
1. TDD DOM Render Function = **3**
1. Correctly orchestrate product row generation in shopping-cart.js = **2**