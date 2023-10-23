var list2 = document.getElementsByTagName('ul')[1];

var newLastItemList2 = document.createElement('li');
var newLastTextList2 = document.createTextNode('Bowl');
newLastItemList2.appendChild(newLastTextList2);
list2.appendChild(newLastItemList2);

var list1 = document.getElementsByTagName('ul')[0];

var newFirstItemList1 = document.createElement('li');
var newFirstTextList1 = document.createTextNode('Coffee');
newFirstItemList1.appendChild(newFirstTextList1);
list1.insertBefore (newFirstItemList1, list1.firstChild);

var itemslist = document.querySelectorAll('li');

var i;
for (i = 0; i < itemslist.length; i++) {
    itemslist[i].className = 'dark';
}

var header = document.querySelector('h2');
var headerText = header.firstChild.nodeValue;
var totalItems = itemslist.length;
var newHeader = headerText + '<span>' + totalItems + '</span>';
header.innerHTML = newHeader;
