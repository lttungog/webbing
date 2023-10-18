// Create a variable to hold a new Date object
var today = new Date();
// Get the year - this year
var year = today.getFullYear();
// Set the date the company was established
var est = new Date('Apr 16, 1996 15:45:55');

// Get difference between then & now in milliseconds
var difference = today.getTime() - est.getTime();
// Divide by number of milliseconds to get years
difference = (difference / 31556900000);

// Create a variabled called elMsg to hold the element whose id attribute has a value of message
var elMsg = document.getElementById('message');
elMsg.textContent = Math.floor(difference) + ' years of online travel advice'