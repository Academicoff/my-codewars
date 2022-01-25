function calc(x){
    //let arr = x.split('').join();
    let total1 = '';
    for(let i=0; i<x.length; i++){
        total1 += x.charCodeAt(i)
    }

    let total2 = total1.replace(/7/g,1);

    let sum1 = total1.split('').map(function(num){return parseInt(num)}).reduce(function(a,b){return a+b});
    let sum2 = total2.split('').map(function(num){return parseInt(num)}).reduce(function(a,b){return a+b});
    return sum1-sum2;

}