

const cliente = {
nome: "Augusto",
Idade: "31",
CPF: "13131313131313",
Email: "huerhuerheu@huerhuerheu.com"
};

console.log(`o nome desse cliente é ${cliente.nome} e a idade ${cliente.Idade}, 
contato pelo ${cliente.Email} os 3 primeiros digitos do CPF sao ${cliente.CPF.substring(0, 3)}.`);

// ${cliente["nome"]} outra forma para escrever...


const pessoa = {
    nome: "Augusto",
    Idade: "31",
    Profissao: "Engenheiro",
    Email: "huerhuerheu@huerhuerheu.com",
    Telefone: ['1215468900', '16666558997701']
    };

console.log(pessoa.Telefone);



const pess = {
    nome: "Pamela",
    Idade: "33",
    Profissao: "Engenheiro",
    Email: "huerhuerheu@huerhuerheu.com",
    Telefone: ['1215468900', '16666558997701']
    };

pess.endereco = {
    Rua: "Okazaki-shi",
    numero: "465897",
    Apato: true,
    complemento: "ap 79865400",
};

console.log(pess); // console.log(pess["endereco"]); ou console.log(pess.endereco);

pess.enderecos = [{
    Rua: "Okazaki-shi",
    numero: "465897",
    Apato: true,
    complemento: "ap 79865400",
}];

pess.enderecos.push({
    Rua: "Osaka",
    numero: "97",
    Apato: false,

});


console.log(pess.enderecos);

const lista = pess.enderecos.filter(
    (endereco) => endereco.Apato === true
);

console.log(lista);