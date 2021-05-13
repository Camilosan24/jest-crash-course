const { arrayColors, arrayFruits } = require("./arrays");

describe("Probando testing con arrays", () => {
	test("¿Contiene una banana? ", () => {
		expect(arrayFruits()).toContain("banana");
	});

	// test("no contiene platano ", () => {
	// 	expect(arrayFruits()).not.toContain("platano");
	// });

   // test('comprobar el tamaño de un arreglo', () => {
   //    expect(arrayFruits()).toHaveLength(2)
   // })
   test('comprobar el color', () => {
      expect(arrayColors()).toContain("azul")
   });
});
