function digPow(n, p){
    var stringN = n.toString();
    var sum = 0;
    var result;
    var powers = p;
    console.log(stringN+" P: "+p)
    for (var i=0; i < stringN.length; i++){
        sum += stringN[i]**powers;
        var result = (sum%n == 0) ? sum/n : -1;
        powers+=1;
    }
    return result;
}