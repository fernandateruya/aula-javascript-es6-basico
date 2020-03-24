// funcoes aninhadas

function init(){
    const exemplo = "Essa variável";

    return function(){
        console.log('1 - O valor de variável exemplo é: $(exemplo).');

        return function() {
            console.log('2 - O valor da variável )exemplo é: $(exemplo).');

            return function() {
                    console.log('3 - O valor da variável )exemplo é: $(exemplo).');
    
            }    
        }
    }
}

const initFn1 = init();

const initFn2 = initFn1();

const initFn3 = initFn2();

initFn3();

/* 
resultado da execução 

[Running] node "/home/fernanda/Documents/introducao-ao-es6/conceitos/closure/closure.js"
1 - O valor de variável exemplo é: $(exemplo).
2 - O valor da variável )exemplo é: $(exemplo).
3 - O valor da variável )exemplo é: $(exemplo).

 */