const isAnagram = require("./anagram");

test("isAnagram function exists", () => {
	expect(typeof isAnagram).toEqual("function");
});

test("cinema is an angram of iceman", () => {
	expect(isAnagram("cinema", "iceman")).toBeTruthy();
});

test("Dormitory is an angram of dorty room##", () => {
	expect(isAnagram("dormitory", "dirty room##")).toBeTruthy();
});

test("Hello is NOT an angram of Aloha", () => {
	expect(isAnagram("Hello", "Aloha")).toBeFalsy();
});
