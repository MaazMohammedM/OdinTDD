import { caesarCipher } from "../src/caesarCipher";

describe("caesarCipher",()=>{
    test("caesarCipher exists",()=>{
        expect(caesarCipher).toBeDefined();
    });
    test('check string one',()=>{
        expect(caesarCipher('xyz',3)).toBe('abc');
    });
    test('check string two',()=>{
        expect(caesarCipher('HeLLo',3)).toBe('KhOOr');
    });
    test('check string three',()=>{
        expect(caesarCipher('Hello, World!', 3)).toBe("Khoor, Zruog!");
    });
    test('check negative index',()=>{
        expect(caesarCipher('bcd', -1)).toBe("abc");
    })

})