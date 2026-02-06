import { capitalize } from "../src/capitalize";

test("capitalize exists", () => {
    expect(capitalize).toBeDefined()
});

test("capitalize first letter of hello", () => {
    expect(capitalize('hello')).toBe('Hello')
});

test("capitalize first letter of world", () => {
    expect(capitalize('world')).toBe('World')
});

test("returns empty string for empty input", () => {
    expect(capitalize("")).toBe("");
})

test("returns empty string for non-string", () => {
    expect(capitalize(123)).toBe("");
});

test("handles special characters", () => {
    expect(capitalize("!hello")).toBe("!hello");
    expect(capitalize("5hello")).toBe("5hello");
});


