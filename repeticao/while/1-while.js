var n = 0;
var x = 0;

console.log('Exemplo while >> valor de n = 0 e x = 0')

while (n < 3) {
    n++;
    x += n  // 1, 2, 3
    console.log(`Valor de x quando n = ${n}: ${x}}`);
};

/* 
Resultado da execucao

[Running] node "/home/fernanda/Documents/aula-javascript-es6-basico/repeticao/while/1-while.js"
Exemplo while >> valor de n = 0 e x = 0
Valor de x quando n = 1: 1}
Valor de x quando n = 2: 3}
Valor de x quando n = 3: 6}

 */

