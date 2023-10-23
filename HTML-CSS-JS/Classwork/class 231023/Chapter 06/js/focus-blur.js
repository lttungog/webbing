function checkUsername() {          // Declare function
    var username = el.value;        // Store username in variable
    if (username.length == 0) {      // If username < 5 characters
        elMsg.className = 'tip';   // Change class on message
        elMsg.textContent = "Please enter a username.";    //Update message
    } else if (username.length < 5 && username.length != 0) {
        elMsg.className = 'warning';
        elMsg.innerHTML = "Username not long enough yet!";
    } else {                        // Otherwise
        elMsg.textContent = '';     // Clear the message
    }
}

function tipUsername() {            // Declare function
    elMsg.className = 'tip';        // Change class for message
    elMsg.innerHTML = 'Username must be at least 5 characters';   // Add message
}

var el = document.getElementById('username');   // Username input
var elMsg = document.getElementById('feedback'); // Element to hold message

// When the username input gains / loses focus call function above:
el.addEventListener('focus', tipUsername, false); // focus call tipUsername()
el.addEventListener('blur', checkUsername, false); // blur call checkUsername()