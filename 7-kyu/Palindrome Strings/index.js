function isPalindrome(line) {
    let arrReverse = String(line).split("").reverse().join("");
    return arrReverse==line;
}

//Best Practice
// function isPalindrome(line) {
//     return (String(line) == String(line).split('').reverse().join('') )
//
// }