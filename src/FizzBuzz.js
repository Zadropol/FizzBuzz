function ConvertirFizzBuzz(n) {
    if(n % 15 === 0){
        return "FizzBuzz";
    }
    if (n % 3 === 0) {
        return "Fizz";
    }
    if(n %5 === 0){
        return "Buzz";
    }
  return n.toString();
}
function SecuenciaFizzBuzz(lim) {
    let resultado = [];
    for (let i = 1; i <= lim; i++) {
        resultado.push(ConvertirFizzBuzz(i));
    }
    return resultado.join(", ");
}

export {ConvertirFizzBuzz, SecuenciaFizzBuzz};