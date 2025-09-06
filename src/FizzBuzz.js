function ConvertirFizzBuzz(numero){
    if(numero %3 ===0)
    {
        return "Fizz";
    }
    return numero.toString();
};

export {ConvertirFizzBuzz}
