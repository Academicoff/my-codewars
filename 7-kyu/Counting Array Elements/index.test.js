describe("Tests", () => {
    it("test", () => {
        Test.assertSimilar(count(['a', 'a', 'b', 'b', 'b']), { 'a': 2, 'b': 3 })
    });
});
