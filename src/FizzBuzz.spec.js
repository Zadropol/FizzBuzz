import { ConvertirFizzBuzz, SecuenciaFizzBuzz } from "./FizzBuzz.js";

describe ("FizzBuzz", () => {
  it("deberia convertir 3 a Fizz", () => {
    expect(ConvertirFizzBuzz(3)).toBe("Fizz");
  });
});

 describe("FizzBuzz", () => {
   it("deberia convertir un 'n' a Fizz o Buzz dependiendo las reglas", () => {
     expect(ConvertirFizzBuzz(1)).toBe("1");
   });
 });

 describe("FizzBuzz", () => {
   it("deberia convertir cualquier multiplo de 3 a Fizz", () => {
     expect(ConvertirFizzBuzz(9)).toBe("Fizz");
   });
});

 describe("FizzBuzz", () => {
   it("deberia convertir 5 a Buzz", () => {
     expect(ConvertirFizzBuzz(5)).toBe("Buzz");
   });
});

 describe("FizzBuzz", () => {
   it("deberia convertir cualquier multiplo de 5 a Buzz", () => {
     expect(ConvertirFizzBuzz(10)).toBe("Buzz");
   });
});

 describe("FizzBuzz", () => {
   it("deberia convertir cualquier multiplo de 3 y 5 a FizzBuzz", () => {
     expect(ConvertirFizzBuzz(15)).toBe("FizzBuzz");
   });
});

describe("FizzBuzz", () => {
  it("deberia mostrar una secuencia hasta 10", () => {
    expect(SecuenciaFizzBuzz(10)).toBe("1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz");
  });
});
