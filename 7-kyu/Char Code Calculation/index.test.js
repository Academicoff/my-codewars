const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Char Code Calculation", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(calc('abcdef'), 6);
        assert.strictEqual(calc('ifkhchlhfd'), 6);
        assert.strictEqual(calc('aaaaaddddr'), 30);
        assert.strictEqual(calc('jfmgklf8hglbe'), 6);
        assert.strictEqual(calc('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'), 96);
    })
});

//best solution
//
// ##1
// function calc(x){
//     let sum = n => [...n].reduce((a,b) => +a + +b);
//     let total1 = x.replace(/./g, x => x.charCodeAt(0));
//     let total2 = total1.replace(/7/g,'1');
//     return sum(total1) - sum(total2);
// }
//
// ##2
//
// const calc = x =>
//     x.replace(/./g, val => val.charCodeAt()).replace(/[^7]/g, ``).length * 6;
//
// ##3
// function calc(x){
//     return x
//         .split('')
//         .map(c => c.charCodeAt(0))
//         .join('')
//         .split('')
//         .map(Number)
//         .filter(x => x === 7)
//         .length * 6
// }