function isPalindrome(line) {
    let arrReverse = String(line).split("").reverse().join("");
    return arrReverse==line;
}

//Best Practice
// ### 1
// function isPalindrome(line) {
//     return (String(line) == String(line).split('').reverse().join('') )
//
// }
// ### 2
// function isPalindrome(line) {
//     return (line.toString() == line.toString().split('').reverse().join(''));
// }