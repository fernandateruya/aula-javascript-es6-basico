//const >> respeita scopo de bloco
// escopo de função ()
// escopo de bloco {}

(() => {
    const test = 'valor função';
        console.log(`valor dentro da função "${test}"`); //lê o valor da variavel
    
        if (true) {
            const test = 'valor if'
            console.log(`valor dentro da do if "${test}"`); // cria uma nova variavel de dentro do if
        }
    
        console.log(`valor após execução "${test}"`) //não modifica o valor da variavel criada fora do if
    
    })();
    
/* 

resultado da execução

[Running] node "/home/fernanda/Documents/introducao-ao-es6/conceitos/tipos/3-variaveis.js"
valor dentro da função "valor função"
valor dentro da do if "valor if"
valor após execução "valor função"

 */