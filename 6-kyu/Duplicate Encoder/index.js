function duplicateEncode(word){
    return word.toLowerCase().split('').map( function (letter, index, array) {
        return array.indexOf(letter) === array.lastIndexOf(letter) ? '(' : ')'
    }).join('');
}

//BestSolution
//#2
// function duplicateEncode(word) {
//     word = word.toLowerCase();
//     return word.replace(/./g, m => word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')');
// }