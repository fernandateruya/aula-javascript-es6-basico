// AND lógico (&&
//exp1 && exp2

console.log('Resultado para true && true:      ', true && true);
console.log('Resultado para true && false:     ', true && false);
console.log('Resultado para false && true:     ', false && true);
console.log('Resultado para false && (3 == 4): ', false && (3 == 4));
console.log('Resultado para "Gato" && "Cão":   ', "Gato" && "Cão");
console.log('Resultado para false && "Gato":   ', false && "Gato");
console.log('Resultado para "Gato" && false:   ', "Gato" && false);

// OU lógico (||)
// exp1 || exp2

console.log('\nResultado para true || true:      ', true || true);
console.log('Resultado para true || false:     ', true || false);
console.log('Resultado para false || true:     ', false || true);
console.log('Resultado para false || (3 == 4): ', false || (3 == 4));
console.log('Resultado para "Gato" || "Cão":   ', "Gato" || "Cão");
console.log('Resultado para false || "Gato":   ', false || "Gato");
console.log('Resultado para "Gato" || false:   ', "Gato" || false);

// not LÓGICO (!)
// !exp1

console.log('\nResultado para !true:   ', !true);
console.log('Resultado para !false:  ', !false);
console.log('Resultado para !"Gato": ', !"Gato");

/* 
Resultado da execução

[Running] node "/home/fernanda/Documents/aula-javascript-es6-basico/operadores/logicos/1-logico.js"
Resultado para true && true:       true
Resultado para true && false:      false
Resultado para false && true:      false
Resultado para false && (3 == 4):  false
Resultado para "Gato" && "Cão":    Cão
Resultado para false && "Gato":    false
Resultado para "Gato" && false:    false

Resultado para true || true:       true
Resultado para true || false:      true
Resultado para false || true:      true
Resultado para false || (3 == 4):  false
Resultado para "Gato" || "Cão":    Gato
Resultado para false || "Gato":    Gato
Resultado para "Gato" || false:    Gato

Resultado para !true:    false
Resultado para !false:   true
Resultado para !"Gato":  false
 */