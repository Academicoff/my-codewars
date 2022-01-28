function divCon(x){
    let string = x.filter(el => typeof(el)==='string');
    let number = x.filter(el => typeof(el)==='number');

    let sumString = string.reduce(function(sum, elem) {	return +sum + +elem;}, 0);

    let sumNumber = number.reduce(function(sum, elem) {	return sum + elem;}, 0);

    return sumNumber-sumString;

}

//Best Solution
// 1
// function divCon(x){
//     return x.reduce((acc, cur) => typeof cur === 'number'? acc + cur : acc - Number(cur),0)
// }

// 2
//const divCon=x=>x.reduce((a,b)=>a+(0+b==b?b:-+b),0)