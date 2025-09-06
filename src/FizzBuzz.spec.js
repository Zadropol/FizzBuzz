import { ConvertirFizzBuzz } from "./FizzBuzz.js";

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

