// write the function isAnagram
var isAnagram = function(test, original) {
    return ([...test.toLowerCase()].sort().join('') == [...original.toLowerCase()].sort().join('')) ? true : false;
};