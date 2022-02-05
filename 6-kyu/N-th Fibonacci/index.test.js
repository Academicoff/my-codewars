const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", function(){
    it("tests", function(){
        assert.strictEqual(nthFibo(1), 0,"1-st Fibo");
        assert.strictEqual(nthFibo(2), 1,"2-nd Fibo");
        assert.strictEqual(nthFibo(3), 1,"3-rd Fibo");
        assert.strictEqual(nthFibo(4), 2,"4-th Fibo");
    });
});