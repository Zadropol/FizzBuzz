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
}

function SecuenciaFizzBuzz(N){
    let resultado = [];
    for(let i = 1; i <= N; i++){
        resultado.push(ConvertirFizzBuzz(i));
    }
    return resultado.join(", ");
}


export {SecuenciaFizzBuzz, ConvertirFizzBuzz}
