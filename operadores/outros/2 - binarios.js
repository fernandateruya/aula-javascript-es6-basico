// Arrays
var arvores = new Array('pau-brasil', 'loureiro', 'cedro', 'carvalho', 'sicomor');

console.log('Resultado para 0 in arvores: ', 0 in arvores); 
console.log('Resultado para 3 in arvores: ', 3 in arvores);
console.log('Resultado para 6 in arvores: ', 6 in arvores);
console.log('Resultado para "cedro" in arvores:  ', "cedro" in arvores);
console.log('Resultado para "lenght" in arvores: ', "lenght" in arvores);

//Objetos predefinidos

console.log('\nResultado para "PI" in Math: ', "PI" in Math);

var minhaString = new String('coral');

console.log('Resultado para "length" in minhaString = newString("coral"): ', "length" in minhaString);

//Objetos personalizados

var meucarro = {marca: 'Honda', modelo: "Acord", ano: 1998};

"marca" in meucarro;    //retorna true
"modelo" in meucarro;    //retorna true

console.log('\nValor para meu carro >> var meucarro = {marca: "Honda", modelo: "Acord", ano: 1998};');

console.log('\nResultado para "marca" in meucarro:  ', "marca" in meucarro);
console.log('\nResultado para "modelo" in meucarro: ', "modelo" in meucarro);

// instaceof

objeto instanceof tipoObjeto

var dia = new Date(2018, 12, 17);

if (dia instanceof Date) {
    //code here
}

/* 
//Resultado da execução 

[Running] node "/home/fernanda/Documents/aula-javascript-es6-basico/operadores/outros/2 - binarios.js"
Resultado para 0 in arvores:  true
Resultado para 3 in arvores:  true
Resultado para 6 in arvores:  false
Resultado para "cedro" in arvores:   false
Resultado para "lenght" in arvores:  false

Resultado para "PI" in Math:  true
Resultado para "length" in minhaString = newString("coral"):  true

Valor para meu carro >> var meucarro = {marca: "Honda", modelo: "Acord", ano: 1998};

Resultado para "marca" in meucarro:   true

Resultado para "modelo" in meucarro:  true
/home/fernanda/Documents/aula-javascript-es6-basico/operadores/outros/2 - binarios.js:32
objeto instanceof tipoObjeto
^

ReferenceError: objeto is not defined

 */

