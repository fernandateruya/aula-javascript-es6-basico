const users = ['Tabata', 'Larissa', 'Caio'];

const gender= {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')

}

const persons = [
    {
        name: 'Tabata',
        age:26,
        gender: gender.WOMAN
    },
    {
        name: 'Larissa',
        age:32,
        gender: gender.WOMAN
    },
    {
        name: 'Caio',
        age:17,
        gender: gender.MAN
    },
];

//Retornar a quantidade de itens de um array
console.log('Items:', persons.length);

//Verificar se é array
console.log('\nA variavel persons é um array? ', Array.isArray(persons));

//Iterar os itens do array
persons.forEach((persons, index, arr ) => {
    console.log(`\nNome: ${persons.name}`);
});

//Filtrar array
const mens = persons.filter(person => person.gender === gender.MAN);
console.log('\nNova lista apenas com homens:', mens);

//Retornar um novo
const personWithCouse = persons.map(person => {
    person.course = 'Introducao ao Javascript';
    return person;
});

console.log('\nPessoas com a adição do course:', personWithCouse);

//Transformar um array em outro tipo
const totalAge =  persons.reduce((age, person) => {
    age+= person.age;
    return age;
}, 0);

console.log('\nSoma de idade das pessoas ', totalAge);

//Juntando as operaçãoes
const totalEvenAge = persons
                        .filter(person => person.age % 2 === 0)
                        .reduce((age, person) => {
                            age += person.age;
                            return age;
                        }, 0);


console.log('\nSoma de idades das pessoas que possuem idade par ', totalEvenAge);
                        
/* 

Running] node "/home/fernanda/Documents/aula-javascript-es6-basico/variaveis/tipos/array/1-array.js"
Items: 3

A variavel persons é um array?  true

Nome: Tabata

Nome: Larissa

Nome: Caio

Nova lista apenas com homens: [ { name: 'Caio', age: 17, gender: Symbol(M) } ]

Pessoas com a adição do course: [ { name: 'Tabata',
    age: 26,
    gender: Symbol(W),
    course: 'Introducao ao Javascript' },
  { name: 'Larissa',
    age: 32,
    gender: Symbol(W),
    course: 'Introducao ao Javascript' },
  { name: 'Caio',
    age: 17,
    gender: Symbol(M),
    course: 'Introducao ao Javascript' } ]

Soma de idade das pessoas  75

Soma de idades das pessoas que possuem idade par  58
 */



