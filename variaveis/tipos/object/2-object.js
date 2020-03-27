const user = {
    name: 'Florentina',
    lastName: 'de Jesus'
};

//Recupera as chaves do objeto
console.log('Recupera as chaves do objeto do objeto user: ', Object.keys(user));

//Recupera os valores das chaves do objeto
console.log('\nRecupera os valores do objeto user: ', Object.values(user));


//Retorna um array de arrays contendo [ nome_prop, valor_prop]
console.log('\nLista de propriedades e valores: ', Object.entries(user));


  //Mergear propriedades de objetos
  Object.assign(user, {fullName: 'Florentina de Jesus'});

  console.log('\nAdiciona a propriedade fullName no objeto user', user);
  console.log('nRetorna um novo objeto mergeando dois ou mais objetos ', Object.assign({}, user, {age: 26}));

  // Previne todas as alterações em um objeto (congela)
  const newObj = { foo: 'bar '};
  Object.freeze(newObj);

console.log('\nVariavel newObj antes as alterações: ', newObj);


newObj.foo = 'changes'
delete newObj.foo;
newObj.bar = 'foo';

console.log('\nVariavel newObj apos as alterações: ', newObj);

//Não permite que se crie ou delete propriedade mas aceitass alterações nas propriedades existentes
const person = { name: 'Florentina'};
Object.seal(person);

console.log('\nVariavel person antes as alterações: ', person);

person.name = 'Florentina de Jesus';
delete person.name;
person.age = 42;

console.log('\nVariavel person apos as alterações: ', person);

/* 
[Running] node "/home/fernanda/Documents/aula-javascript-es6-basico/variaveis/tipos/object/2-object.js"
Recupera as chaves do objeto do objeto user:  [ 'name', 'lastName' ]

Recupera os valores do objeto user:  [ 'Florentina', 'de Jesus' ]

Lista de propriedades e valores:  [ [ 'name', 'Florentina' ], [ 'lastName', 'de Jesus' ] ]

Adiciona a propriedade fullName no objeto user { name: 'Florentina',
  lastName: 'de Jesus',
  fullName: 'Florentina de Jesus' }
nRetorna um novo objeto mergeando dois ou mais objetos  { name: 'Florentina',
  lastName: 'de Jesus',
  fullName: 'Florentina de Jesus',
  age: 26 }

Variavel newObj antes as alterações:  { foo: 'bar ' }

Variavel newObj apos as alterações:  { foo: 'bar ' }

Variavel person antes as alterações:  { name: 'Florentina' }

Variavel person apos as alterações:  { name: 'Florentina de Jesus' }

 */









