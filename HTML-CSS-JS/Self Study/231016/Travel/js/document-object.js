// Create a variable called msg toi hold a message that will be shown on the page
// Find the title of the document and put this in the msg variable
var msg = '<p><b>Page title: </b>' + document.title + '<br />';

// Find the URL of the document and add it to the msg variable
msg += '<b>Page address: </b>' + document.URL + '<br />';

// Find the date the document was last modified and add it to the msg variable
msg += '<b>Last modified: </b>' + document.lastModified + '</p>';

// Create a variable calle del to hold the element whose id attribute has a value of footer
var el = document.getElementById('footer');
el.innerHTML = msg;