// describe("zipWith",()=>{
//     const plus = (a,b) => a+b ;
//     it("Example tests",()=>{
//         assert.deepEqual(zipWith(plus, [0,1,2,3,4,5], [6,5,4,3,2,1]), [6,6,6,6,6,6]);
//         assert.deepEqual(zipWith(plus, [0,1,2,3,4  ], [6,5,4,3,2,1]), [6,6,6,6,6  ]);
//         assert.deepEqual(zipWith(plus, [0,1,2,3,4,5], [6,5,4,3,2  ]), [6,6,6,6,6  ]);
//     });
//     it("Description tests",()=>{
//         assert.deepEqual(zipWith( Math.pow, [10,10,10,10], [0,1,2,3] ), [1,10,100,1000]);
//         assert.deepEqual(zipWith( Math.max, [1,4,7,1,4,7], [4,7,1,4,7,1] ), [4,7,7,4,7,7]);
//         assert.deepEqual(zipWith( function(a,b) { return a+b; }, [0,1,2,3], [0,1,2,3] ), [0,2,4,6]);
//         assert.deepEqual(zipWith( (a,b) => a+b, [0,1,2,3], [0,1,2,3] ), [0,2,4,6]);
//     });
// });
import { zipWith } from "../zipWith";
describe("ZipWith",()=> {
    it('Название теста', () => {
        expect(zipWith(plus, [0, 1, 2, 3, 4, 5], [6, 5, 4, 3, 2, 1]), [6, 6, 6, 6, 6, 6]).toBe([6, 6, 6, 6, 6, 6]);
    });
});