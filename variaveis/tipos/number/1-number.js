const myNumber = 12.4032;

//Transformar numero para string
const numberAsString = myNumber.toString();
console.log('Número transformado em string:', numberAsString, typeof numberAsString);

//Retorna numero com um numero de casas decimais
const fixedCTwoDecimals = myNumber.toFixed(2);
console.log('\nNumero com dusa casas decimais: ', fixedCTwoDecimals, typeof fixedCTwoDecimals);

//Transforma uma string em float
console.log('\nString parseada para float: ', parseFloat('13.22'), typeof  parseFloat('13.22'));

//Transforma uma string em int
console.log('\nString parseada para int: ', parseInt('13.20'), typeof parseInt('13.20'));

//parse não exibe casas decimais quando = zero nesse caso tem que usar o fixedC

console.log('\n>> parse não exibe casas decimais quando = zero nesse caso tem que usar o fixedC');

