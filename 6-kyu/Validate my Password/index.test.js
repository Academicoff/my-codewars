describe("Tests", () => {
    it("test", () => {
        Test.assertEquals( validPass('Username123') , 'VALID' );
        Test.assertEquals( validPass('Username') , 'INVALID' );
        Test.assertEquals( validPass('1Username') , 'VALID' );
        Test.assertEquals( validPass('123') , 'INVALID' );
        Test.assertEquals( validPass('a12') , 'INVALID' );
        Test.assertEquals( validPass('1234') , 'INVALID' );
        Test.assertEquals( validPass('a123') , 'VALID' );
        Test.assertEquals( validPass('Username123!') , 'INVALID' );
        Test.assertEquals( validPass('passw0rdIsntTooLong') , 'VALID' )
        Test.assertEquals( validPass('passw0rd1CharTooLong') , 'INVALID' )
    });
});
