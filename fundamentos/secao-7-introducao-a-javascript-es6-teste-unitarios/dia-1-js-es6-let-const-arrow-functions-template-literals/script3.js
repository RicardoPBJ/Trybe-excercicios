const factorial = number => {
    let resultado = 1;
    for (let index = 2; index < number; index += 1) {
        resultado *= index;
    }
    return resultado
}
console.log(`Esse é o fatorial ${resultado}`)

//const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
//console.log(factorial(5));   fazendo em apenas duas linhas 