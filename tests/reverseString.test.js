import { reverseString } from "../src/reverseString";

describe('Reverse String', () => {
    test('reverse string exists', () => {
        expect(reverseString).toBeDefined()
    });

    test("reverse the string hello", () => {
        expect(reverseString('hello')).toBe('olleh');
    });

    test("reverse the string world", () => {
        expect(reverseString('world')).toBe('dlrow');
    });

    test("return empty string for empty input", () => {
        expect(reverseString('')).toBe('');
    });

    test("returns empty string for non-string", () => {
        expect(reverseString(123)).toBe('');
    });

    test("handles special characters", () => {
        expect(reverseString("!hello")).toBe("olleh!");
        expect(reverseString("5hello")).toBe("olleh5");
    });
})