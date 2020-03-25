console.log('Exemplo switch');

fruit = 'mamao';

console.log('\n Fruta: ', fruit);

switch (fruit) {
    case 'banana':
        console.log('R$ 3.00/kg');
        break;
    case 'mamao':
        console.log('R$ 2.00/kg');
        break;
    default:
        console.log('Produto nao existe no estoque');
        break
};

fruit = 'banana';

console.log('\n Fruta: ', fruit);

switch (fruit) {
    case 'banana':
        console.log('R$ 3.00/kg');
        break;
    case 'mamao':
        console.log('R$ 2.00/kg');
        break;
    default:
        console.log('Produto nao existe no estoque');
        break
};

fruit = 'abacaxi';

console.log('\n Fruta: ', fruit);

switch (fruit) {
    case 'banana':
        console.log('R$ 3.00/kg');
        break;
    case 'mamao':
        console.log('R$ 2.00/kg');
        break;
    default:
        console.log('Produto nao existe no estoque');
        break
};

/* 
Resultado da execucao

[Running] node "/home/fernanda/Documents/aula-javascript-es6-basico/condicionais/switch/1-switch.js"
Exemplo switch

 Fruta:  mamao
R$ 2.00/kg

 Fruta:  banana
R$ 3.00/kg

 Fruta:  abacaxi
Produto nao existe no estoque
 */
