// Create a variable to hold a random number between 1 and 10
var randomNum = Math.floor((Math.random() * 10) + 1);
// var randomNum = Math.random() * 10;

// Create a variable called el to hold the element whose id attribute ihas a value of info
var el = document.getElementById('info');

// Write the numbner into that element
el.innerHTML = '<h2>Random Number</h2><p>' + randomNum + '</p>';