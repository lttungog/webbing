// Store the greeting in a varialbe
var greeting = "Howdy ";

// Store the user's name in a variable
var name = "Tung";

// Create the welcome message by concatenating the strings in the 2 variables
var welcomeMessage = greeting + name + '!';

// Get the element that has an id of greeting
var el = document.getElementById('greeting');

// Replace the content of this element with the personal message
el.textContent = welcomeMessage;