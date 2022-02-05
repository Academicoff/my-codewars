describe("Testing starSign", function() {
    it("Basic tests", function() {
        Test.assertEquals(starSign(new Date(1970, 5, 5)), 'Gemini');
        Test.assertEquals(starSign(new Date(2000, 1, 15)), 'Aquarius');
        Test.assertEquals(starSign(new Date(1987, 7, 23)), 'Leo');
    });
});