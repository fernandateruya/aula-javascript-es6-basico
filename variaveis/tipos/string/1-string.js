
// Retorna o tamanho de uma string
const textSize = 'Texto'.length
console.log(`Quantidade de letras: ${textSize}`);


// Retorna um array quebrando a string por um delimitador */
const splittedText = 'Texto'.split('x');
console.log('\nArray com as posições separadas pelo delimitador:', splittedText);

// Busca por um valor e substitui por outro
const replacedText = 'Texto'.replace('Text', 'txeT');
console.log('\nSubstituição de valor::', replacedText);


// Retorna a "fatia" de um valor
const lastChar = 'Texto'.slice(-1);
console.log('\nUltima letra de uma string:', lastChar);

const allWithoutLastChar = 'Texto'.slice(0, -1);
console.log('\nValor da string da primeira letra menos a ultima:', allWithoutLastChar);

const secondToEnd = 'Texto'.slice(1);
console.log('\nValor da string da segunda letra até a última:', secondToEnd);

const twoCharsBeforeFirstPos = 'Texto'.substr(0, 2);
console.log('\nAs duas letras primeiras letras são:', twoCharsBeforeFirstPos);

/* 
Ressultado da Execução

[Running] node "/home/fernanda/Documents/aula-javascript-es6-basico/variaveis/tipos/string/1-string.js"
Quantidade de letras: 5

Array com as posições separadas pelo delimitador: [ 'Te', 'to' ]

Substituição de valor:: txeTo

Ultima letra de uma string: o

Valor da string da primeira letra menos a ultima: Text

Valor da string da segunda letra até a última: exto

As duas letras primeiras letras são: Te


 */

