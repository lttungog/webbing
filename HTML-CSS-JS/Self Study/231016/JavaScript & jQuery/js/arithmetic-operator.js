// Create a variable for the subtotal and make a calculation
var subtotal = (12 + 4) * 5;

// Create a variable for the shipping and make a calculation
var shipping = 0.5 * (12 + 4);

// Create the total by combining the subtotal and shipping values
var total = subtotal + shipping;

// Write the result to the screen
var elSub = document.getElementById('subtotal');
elSub.textContent = subtotal;

var elShipping = document.getElementById('shipping');
elShipping.textContent = shipping;

var elTotal = document.getElementById('total');
elTotal.textContent = total;