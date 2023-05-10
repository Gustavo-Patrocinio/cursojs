/* Desafio: Sistema de classificação de filmes
Objetivo: Criar um sistema simples de classificação de filmes que permita ao usuário inserir o título do filme, a classificação etária e a avaliação do filme. O sistema deve então exibir as informações do filme de maneira formatada e calcular a média de avaliação de todos os filmes inseridos.
Requisitos:
Permitir que o usuário insira o título, a classificação etária e a avaliação do filme (de 1 a 5).
Armazenar as informações do filme em um objeto e adicioná-lo a uma lista de filmes.
Calcular a média das avaliações de todos os filmes inseridos.
Exibir as informações do filme e a média das avaliações de maneira formatada.*/


// inserir o título do filme
// classificação etária 
// avaliação do filme
// O sistema deve então exibir as informações do filme de maneira formatada 
// calcular a média de avaliação de todos os filmes inseridos.

let vetorFilme = [];
/*
vetorFilme.vetorFilmeTitulo = [];
vetorFilme.vetorclassificacaoEtaria = [];
vetorFilme.vetorAvaliacaoFilme = [];
*/

/* TENTATIVA 1:
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  let i = 0;

  function input(){

      readline.question('Digite o titulo do filme ', titulo => {
          readline.question('Digite a classificação etária. ', classificacaoEtaria => {
              readline.question('Digite a avaliação do filme.', avaliacaoFilme => {
                vetorFilme.vetorFilmeTitulo.push(titulo);
                vetorFilme.vetorclassificacaoEtaria.push(classificacaoEtaria);
                vetorFilme.vetorAvaliacaoFilme.push(avaliacaoFilme);
                console.log(vetorFilme);
                readline.close();
            });
        });
    });
};

for(i = 0; i <3; i++){
    input();
}
*/

/* TENTATIVA 2 
const name = prompt('What is your name? ');
console.log(`Hey there ${name}`);
*/
const prompt = require('prompt-sync')();

function adicionarFilme(titulo,classificacaoEtaria,avaliacaoFilme){
    vetorFilme.push({"Titulo": titulo,
                    "Classificacao Etaria": classificacaoEtaria,
                    "Avaliacao do Filme": avaliacaoFilme})
};

function exibirFilmes(){
    console.log("*** Lista de filmes ***\n");

    for(i = 0; i < vetorFilme.length; i++){
        let filmeAtual = vetorFilme[i];
        console.log("Filme " + (i+1).toString() + ":");
        for (let key in filmeAtual) {
            console.log("    "+ key +":", filmeAtual[key]);
        };
        console.log("\n");
    };
}
function calculaMediaAvaliacao(){
    let soma = 0;
    for(i = 0; i < vetorFilme.length; i++){
        let filmeAtual = vetorFilme[i];
        soma+= parseInt(filmeAtual["Avaliacao do Filme"]);
    };
    console.log("A media das avaliações eh: ", soma/vetorFilme.length);
}


function main(){
    const quantidadeFilmes = parseInt(prompt('Digite a quantidade de filme que serão inseridos: '));
    console.log("\n");
    for(i = 0; i < quantidadeFilmes; i++){
        console.log("Filme " + (i+1).toString() + ":");
        const titulo = prompt('    Titulo: ');
        const classificacaoEtaria = prompt('    Classificacao Etaria: ');
        const avaliacaoFilme = prompt('    Avaliacao do Filme: ');
     
        adicionarFilme(titulo,classificacaoEtaria,avaliacaoFilme);
        console.log("\n");
    };
    exibirFilmes();
    calculaMediaAvaliacao();
};
main();