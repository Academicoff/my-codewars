function duplicateEncode(word){
    return word.toLowerCase().split('').map( function (letter, index, array) {
        return array.indexOf(letter) === array.lastIndexOf(letter) ? '(' : ')'
    }).join('');
}