import { ConvertirFizzBuzz } from "./FizzBuzz.js";

describe("FizzBuzz", () => {
  it("Deberia devolver 3 Fizz", () => {
    expect(ConvertirFizzBuzz(3)).toEqual("Fizz");
  })
});