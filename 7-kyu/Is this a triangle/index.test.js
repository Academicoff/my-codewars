const { assert } = require("chai")

describe("Public tests", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(isTriangle(1,2,2), true);
        assert.strictEqual(isTriangle(7,2,2), false);
    });
})