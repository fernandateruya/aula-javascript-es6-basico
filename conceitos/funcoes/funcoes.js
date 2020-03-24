//declaracao de funcao como constante

function getName (){
    return "Dona Cotinha";    
}

function logFn(fn){
    console.log(fn());
}

const logFnResult = logFn;

logFnResult(getName);


/* 

resultado da exeução

[Running] node "/home/fernanda/Documents/introducao-ao-es6/conceitos/funcoes/funcoes.js"
Dona Cotinha

 */


