const substituaX = nome => {
    const frase = 'Tryber x aqui!';
    let array = frase.split(' ');
    for (let item = 0; item < array.length; item += 1) {
        if (array[item] === 'x') {
            array[item] = nome;
        }
    }
    return array.join(' ');
}
console.log(substituaX('Ricardo'));

const minhasSkills = (func) => {
    const skills = ['JavaScript', 'HTML', 'CSS'];
    let resultado = `
    ${func}
  
    Minhas três principais habilidades são:`;
  
    skills.forEach((skill) => { // estrutura de repetição para iterar sobre o array de skills
      resultado = `${resultado}
      - ${skill}`;
    }); // reatribui e adiciona a skill atual a variável resultado
    return resultado;
  };
  
  console.log(minhasSkills(substituaX('Ricardo')));