
const alunos = ['Pamela', 'Augusto', 'Joao', 'Ana'];
const medias = [7, 1, 8, 7];

const reprovados = alunos.filter((aluno, indice) => {
    return medias [indice] < 7;
});

console.log(reprovados);

//---------------------------------------------------------------------------------------

const salaJs = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaAA = [6, 5, 8, 9, 5, 6];
const salaBB = [7, 3.5, 8, 9.5];

function calculaMedia(notasDaSala){
const somaDasNota = notasDaSala.reduce((acumulador, nota) => {
        return acumulador + nota;
    }, 0);
    
/* const somaDasNota = notasDaSala.reduce((acc, nota) => acc + nota, 0); 
outro jeito de escrever mais simplificado.*/

    const mediaxx = somaDasNota / notasDaSala.length;
    return mediaxx;
}

console.log(`A média da sala de Js é ${calculaMedia(salaJs)}.`);
console.log(`A média da sala de AA é ${calculaMedia(salaAA)}.`);
console.log(`A média da sala de BB é ${calculaMedia(salaBB)}.`);


//------------------------------------------------------------------------------

const numeros = [43, 50, 65, 12];

const soma = numeros.reduce((acc, atual) => atual + acc, 0);

console.log(soma);