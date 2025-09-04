import {SecuenciaFizzBuzz} from "./FizzBuzz.js";

const input = document.querySelector("#numero");
const form = document.querySelector("#fizzbuzz-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const numero = Number.parseInt(input.value);
  div.innerHTML = "<p>" + SecuenciaFizzBuzz(numero) + "</p>";
});
