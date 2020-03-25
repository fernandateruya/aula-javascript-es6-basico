const array = [0, 2, 3, 4, 5];

array.forEach(item => {
    if (item % 2 === 0) {
        console.log(`O numero ${item} é par. `);
    }else{
        console.log(`O numero ${item} é impar. `);
    }
});

/* 
Resultado da execução

[Running] node "/home/fernanda/Documents/aula-javascript-es6-basico/condicionais/if/1-if.js"
O numero 0 é par. 
O numero 2 é par. 
O numero 3 é impar. 
O numero 4 é par. 
O numero 5 é impar. 

 */