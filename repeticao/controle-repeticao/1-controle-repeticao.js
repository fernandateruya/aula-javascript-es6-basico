console.log('Exemplo de utilizacao de break');

var index = 0;

while(true) {
    index++;
    if (index > 2) {
        break;
    }
    console.log('Valor index: ', index);
}



console.log('\nExemplo de utilizacao de continue');
const array = [1, 2, 3, 4, 5, 6];

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element %2 === 0) {
        continue;
    }
    console.log('Elemento do array: ', element);
}


/* 
 Resultado da execução
 
[Running] node "/home/fernanda/Documents/aula-javascript-es6-basico/repeticao/controle-repeticao/1-controle-repeticao.js"
Exemplo de utilizacao de break
Valor index:  1
Valor index:  2

Exemplo de utilizacao de continue
Elemento do array:  1
Elemento do array:  3
Elemento do array:  5

 */







