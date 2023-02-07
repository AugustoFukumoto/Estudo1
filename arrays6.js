
const notas = [10, 9.5, 8, 7, 6];

const notasAtualizadas = notas.map((nota)=> {
    return nota + 1 >= 10 ? 10 : nota + 1;
   });

console.log(notasAtualizadas);


const nomess = [ "Ana", "Pamela", "Augusto"];

const nomesPadronizados = nomess.map((nomess) => {
    return nomess.toUpperCase();
});

console.log(nomesPadronizados);