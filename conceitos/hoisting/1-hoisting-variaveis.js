// variavel text é elevada dentro do código em tempo de execução 
// por isso a variavel é reconhecida mesmo que não haja conteúdo atribuido a ela
 


function fn(){
    console.log(text);

    var text = 'Exemplo';

    console.log(text);

}

fn();

/* 
resultado da execução

[Running] node "/home/fernanda/Documents/introducao-ao-es6/conceitos/hoisting/1-hoisting-variaveis.js"
undefined
Exemplo

 */

