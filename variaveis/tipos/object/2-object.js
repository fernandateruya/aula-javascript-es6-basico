const user = {
    name: 'Florentina',
    lastName: 'de Jesus'
};

//Recupera as chaves do objeto
console.log('Propriedades do ubjeto user: ', Object.keys(user));

//Recupera os valores das chaves do objeto
console.log('\nLista de propriedades do objeto user: ', Object.values(user));


//Retorna um array de arrays contendo [ nome_prop, valor_prop]
console.log('\nLista de propriedades e valores: ', Object.entries(user));


//Mergear propriedades de objetos
Object.assign(user, {fullName: 'Florentina de Jesus'});

console.log('\nAdiciona a propriedade fullName n oobjeto user', user);
console.log('nRetorna um novo objeto mergeando dois ou mais objetos ', Object.assign({}, user, {age: 26}));

// Previne todas as alterações em um objeto
const newObj = { foo: 'bar '};
Object.freeze(newObj);

newObj.foo = 'changes'
delete newObj.foo;
newObj.bar = 'foo';

console.log('\nVariavel newObj apos as alterações: ', newObj);

//Permite apenas a alteração de propriedades existentes em um objeto
const person = { name: 'Florentina'};
Object.seal(person);

person.name = 'Florentina de Jesus';
delete person.name;
person.age = 42;

console.log('\nVariavel person apos as alterações: ', person);

/* 
Resultado da execução

[Running] node "/home/fernanda/Documents/aula-javascript-es6-basico/variaveis/tipos/object/2-object.js"
Propriedades do ubjeto user:  [ 'name', 'lastName' ]

Lista de propriedades do objeto user:  [ 'Florentina', 'de Jesus' ]

Lista de propriedades e valores:  [ [ 'name', 'Florentina' ], [ 'lastName', 'de Jesus' ] ]

Adiciona a propriedade fullName n oobjeto user { name: 'Florentina',
  lastName: 'de Jesus',
  fullName: 'Florentina de Jesus' }
nRetorna um novo objeto mergeando dois ou mais objetos  { name: 'Florentina',
  lastName: 'de Jesus',
  fullName: 'Florentina de Jesus',
  age: 26 }

Variavel newObj apos as alterações:  { foo: 'bar ' }

Variavel person apos as alterações:  { name: 'Florentina de Jesus' }

 */









