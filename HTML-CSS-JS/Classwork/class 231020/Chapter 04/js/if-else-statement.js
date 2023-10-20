var pass = 50;    // Pass mark
var score = 55;   // Current Score
var msg;          // Message

// Select message to write based on score
if (score > pass) {
    msg = 'Congratulations, you passed!';
} else {
    msg = 'Have another go!';
}

var el = document.getElementById('answer');
el.textContent = msg;