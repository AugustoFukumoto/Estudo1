const livros = require('./aula5');
const menorValor = require('./aula4');


for (let atual = 0; atual < livros.lenght; atual++){
    let menor = menorValor(livros, atual)
    
    let livroAtual = livros[atual];
    console.log('posição atual', atual)
    console.log('livro atual', livros[atual])
    let livroMenorPreco = livros[menor];
    console.log('livro menor preço', livros[menor]);
    livros[atual] = livroMenorPreco
    livros[menor] = livroAtual
}

console.log(livros);
