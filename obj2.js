const cliente = {
    nome: "Augusto",
    Idade: "31",
    Profissao: "Engenheiro",
    Email: "huerhuerheu@huerhuerheu.com",
    Telefone: ['1215468900', '16666558997701'],
    saldo: 200,
    efetuarPagamento: function (valor) {
        if (valor > this.saldo){
            console.log("Saldo insuficiente");
        } else {(valor < this.saldo) 
            this.saldo -= valor;
            console.log(`Pagamento realizado, novo saldo?: ${this.saldo}`);
        }
    },
    };

cliente.efetuarPagamento(50);    


//-----------------------------------------------------------------------------------


const pessoa = {
    nome: "Pamela",
    Idade: "33",
    Profissao: "Engenheiro",
    Email: "huerhuerheu@huerhuerheu.com",
    Telefone: ['1215468900', '16666558997701']
    };

pessoa.endereco = {
    Rua: "Okazaki-shi",
    numero: "465897",
    Apato: true,
    complemento: "ap 400",
};

for (let chave in pessoa){
    //console.log(cliente[chave]);
    let tipo =typeof pessoa[chave];
    if(tipo !== "object" && tipo !== "function"){ /* !== se ele for diferente de object
&& e se o tipo for diferente de function */
    console.log(`A chave ${chave} tem o valor ${pessoa[chave]}`);
    }
};

const paciente = {
    nome: "Danielle",
    idade: 38,
    email: "Dani-se@email.com",
    identicacao: "chata012",
    funcao:"brava",
    peso:75.1,
    altura:1.74,
    calcularIMC:function(){
          return (this.peso/(Math.pow(this.altura,2)));
    },
    nomeCompleto:function(){
      console.log(this.nome);
    }
   };

console.log(paciente);

//-----------------------------------------------------------------------------------------------


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

const chaveDoObjeto = Object.keys(pessoal);

console.log(chaveDoObjeto);


// ! = negação.
if(!chaveDoObjeto.includes("endereco")) {
    console.error("Erro. é necessário ter um endereço cadastrado.");
}
