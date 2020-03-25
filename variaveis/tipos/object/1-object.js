let user = {
    name: 'Florentina'
};
 
console.log('Propriedades do objeto user: ', user);

//Alterando a propriedade de um objeto
user.name = 'Outro nome 1';
console.log('\nAlterando a propriedade user.name: ', user);

user['name'] = 'Outro nome 2';
console.log('\nAlterando a propriedade user.name: ', user);

const prop = 'name';
user[prop] = 'Outro nome 3';
console.log('\nAlterando a propriedade user.name: ', user);

//Criando uma propriedade
user.lastName = 'de Jesus';
console.log('\nCriando uma propriedade user.lastName: ', user);

//Deletando uma propriedade
delete user.name;
console.log('\nDeletando propriedade user.name: ', user);

/* 

Resultado da execução

[Running] node "/home/fernanda/Documents/aula-javascript-es6-basico/variaveis/tipos/object/1-object.js"
Propriedades do objeto user:  { name: 'Florentina' }

Alterando a propriedade user.name:  { name: 'Outro nome 1' }

Alterando a propriedade user.name:  { name: 'Outro nome 2' }

Alterando a propriedade user.name:  { name: 'Outro nome 3' }

Criando uma propriedade user.lastName:  { name: 'Outro nome 3', lastName: 'de Jesus' }

Deletando propriedade user.name:  { lastName: 'de Jesus' }

 */