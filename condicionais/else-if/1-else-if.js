const array = [2, 3, 4, 5, 6, 8, 10, 15];

console.log('\nExemplo else if');

array.forEach(item => {
    if (item % 2 === 0) {
        console.log(`O numero ${item} é divisivel por 2.`);
    } else if (item % 3 === 0) {
        console.log(`O numero ${item} é divisivel por 3.`);
    } else if (item % 5 === 0) {
        console.log(`O numero ${item} é divisivel por 5.`);
    }
});

/* 

Resultado da execucao

[Running] node "/home/fernanda/Documents/aula-javascript-es6-basico/condicionais/else-if/1-else-if.js"

Exemplo else if
O numero 2 é divisivel por 2.
O numero 3 é divisivel por 3.
O numero 4 é divisivel por 2.
O numero 5 é divisivel por 5.
O numero 6 é divisivel por 2.
O numero 8 é divisivel por 2.
O numero 10 é divisivel por 2.
O numero 15 é divisivel por 3.

 */




