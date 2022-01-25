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