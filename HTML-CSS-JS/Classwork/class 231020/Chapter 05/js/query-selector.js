// querySelector only returns the first match.
var el = document.querySelector('li.hot');
el.className = 'cool';

// querySelectorAll returns a Nodelist.
// The third li elements is then selected and changed.
var els = document.querySelectorAll('li.hot');
els[1].className = 'cool';