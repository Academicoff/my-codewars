function getCount(str) {
    var vowelsCount = 0;
    var text = str;
    var vowels = "aeuio"

    for (var i=0; i < text.length; i++){
        for (var j=0; j < vowels.length; j++){
            if (text[i] == vowels[j]) vowelsCount++;
        }
    }
    return vowelsCount;
}