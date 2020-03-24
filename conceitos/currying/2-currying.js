// funcoes soma recebe a contante 2 mais o parametro de soma2

function soma(a){
    return function(b) {
        return a + b;
    }
}

const soma2 = soma(2);

console.log(soma2(2));
console.log(soma2(3));
console.log(soma2(4));
console.log(soma2(5));


/* 
resultado da execução

[Running] node "/home/fernanda/Documents/introducao-ao-es6/conceitos/currying/2-currying.js"
4
5
6
7

 */

