// Create variables for the welcome message
var greeting = 'Howdy ';
var name = 'Tung';
var message = ', please check your order:';

//Concatenate the three variables above to create the welcome message
var welcomeMessage = greeting + name + message;

// Create variables to hold details about the sign
var sign = "Montague House";
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var total = subTotal + shipping;

// Get the element that has an id of greeting
var el = document.getElementById('greeting');
el.textContent = welcomeMessage;

// Get the element that has an id of userSign then update its contents
var elSign = document.getElementById('userSign');
elSign.textContent = sign;

var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;

var elSubTotal = document.getElementById('subTotal');
elSubTotal.textContent = '$' + subTotal;

var elShipping = document.getElementById('shipping');
elShipping.textContent = '$' + shipping;

var elTotal = document.getElementById('total');
elTotal.textContent = '$' + total;
