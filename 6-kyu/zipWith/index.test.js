import { zipWith } from "../zipWith";

describe("ZipWith",()=> {
    const plus = (a,b) => a+b ;
    it('Plus function', () => {
        expect(zipWith(plus, [0, 1, 2, 3, 4, 5], [6, 5, 4, 3, 2, 1])).toEqual([6, 6, 6, 6, 6, 6]);
        expect(zipWith(plus, [0,1,2,3,4  ], [6,5,4,3,2,1])).toEqual([6,6,6,6,6  ]);
        expect(zipWith(plus, [0,1,2,3,4,5], [6,5,4,3,2  ])).toEqual([6,6,6,6,6  ]);

    });
    it('Math function', () => {
        expect(zipWith(Math.pow, [10,10,10,10], [0,1,2,3] )).toEqual([1,10,100,1000]);
        expect(zipWith(Math.max, [1,4,7,1,4,7], [4,7,1,4,7,1])).toEqual([4,7,7,4,7,7]);
        expect(zipWith(function(a,b) { return a+b; }, [0,1,2,3], [0,1,2,3])).toEqual([0,2,4,6]);
        expect(zipWith((a,b) => a+b, [0,1,2,3], [0,1,2,3])).toEqual([0,2,4,6]);

    });
});

