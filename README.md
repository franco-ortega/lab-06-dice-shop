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



# Day 3 - Get the "Place Order" Button working


1. Add EVENT LISTENER to "Add to Cart" button in renderFunction(). It must:
    1. Get existing info in localStorage
        1. Use empty array [] if cart is empty
        1. If there is data, JSON.parse it back into an array
    1. Check if item is already in cart (use findyById() function)
        1. If already in cart, then increment item
        1. If not in cart, add to cart:
        const lineItem = {
        id: <product-id>,
        quantity: 1
        };
    1. Save cart to localStorage via JSON.stringify

1. Get cart from localStorage with JSON.parse and use it in rendering the table.

1. Place Order
    1. If there are no items in cart, disable "Place Order" button.
    1. Add EVENT LISTENER to "Place Order" button that will:
        1. Display an alert() with contents of cart
            1. hint: JSON.stringify(cart, true, 2) will give you nicely formatted JSON
        1. Remove the cart from localStorage (.removeItem)
        1. Redirect the user back to the home page



## Points

1. Hosted on GitHub with URL in About section	**1**
1. Add product to cart (addEventListener in render product)	**4**
1. Load cart on shopping cart page	**3**
1. Place order with alert, remove cart, and redirect	**2**


## Stretch
### STRETCH: Add Quantity of Products
1. Add a quantity drop-down to the rendered product. When the "Add" button is clicked, add the indicated amount of product to the quantity.

### STRETCH: Move Data Work to Function
2. Create a module called cart-api.js. Export a function for each of the specific data tasks below. You already have the correct code, remove it into these functions and change existing code to import and use these new functions instead:
    1. getCart
    1. addToCart
    1. clearCart

## Stretch Points

1. *Add Quantity to product page*	**+1**
1. *TDD getCart, clearCart, and setCart functions for cart-api.js*	**+1**


# Day 4: Product Entry

## Create:
1. product-entry folder:
    1. index.html
    1. product-entry.js
    1. product-entry.css
1. Links in header for:
    1. Home page
    1. Dice page
    1. Cart page
    1. Product Entry page
1. Add header links to:
    1. index.html
    1. Products index.html
    1. Cart index.html
    1. Product-Entry index.html


### Step 1: Design Product Entry index.html + css

1. Create form:
    1. id: 'black d10',
    1. name: 'Black d10',
    1. photo: 'd10_black.jpeg',
    1. description: 'A black 10-sided die.',
    1. category: '',
    1. price: '3',
1. Add the header links
1. **ACP**

### Step 1.5: Replace
1. Replace all uses of hardcoded products with products living in local storage.
    1. Dice and Cart pages need to use localStorage
    1. If localStorage is empty, seed it with the Dice array
    1. Create seedAndGetProducts that:
        1. Checks if prodcuts are in localStorage
            1. If so, return products
            1. If not, put hard coded Dice in localStorage
        1. Returns products


### Step 2: TDD API Method for addProduct() function in utils.js

1. Adds new product and places in localStorage
    1. Function will:
        1. Get existing product array
        1. Push new product into array
        1. Re-save product array to localStorage
    1. Test will:
        1. Call addProduct() function
        1. Check localStorage to see if product was added
    1. **ACP**


### 1. Step 3: Form Submit Event

In product-entry.js:
1. Get reference to the form (link to <\form/> tag or "id" of form)
1. Subscribe to the submit event (use 'submit' in eventListener)
1. Use event.preventDefaults()
1. Create "new FormData" object that passes the form
1. Create new product object from form (use "form.get")
1. Call the new store addProduct() function with the form object
1. Reset the form (use .removeItem or .clear?)
1. **ACP**


### Points
    - Hosted on github, links in header, user experience is smooth **2 pts**
    - TDD Add Product function	**2 pts**
    - Use new FormData to create new product object	**2 pts**
    - Wire-up form submit with prevent default	**2 pts**
    - New item shows up in cart when added to cart	**2 pts**

### STRETCH Step 4: Remove a Product
1. On the product entry page, also render a list of products with a remove button by each one.
    1. Add a "Remove Item" button (eventListener('click')) to renderProduct() function
1. Add a function removeProduct that takes a product code. In that method, find the product and remove from the product array.
    1. Create function that uses product ID to look for product in the array, and if it finds the ID, it removes that product.
1. Use this funtion to remove an item on an appropriate click.
    1. Connect this function to the "Remove Item" button (eventListener('click'))
1. **ACP**
1. BONUS: When adding a product, also render a new list items add it to the list of products.
    1. ???
1. **ACP**

### Stretch Points
    Remove Product on Admin Page	** +1 **
