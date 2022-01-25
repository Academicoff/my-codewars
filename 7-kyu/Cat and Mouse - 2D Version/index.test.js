describe("Basic Tests", function(){
    it("It should works for basic tests", function(){

        var map=
            `..C......
.........
....m....`
        Test.assertSimilar(catMouse(map,5),'Caught!')

        map=
            `.C.......
.........
......m..`
        Test.assertSimilar(catMouse(map,5),'Escaped!')


        map=
            `..C......
.........
.........`
        Test.assertSimilar(catMouse(map,5),'boring without two animals')
    });
});