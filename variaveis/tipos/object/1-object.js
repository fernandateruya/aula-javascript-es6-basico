let user = {
    name: 'Florentina'
};
 
console.log(user);

//Alterando a propriedade de um objeto
user.name = 'Outro nome 1';
console.log(user);

user['name'] = 'Outro nome 2';
console.log(user);


//acessar objeto com valor dinamico
const prop = 'name';
user[prop] = 'Outro nome 3';
console.log(user);

//Criando uma propriedade
user[prop] = 'Outro nome 3';
user.lastName = 'de Jesus';
console.log(`\n`, user);

//Deletando uma propriedade
delete user.name;
console.log('\nDeletando propriedade user.name: ', user);

/* 

Resultado da execução

[Running] node "/home/fernanda/Documents/aula-javascript-es6-basico/variaveis/tipos/object/1-object.js"
{ name: 'Florentina' }
{ name: 'Outro nome 1' }
{ name: 'Outro nome 2' }
{ name: 'Outro nome 3' }

 { name: 'Outro nome 3', lastName: 'de Jesus' }

Deletando propriedade user.name:  { lastName: 'de Jesus' }eletando propriedade user.name:  { prop: 'Outro nome 3', lastName: 'de Jesus' }

 */