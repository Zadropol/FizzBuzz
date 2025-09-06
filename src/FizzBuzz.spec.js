import { SecuenciaFizzBuzz, ConvertirFizzBuzz } from "./FizzBuzz.js";

describe("FizzBuzz", () => {
  it("Deberia devolver 1 a 1 en forma literal", () => {
    expect(ConvertirFizzBuzz(1)).toBe("1");
  });
});

describe("FizzBuzz", () => {
  it("Deberia devolver 3 Fizz", () => {
    expect(ConvertirFizzBuzz(3)).toBe("Fizz");
  });
});

describe("FizzBuzz", () => {
  it("Deberia devolver un multiplo de 3 Fizz", () => {
    expect(ConvertirFizzBuzz(9)).toBe("Fizz");
  });
});

describe("FizzBuzz", () => {
  it("Deberia devolver 5 a Buzz", () => {
    expect(ConvertirFizzBuzz(5)).toBe("Buzz");
  });
});

describe("FizzBuzz", () => {
  it("Deberia devolver 10 a Buzz", () => {
    expect(ConvertirFizzBuzz(10)).toBe("Buzz");
  });
});

describe("FizzBuzz", () => {
  it("Deberia devolver un multiplo de 3 y 5 a FizzBuzz", () => {
    expect(ConvertirFizzBuzz(15)).toBe("FizzBuzz");
  });
});

describe("FizzBuzz", () => {
  it("Deberia devolver una lista de tamanio N", () => {
    expect(SecuenciaFizzBuzz()).toBe("1, 2, 3, 4, 5, 6, 7, 8, 9, 10");
  });
});




