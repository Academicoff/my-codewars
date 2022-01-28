describe("Tests", () => {
    it("test", () => {
        let A = new Set([1,2]), B = new Set([2,3]), C = new Set([2]),AB = inter(A,B);

        Test.assertSimilar( inter(A,A), A, "A inter A == A");

        Test.assertSimilar( AB, C );
        Test.assertSimilar( [...AB].sort(), [...inter(B,A)].sort(), "A inter B == B inter A" );

        Test.assertEquals( AB instanceof Set, true, "A inter B should be a Set too" )

    });
});
