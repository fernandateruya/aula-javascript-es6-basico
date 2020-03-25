// Spread ...
var partes = ['combro', 'joelhos']
var musica = ['cabeça', ... partes, 'e', 'pes'];

console.log(partes);
console.log(musica);

var musica = ['cabeca', 'ombro', 'joelhos', 'e', 'pes'];

console.log(musica);

function fn(x, y, z) {
    var args = [0, 1, 2];
    fn(...args);
}