//evita os "side efects" >> alterações indesejadas nos atributos em tempo de execução

const students = [
    {
        name: 'Grace',
        grade: 7
    },
    {
        name: 'Jennifer',
        grade: 4
    },
    {
        name: 'Paul',
        grade: 10
    },    
];

function getApprovedStudents(studentsList) {
    return studentsList.filter(student => student.grade >= 7)
}

console.log('Alunos aprovados:');
console.log(getApprovedStudents(students));

console.log('\nLista de alunos:')
console.log(students);


/* 
resultado da execução

[Running] node "/home/fernanda/Documents/introducao-ao-es6/conceitos/imutabilidade/2-imutabilidade.js"
Alunos aprovados:
[ { name: 'Grace', grade: 7 }, { name: 'Paul', grade: 10 } ]

Lista de alunos:
[ { name: 'Grace', grade: 7 },
  { name: 'Jennifer', grade: 4 },
  { name: 'Paul', grade: 10 } ]
 */

