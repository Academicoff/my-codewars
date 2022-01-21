function alphabetPosition(text) {
    var  string = text.toLowerCase();
    var finalstring = "";
    //a=97  string[0].charCodeAt()-96;
    for (var i = 0; i < string.length; i++){
        if (string[i].charCodeAt() > 96 && string[i].charCodeAt() < 123){
            finalstring += string[i].charCodeAt()-96+" ";
        }
    }
    return finalstring.trim();
}