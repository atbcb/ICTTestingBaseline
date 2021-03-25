(function() {
// stickyfill js
var elements = document.querySelectorAll('.sticky');

// Optional but makes use of this js in browsers that may have the css position: sticky; enabled
Stickyfill.forceSticky()

// Makes element sticky
Stickyfill.add(elements);
})();
