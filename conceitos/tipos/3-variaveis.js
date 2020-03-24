const name = 'Lorelay';

/* // não podemos alterar o valor
name = 'Lorealy';


const user = {
    name: 'Lorelay'
};

// mas se for um objeto podemos trocar suas propriedades
user.name = 'Outro nome';

//Não podemos fazer o objeto apontar para outro lugar
user = {
    name: 'Lorelay'
};
 */

const persons = ['Lorelay' , 'Xayane', 'Raquely']

// podemos adicionar novos itens
persons.push('Clodoaldo');


console.log('\nArray após alteração:' , persons);

/* 
resultado da execução 

[Running] node "/home/fernanda/Documents/introducao-ao-es6/conceitos/tipos/3-variaveis.js"
/home/fernanda/Documents/introducao-ao-es6/conceitos/tipos/3-variaveis.js:4
name = 'Lorealy';
     ^

 [Running] node "/home/fernanda/Documents/introducao-ao-es6/conceitos/tipos/3-variaveis.js"
/home/fernanda/Documents/introducao-ao-es6/conceitos/tipos/3-variaveis.js:15
user = {
     ^
    
[Running] node "/home/fernanda/Documents/introducao-ao-es6/conceitos/tipos/3-variaveis.js"

Array após alteração: [ 'Lorelay', 'Xayane', 'Raquely', 'Clodoaldo' ]


 */








