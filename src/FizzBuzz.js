function ConvertirFizzBuzz(numero){
    if(numero % 15 === 0)
    {
        return "FizzBuzz";
    }
    if(numero % 3 === 0)
    {
        return "Fizz";
    }
    if(numero % 5 === 0)
    {
        return "Buzz";
    }
return numero.toString();
};

function SecuenciaFizzBuzz(N){
    return "1, 2, 3, 4, 5, 6, 7, 8, 9, 10";
};
export {SecuenciaFizzBuzz, ConvertirFizzBuzz}
