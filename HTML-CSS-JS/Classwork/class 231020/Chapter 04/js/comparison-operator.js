var pass = 50; // Pass mark
var score = 90; // Score

// Check if the user has passed
var hasPassed = score >= pass;
var passed = 'passed';
var failed = 'failed';

if (hasPassed == true) {
    hasPassed = passed;
} else {
    hasPassed = failed;
}

// Write the message into the page
var el = document.getElementById('answer');
el.innerHTML = 'Level: ' + hasPassed