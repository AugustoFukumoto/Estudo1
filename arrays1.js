
const alunosA = ['Pamela', 'Augusto', 'João', 'Ana'];
const listaA = [10, 0, 7, 8.5];

const listaDeAlunosAA = [ alunosA, listaA];

function exibeNomeENota(alunosA){
    if (listaDeAlunosAA[0].includes(alunosA)){
        
        const indice = listaDeAlunosAA[0].indexOf(alunosA);
        const mediaDoAluno = listaDeAlunosAA[1][indice];

        console.log(`${alunosA} Tem a Média ${mediaDoAluno}.`);
    
    } else {
        console.log("aluno não encontrado!");
    }
}

exibeNomeENota("Augusto");