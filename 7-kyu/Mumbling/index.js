function accum(s) {
    let arr = s.split('');
    let accumArray = '';
    for (let i=0; i<arr.length; i++){
        for (let j=0; j<=i; j++){
            let accumLetter = ( j===0 ) ? arr[i].toUpperCase(): arr[i].toLowerCase();
            accumArray += accumLetter;
        }
        accumArray += '-';
    }
    return accumArray.slice(0,-1);
}

//Best practice for my learning:
// ### 1
// function accum(s) {
//     return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
// }
// ### the same 1
// function accum (s) {
//     return [...s].map((element, index) => {
//         return element.toUpperCase() + element.toLowerCase().repeat(index);
//     }).join('-');
// }