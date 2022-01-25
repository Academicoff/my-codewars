describe('Fixed Tests', () => {
    Test.assertEquals(FilterString("123"), 123, 'Just return the numbers');
    Test.assertEquals(FilterString("a1b2c3"), 123, 'Just return the numbers');
    Test.assertEquals(FilterString("aa1bb2cc3dd"), 123, 'Just return the numbers');
});