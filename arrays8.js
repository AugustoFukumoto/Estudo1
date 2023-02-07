const notas = [7, 7, 8, 9];

const novasNotas = [...notas]; /*colocando entre [...variavel]; nao ira alterar
const notas e sim a const novasNotas */
novasNotas.push(10);

console.log(`As novas notas são ${novasNotas}.`);
console.log(`As novas notas são ${notas}.`);


const nomesrep = ["Ana", "Clara", "Pamela", "Pamela", "Augusto", "Augusto", "Augusto"];


const nomesAtualizado = [... new Set(nomesrep)];

console.log(nomesAtualizado);