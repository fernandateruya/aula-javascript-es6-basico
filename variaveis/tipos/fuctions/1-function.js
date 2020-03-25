function fn() {
    return 'Code here';
}

const arrowFn = () => 'Code here';
const arrowFn2 = () => {
    // Mais de uma expressão
    return 'Code here';
}

//Funções tambem são objetos
fn.prop = 'Posso criar propriedades';

console.log(fn());
console.log(fn.prop);

//Receber parametros
const logValue = value => console.log(value);
const LogFnResult = fnParam => console.log(fnParam());

LogFnResult(fn);

// Receber e retornar funções
const controlFnExec = fnParam => allowed => {
    if (allowed){
        fnParam();
    }
}

const handleFnExecution = controlFnExec(fn);

henadleFnExecution = controlFnExec(fn);

handleFnExecution(true); //Executara a função fn
handleFnExecution();     // Não executara a função fn

//controleFnExec como função
function controlExec(fnParam){
    return function(allowed) {
        if (allowed) {
            fnParam;
        }
    }
}


/* 
Resultado da execução

[Running] node "/home/fernanda/Documents/aula-javascript-es6-basico/variaveis/tipos/fuctions/1-function.js"
Code here
Posso criar propriedades
Code here

[Done] exited with code=0 in 0.543 seconds

 */












