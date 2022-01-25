function checkConcatenatedSum(num, n){
    [...arr] = Math.abs(num).toString();
    let sum = 0;
    for(let i=0; i < arr.length; i++){
        let number = '';
        for (let j=0; j < n; j++){
            number += arr[i];
        }
        sum += parseInt(number);
    }
    return (sum === Math.abs(num));
}