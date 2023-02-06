const nomes = [
    'João',
    'ana',
    'Caio',
    'Lara',
    'Marjorie',
    'Leo'
];

nomes.push("Rodrigo");
nomes.splice(1, 2);

console.log(nomes);


const alunos = ['joao', 'juliana', 'ana', 'caio'];
const medias = [10, 8, 7.5, 9];

const listaDeAlunoseMedia = [alunos, medias];

//console.log(listaDeAlunoseMedia);

console.log(`A aluna da posição 2 da lista de alunos é: ${listaDeAlunoseMedia[0][2]}. 
anota dessa aluna é: ${listaDeAlunoseMedia[1][2]} `);
