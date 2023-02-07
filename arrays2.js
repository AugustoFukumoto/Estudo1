
const numeros = [100, 200, 300, 400, 500, 600];

//Primeira expressao: é executada apenas uma unica vez
//Segunda expressao: condição de execução
//Terceira Expressao: é executada sempre ao final do bloco

//for (let indice = 0; indice < 6; indice++)

for (let indice = 0; indice < numeros.length; indice++){ 
    //console.log(indice);
    console.log(numeros[indice]);
}