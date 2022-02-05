describe("Tests", () => {
    it("test", () => {
        Test.assertEquals(fridayTheThirteenths(1999, 2000), "8/13/1999 10/13/2000");
        Test.assertEquals(fridayTheThirteenths(2000), "10/13/2000");
    });
});
