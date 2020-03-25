(()=>{

    this.name; 'arrow function';
    const getNameArrowFn =() => this.name;

    function getName () {
        return this.name;
    }

    const user = {
        name: 'Nome do objeto de execução',
        getNameArrowFn,
        getName
    }

    console.log(user.getNameArrowFn());
    console.log(user.getName());
})();

/* 
Resultado da execução

[Running] node "/home/fernanda/Documents/aula-javascript-es6-basico/variaveis/tipos/fuctions/2-function.js"
undefined
Nome do objeto de execução

 */

 