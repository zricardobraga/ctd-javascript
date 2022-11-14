/*

somarArray()

Neste exercício, você criará uma função somarArray() que aceita um array de números e retorna a soma de todos eles.

Exemplo:
somarArray([1,2,3])                // 6
somarArray([10, 3, 10, 4])     // 27
somarArray([-5,100])             // 95

*/

function somaArray(array = []) {
    var soma = array[0] + array[1] + array[2];
    return soma;
}

var result = somaArray([1, 1, 3]);
console.log("Resultado: " + result);
var result1 = somaArray([10, 3, 20]);
console.log("Resultado: " + result1);
var result2 = somaArray([-50, 100, 200]);
console.log("Resultado: " + result2);

/*
Simulação Array.join()

Neste exercício, você criará uma função chamada join que recebe um array e simula o comportamento do método Array.join().

Importante: Não poderá utilizar o método Array.join() original.

Por exemplo:
join(["o","l","á"]) deve retornar a string "olá".
join([“t”,"c","h","a,"u"]) deve retornar a string "tchau".
*/

function join(array = []) {
    return array[0] + array[1] + array[2];
}

var result = join(["O", "l", "á"]);

console.log("Resultado: " + result);

/*
Coleções de Filmes (e mais…)
O tech leader da equipe precisa conhecer a estrutura de dados do novo projeto. Para isso, devemos:
Criar a estrutura apropriada para armazenar os seguintes filmes e séries:
    "star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela". 
Importante: verifique se tudo funciona corretamente acessando qualquer um dos filmes uma vez que a estrutura correspondente tenha sido criada.

Os filmes devem estar todos em letras maiúsculas. Para isso, crie uma função que recebe um array por parâmetro e converta o conteúdo de cada elemento em letras maiúsculas.
Dica: revise o que faz o método de strings .toUpperCase().

Crie outra estrutura semelhante à primeira, mas com os seguintes filmes de animação:
    "toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"
Em seguida, crie uma função que receba dois arrays como parâmetros, para poder adicionar os elementos contidos no segundo array, dentro do primeiro, a fim de retornar um único array com todos os filmes como seus elementos.

Durante o processo, percebemos que o último elemento na série de filmes animados é, na verdade, um game. Agora devemos editar nosso código e modificá-lo para que possamos remover o último elemento antes de migrar o conteúdo para o array que contém todos os filmes.
PS: por precaução, salve o elemento que você vai deletar em uma variável.

Finalmente, recebemos dois arrays com classificações feitas por diferentes usuários do mundo nos filmes com o seguinte formato:
    const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
    const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
Crie uma função que compare as notas e nos diga se elas são iguais ou diferentes.
Para verificar se tudo está bem até agora, recomendamos testar cada uma das funções, a fim de verificar seu correto funcionamento.
Se chegarmos a este ponto e tudo estiver bem, o tech leader da equipe deve estar extremamente feliz com nosso trabalho e desempenho.

*/

var filmes = ["star wars", "matrix", "mr. robot", "o preço do amanhã", "a vida é bela"];

console.table(filmes);

function conversorMaisculo(array = [0]) {
    const filmesConvertidos = [];
    filmesConvertidos[0].toUpperCase(array[0]);
}

console.log(conversorMaisculo(filmes));