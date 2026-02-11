import { calcuator } from "../src/calculator";

describe('calculator', () => {
    test('Add Exists', () => {
        expect(calcuator.add).toBeDefined()
    });
    test("Add's two + two and returns four",()=>{
        expect(calcuator.add(2,2)).toBe(4);
    })
    test("Adds two numbers",()=>{
        expect(calcuator.add(2,3)).toBe(5);
    })
    test("Adds negative and positive numbers",()=>{
        expect(calcuator.add(2,-3)).toBe(-1);
    })
    test("Adds negative and negative numbers",()=>{
        expect(calcuator.add(-2,-3)).toBe(-5);
    })
    test("Adds int and floating numbers",()=>{
        expect(calcuator.add(2,0.3)).toBe(2.3);
    })


    test('Subtract Exists', () => {
        expect(calcuator.subtract).toBeDefined()
    });
    test("sub's two - two and returns 0",()=>{
        expect(calcuator.subtract(2,2)).toBe(0);
    });
    test("sub's two numbers",()=>{
        expect(calcuator.subtract(5,3)).toBe(2);
    });
        test("sub negative and positive numbers",()=>{
        expect(calcuator.subtract(2,-3)).toBe(5);
    })
    test("sub negative and negative numbers",()=>{
        expect(calcuator.subtract(-2,-3)).toBe(1);
    })
    test("sub int and floating numbers",()=>{
        expect(calcuator.subtract(2,0.3)).toBe(1.7);
    })
    test('Multiply Exists', () => {
        expect(calcuator.multiply).toBeDefined()
    });
    test("mutiply two & two and return 4",()=>{
        expect(calcuator.multiply(2,2)).toBe(4);
    });
    test("multiply two numbers",()=>{
        expect(calcuator.multiply(2,3)).toBe(6);
    });
    test("multiply one int and one float numbers",()=>{
        expect(calcuator.multiply(2,-3)).toBe(-6);
    });
    test("multiply with zero",()=>{
        expect(calcuator.multiply(2,0)).toBe(0);
    });
    test('Divide Exists', () => {
        expect(calcuator.divide).toBeDefined();
    });
    test('Divide 8 by 4 and get 2', () => {
        expect(calcuator.divide(4,8)).toBe(2);
    });
    test('Divide two numbers', () => {
        expect(calcuator.divide(2,10)).toBe(5);
    });
    test('Divide floating point numbers', () => {
        expect(calcuator.divide(20,10)).toBe(0.5);
    });
    test('Zero Divided by some number', () => {
        expect(calcuator.divide(20,0)).toBe(0);
    });
    test('Some number Divided by 0', () => {
        expect(calcuator.divide(0,2)).toBe('Cannot divide by zero.');
    });
})