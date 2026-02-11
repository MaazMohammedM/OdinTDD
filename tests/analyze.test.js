import { analyzeArray } from "../src/analyze"



describe("Analyze",()=>{
    test("Analyze Exists",()=>{
        expect(analyzeArray).toBeDefined()
    });
    test("returns an object",()=>{
        expect(typeof analyzeArray([1,2,3])).toBe('object')
    });
    test("returns array length",()=>{
        expect(analyzeArray([1,2,3]).length).toBe(3)
    });
    test("returns min value",()=>{
        expect(analyzeArray([1,2,3]).min).toBe(1)
    });
    test("returns max value",()=>{
        expect(analyzeArray([1,2,3]).max).toBe(3)
    });
    test("returns avg value",()=>{
        expect(analyzeArray([1,2,3]).avg).toBe(2)
    });
    test("returns full analysis",()=>{
       expect(analyzeArray([1,2,3])).toEqual({
        avg:2,
        max:3,
        min:1,
        length:3
       })
    });
})