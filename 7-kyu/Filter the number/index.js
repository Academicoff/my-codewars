var FilterString = function(value) {
    let regEx = /[a-z]/g;
    return +value.replace(regEx,'');
}

//best solution
// var FilterString = function(value) {
//     return parseInt(value.replace(/[^\d]/g, ""))
// }