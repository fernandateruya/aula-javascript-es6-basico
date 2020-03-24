//

function fn(){
    log('Hoisting de função');

    function log(value){
        console.log(value);
    }
}

fn();

/* 
resultado da execução

[Running] node "/home/fernanda/Documents/introducao-ao-es6/conceitos/hoisting/2-hoisting-funcoes.js"
Hoisting de função

 */
