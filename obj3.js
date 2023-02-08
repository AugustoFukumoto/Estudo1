
const pessoal = {
    nome: "Annnnn",
    Idade: "39",
    Profissao: "preguiça",
    Email: "huerhuerheu@huerhuerheu.com",
    Telefone: ['1215468900', '16666558997701']
    };

pessoal.endereco = {
    Rua: "Dos cansados",
    numero: "zzzz",
    Apato: true,
    complemento: "ap 1",
};

function ligaParaCliente ( telefoneCom, telefoneRes) {
    console.log(`Ligando para ${telefoneCom}`);
    console.log(`Ligando para ${telefoneRes}`);
}

ligaParaCliente(pessoal.Telefone[0], pessoal.Telefone[1]); 
// para esse exemplo ligarParaCliente(...pessoal.telefone);

const encomenda = {
    destinatario: pessoal.nome,
    endereco: pessoal.endereco,
    // exemplo: ...pessoal.endereco[0], mesma forma de escrever. 
};

console.log(encomenda);

//------------------------------------------------------------------------------

// Json = JavaScript Object Notation = notação de objeto JavaScript


const dados = require("./obj4.json");

console.log(dados);
console.log(typeof dados); //objeto


const clientEmString = JSON.stringify(dados);

console.log(clientEmString);
console.log(typeof clientEmString); //string


// string para objeto

const objetoCliente =  JSON.parse(clientEmString);

console.log(objetoCliente); // voltou a ser objeto.