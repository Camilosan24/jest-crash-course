const functions = require("./functions");


describe("Checking Name", () => {
	test("user is Jeff ", () => {
		const user = "Jeff";
		expect(user).toBe("Jeff");
	});
	test("user is Karen ", () => {
		const user = "Karen";
		expect(user).toBe("Karen");
	});
});

test("should sum 2 numbers", () => {
	expect(functions.add(2, 2)).toBe(4);
});

test('adds 2 +2 to not equal 5', () => {
   expect(functions.add(2, 2)).toBe(4);
})

test("should be null", () => {
	expect(functions.isNull()).toBeNull();
});

test("should be falsy", () => {
	expect(functions.checkValue(2)).not.toBeFalsy();
});

test("User should be brad traversy object", () => {
	expect(functions.createUser()).toEqual({
		firstName: "Brad",
		lastName: "Traversy",
	});
});

// Less than and grater than

test("should be under 1600", () => {
	const load1 = 800;
	const load2 = 800;
	expect(load1 + load2).toBeLessThanOrEqual(1600);
});

test("There is not I in team", () => {
	expect("teami").not.toMatch(/I/);
});

test('Admin shoul be in usernames', () => {
   userNames = [
      'jhon', 'karen', 'admin'
   ]

   expect(userNames).toContain('admin')
})

test("User fetch name should be leanne Graham ", () => {
	expect.assertions(1);

	return functions.fetchUser().then((data) => {
		expect(data.name).toEqual("Leanne Graham");
	});
});

test("User fetch name should be leanne Graham ", async () => {
	expect.assertions(1);

	const data = await functions.fetchUser();
	expect(data.name).toEqual("Leanne Graham");
});

describe("Number operations", () => {
	test("should ", () => {
		expect(functions.add(0.2, 0.2)).toBeCloseTo(0.4);
	});
});


