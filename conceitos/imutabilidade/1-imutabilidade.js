// o nome objeto fullName é criado sem alterar a referencia dele o objeto user

const user = {
    name: 'Florentina',
    lasName: 'de Jesus'
}

function getUserWithFullName(user) {
    return {
        ...user,
        fullName: '${user.name} ${user.lastName}'
    }
}

const userWithFullName = getUserWithFullName(user);

console.log(userWithFullName);

/* 
retaultado da execução

[Running] node "/home/fernanda/Documents/introducao-ao-es6/conceitos/imutabilidade/1-imutabilidade.js"
{ name: 'Florentina',
  lasName: 'de Jesus',
  fullName: '${user.name} ${user.lastName}' }

 */