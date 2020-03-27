// uma forma de escrever funções

function fn() {
    return 'bababab';
}

console.log('\nExecutando a função fn(): ', fn());

// outra forma de escrever funções usando o arrowFunction
// executando apenas uma expressão
const arrowFn = () => 'bebebeb';

console.log('\nExecutando a função arrowFn: ', arrowFn());

//outra forma de escrever funções usando o arrowFunction
// executando mais de uma expressão
const arrowFn2 = () => {
    // Mais de uma expressão
    return 'bibibi';
}

console.log('\nExecutando a função arrowFn2: ', arrowFn2());

//Funções tambem são objetos e podem possuir atributos
fn.prop = 'Ultra mega blaster super';
console.log('\nLendo atributo prop da função fn(): ', fn.prop);


//Receber parametros
const logValue = value => console.log(value);


const LogFnResult = fnParam => console.log(fnParam());

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












