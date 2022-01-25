Test.assertSimilar(squares(2,5),[2,4,16,256,65536]);
Test.assertSimilar(squares(3,3),[3,9,81]);
Test.assertSimilar(squares(5,3),[5,25,625]);
Test.assertSimilar(squares(10,4),[10,100,10000,100000000]);

describe( "Should return an empty array if n<=0", () =>{
    Test.assertSimilar(squares(2,0),[]);
    Test.assertSimilar(squares(2,-5),[]);
});

