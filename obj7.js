const clientes = require("./obj5.json");

function filtarAptoSemComplemento(clientes) {
    return clientes.filter((cliente) => {
        return(cliente.endereco.apartamento && 
            !cliente.endereco.hasOwnProperty("complemento")
        );
    });
}
const filtrados = filtarAptoSemComplemento(clientes)


console.log(filtrados);

