const clientes = require("./obj5.json");

function ordenar(lista, propriedade){
    const resultado = lista.sort((a,b) => {
        if(a[propriedade] < b[propriedade]){
            return -1;
        }
        if (a[propriedade] > b[propriedade]){
            return 1;
        }
        return 0;
    });
    return resultado;
}
const ordenarPorNome = ordenar(clientes, "nome");


console.log(ordenarPorNome);