const longestWord = ('Antônio foi ao banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'
const fraseReturn = frase => {
    let fraseResult = frase.split(' ');
    let cont = 0;
    let result = ''
    for(const palavra of fraseResult) {
        if (palavra.length > cont) {
            cont = palavra.length;
            result = palavra;
        }
    }
    return result
}
console.log(fraseReturn(longestWord))

//const longestWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];
//console.log(longestWord("Antonio foi ao banheiro e não sabemos o que aconteceu"));   forma recursiva