function squareDigits(num){
    let arr = num+'';
    return Number(arr.split('').map(n => Math.pow(n,2)).join(''));
}