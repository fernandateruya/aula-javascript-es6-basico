let arr = [3, 5, 7];
arr.foo = "hello";

console.log('Exemplo para let i in arr');
console.log('\n');

for (let i in arr) {
    console.log('Valor de i:', i ); //logs "0", "1", "2", "foo" 
}

console.log('Exemplo para let of in arr');
console.log('\n');

for (let i of arr) {
    console.log('Valor de i:', i ); // logs "3", "5", "7" 
}

/* 

Resultado da execução

[Running] node "/home/fernanda/Documents/aula-javascript-es6-basico/repeticao/for...in-off/1-for-in-off.js"
Exemplo para let i in arr


Valor de i: 0
Valor de i: 1
Valor de i: 2
Valor de i: foo
Exemplo para let of in arr


Valor de i: 3
Valor de i: 5
Valor de i: 7


 */