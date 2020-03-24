// var >> não respeita scopo de bloco
// escopo de função ()
// escopo de bloco {}


var test = 'example-1';

(() => {
    console.log(`Valor dentro da função "${test}`); //identificou a variavei

    if (true) {
        var test = 'example-2';   
        console.log(`Valor dentro do if "${test}"`); //alterou o valor
    }

    console.log(`Valor após a execução do if "${test}`); // modificou o conteudo original da variavel

})();

/* 
resultado execução

[Running] node "/home/fernanda/Documents/introducao-ao-es6/conceitos/tipos/2-1-variaveis.js"
Valor dentro da função "undefined
Valor dentro do if "example-2"
Valor após a execução do if "example-2

 */

