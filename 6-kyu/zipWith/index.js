export function zipWith(fn,a0,a1) {
    arr = [];
    let length = (a0.length > a1.length) ? a1.length : a0.length;
    for (let i = 0; i < length; i++ ){
        arr.push(fn(a0[i],a1[i]));
    }
    return arr;
}

//best solution
//
// // ##1
// function zipWith(fn,a0,a1) {
//     return Array.from({length: Math.min(a0.length, a1.length)}, (_, i) => fn(a0[i], a1[i]));
// }
//
// ## 2
// const zipWith = (f, a, b) => Array.from({length: Math.min(a.length, b.length)}, (_, i) => f(a[i], b[i]));