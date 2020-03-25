const myNumber = 12.4032;

//Transformar numero para string
const numberAsString = myNumber.toString();
console.log('Número transformado em string:', typeof numberAsString);

//Retorna numero com um numero de casas decimais
const fixedCTwoDecimals = myNumber.toFixed(2);
console.log('\nNumero com dusa casas decimais: ', fixedCTwoDecimals);

//Transforma uma string em float
console.log('\nString parseada para float: ', parseFloat('13.22'));

//Transforma uma string em int
console.log('\nString parseada para int: ', parseInt('13.20'));

