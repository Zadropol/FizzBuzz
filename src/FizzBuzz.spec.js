import { ConvertirFizzBuzz } from "./FizzBuzz.js";

describe ("FizzBuzz", () => {
  it("deberia convertir 3 a Fizz", () => {
    expect(ConvertirFizzBuzz(3)).toEqual("Fizz");
  });
});


// describe("FizzBuzz", () => {
//   it("deberia convertir un 'n' a Fizz o Buzz dependiendo las reglas", () => {
//     expect(ConvertirFizzBuzz(1)).toEqual("1");
//   });
// });

// describe("FizzBuzz", () => {
//   it("deberia convertir un 'n' a Fizz o Buzz dependiendo las reglas", () => {
//     expect(ConvertirFizzBuzz(4)).toEqual("4");
//   });
// });

// describe("FizzBuzz", () => {
//   it("deberia convertir un 3 a Fizz", () => {
//     expect(ConvertirFizzBuzz(3)).toEqual("Fizz");
//   });
// });

// describe("FizzBuzz", () => {
//   it("deberia convertir cualquier multiplo de 3 a Fizz", () => {
//     expect(ConvertirFizzBuzz(9)).toEqual("Fizz");
//   });
// });

// describe("FizzBuzz", () => {
//   it("deberia convertir 5 a Buzz", () => {
//     expect(ConvertirFizzBuzz(5)).toEqual("Buzz");
//   });
// });

// describe("FizzBuzz", () => {
//   it("deberia convertir cualquier multiplo de 5 a Buzz", () => {
//     expect(ConvertirFizzBuzz(10)).toEqual("Buzz");
//   });
// });

// describe("FizzBuzz", () => {
//   it("deberia convertir cualquier multiplo de 3 y 5 a FizzBuzz", () => {
//     expect(ConvertirFizzBuzz(15)).toEqual("FizzBuzz");
//   });
// });

