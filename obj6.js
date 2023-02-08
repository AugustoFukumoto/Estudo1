
const clientes = require("./obj5.json");

/*
function encontrar(lista, chave, valor){
    return lista.find((item) => item[chave] === valor); 
}

const encontrado = encontrar(clientes, "nome", "Kirby");


console.log(encontrado); */

//-------------------------------------------------------------------------


function encontrar(lista, chave, valor){
    return lista.find((item) => item[chave].includes (valor); 

const encontrar2 = encontrar(clientes, "telefone", "31949463623");

console.log(encontrar2);