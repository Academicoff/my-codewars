function factorial(n){
    let result = 1;
    if (n > 12 || n < 0) throw new RangeError('input is below 0 or above 12')
    while (n > 0){
        result = result * n;
        n--;
    }
    return result;
}