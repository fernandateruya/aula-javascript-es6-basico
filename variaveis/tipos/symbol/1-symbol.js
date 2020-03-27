const symbol1 = Symbol('bibibi');
const symbol2 = Symbol('bibibi');
console.log(symbol1);
console.log(symbol2);


// Symbols são unicos
console.log('Symbols são unicos >> symbol1 === symbol2: ', symbol1 === symbol2);


//Prevenir conflito entre nomes e propriedades
const nameSymbol1 = Symbol('name');
const nameSymbol2 = Symbol('name');

//não sobrescreve o conteudo
const user = {
    [nameSymbol1]: 'Florentina',
    [nameSymbol2]: 'Outro nome',
    lastName: 'de Jesus'
}

console.log('\n', user);

//Symbols criam propriedades que não são enumberables, não aparece a chave
for (const key in user){
    if (user.hasOwnProperty(key)) {
        console.log(`\nValor da chave ${key}: ${user[key]}`);

    }

}

console.log('\nPropriedades do objeto user: ', Object.keys(user));
console.log('\nValores das propriedades do objeto user: ', Object.values(user));

//Exibir todos os symbols de um objeto
console.log('\nSymbols registrados no objeto user: ', Object.getOwnPropertySymbols(user));

//Exibir todos os symbols de um objeto
console.log('\nTodas as propriedades do user (inclusive os symbols): ', Reflect.ownKeys(user));


// Criar um enum >> simular um enum
const directions = {
    UP    : Symbol( 'UP' ),
    DOWN  : Symbol( 'DOWN '),
    LEFT  : Symbol( 'LEFT' ),
    RIGHT : Symbol( 'RIGHT '),

}

/* 
Resultado da execução

[Running] node "/home/fernanda/Documents/aula-javascript-es6-basico/variaveis/tipos/symbol/1-symbol.js"
Symbol(bibibi)
Symbol(bibibi)
Symbols são unicos >> symbol1 === symbol2:  false

 { lastName: 'de Jesus',
  [Symbol(name)]: 'Florentina',
  [Symbol(name)]: 'Outro nome' }

Valor da chave lastName: de Jesus

Propriedades do objeto user:  [ 'lastName' ]

Valores das propriedades do objeto user:  [ 'de Jesus' ]

Symbols registrados no objeto user:  [ Symbol(name), Symbol(name) ]

Todas as propriedades do user (inclusive os symbols):  [ 'lastName', Symbol(name), Symbol(name) ]


 */


