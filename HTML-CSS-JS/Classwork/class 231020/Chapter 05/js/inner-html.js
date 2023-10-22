// Store the first list item in a variable
var firstItem = document.getElementById('one');

// Get the content of the first list item
var itemContent = firstItem.innerHTML;

// Uppdate the content of the first list item so it is a link
firstItem.innerHTML = '<a href = \"http://example.org\">' + itemContent + '</a>';