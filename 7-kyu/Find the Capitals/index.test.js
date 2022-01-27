describe("Tests", () => {
    it("test", () => {
        state_capitals = [{state: 'Maine', capital: 'Augusta'}]
        Test.assertEquals(capital(state_capitals)[0], "The capital of Maine is Augusta");

        country_capitals = [{'country' : 'Spain', 'capital' : 'Madrid'}]
        Test.assertEquals(capital(country_capitals)[0], "The capital of Spain is Madrid")

        mixed_capitals = [{"state" : 'Maine', capital: 'Augusta'}, {country: 'Spain', "capital" : "Madrid"}]
        Test.assertEquals(capital(mixed_capitals)[1], "The capital of Spain is Madrid")

    });
});
