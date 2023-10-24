function checkUsername() {          
    var username = el.value;        
    if (username.length == 0) {      
        elMsg.className = 'tip';   
        elMsg.textContent = "Please enter a name.";
    } else {                        
        elMsg.textContent = '';     
    }
}

function tipUsername() {            
    elMsg.className = 'tip';        
    elMsg.innerHTML = "If you're wondering what to add, feel free to think of your favorite dish."; 
}

var el = document.getElementById('username');  
var elMsg = document.getElementById('feedback'); 

el.addEventListener('focus', tipUsername, false); 
el.addEventListener('blur', checkUsername, false);