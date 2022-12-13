// while
/*

var i = 0;

while (i < 1000000000) {
    console.log(i);
    i++;
}



// do - while

var i = 0;

do {
    console.log(i)
    i++;
} while (i < 10);



// for

for (let index = 0; index < 10; index++) {
    console.log("Contando... ", index);   
}



const alicia = [23, 69, 32];
const bob = [12, 67, 43];

function encontraGanhador(a, b) {
    let pontosA = 0;
    let pontosB = 0;


    for (let index = 0; index < 3; index++) {
        let valorA = 1;
        let valorB = 1;
        if (a > b) {
            pontosA += valorA;
        } else {
            pontosB += valorB;
        }
    }

    if (pontosA > pontosB) {
        var result = "Alicia com " + pontosA;
    } else {
        var result = "Bob com " + pontosB;
    }

    return result;
}

var resultadoFinal = encontraGanhador(alicia, bob);

console.log("Vencedor(a): " + resultadoFinal + " pontos");

*/





/*
1. Determine qual seria a maneira ideal de representar cada participante com suas pontuações.
*/
const participanteA = [5, 8, 4, 9, 5];
const participanteB = [8, 7, 8, 6, 8];
const participanteC = [7, 5, 10, 8, 3];

/*
2.	Crie uma função pontuacaoMedia à qual receba um participante por parâmetro e deve calcular e devolver a pontuação média dele.
*/

function pontuacaoMedia(participante) {
    let soma = 0;
    let media = 0;
    for (let i = 0; i < participante.length; i++) {
        soma += participante[i];
    }
    media = soma / participante.length;
    return media;
}

var mediaA = pontuacaoMedia(participanteA);
var mediaB = pontuacaoMedia(participanteB);
var mediaC = pontuacaoMedia(participanteC);

// console.log("Média de pontos do participante A: " + mediaA);
// console.log("Média de pontos do participante B: " + mediaB);
// console.log("Média de pontos do participante C: " + mediaC);

/*
3.	Crie uma função pontuacaoMaior que receba um participante por parâmetro e deve calcular e 
devolver a pontuação mais alta que o participante tem.
*/

function pontuacaoMaior(participante) {
    let maior = 0;
    for (let i = 0; i < participante.length; i++) {
        if (participante[i] > maior) {
            maior = participante[i];
        }
    }
    return maior;
}

var pontuacaoA = pontuacaoMaior(participanteA);
var pontuacaoB = pontuacaoMaior(participanteB);
var pontuacaoC = pontuacaoMaior(participanteC);

console.log("Maior pontuação do participante A: " + pontuacaoA);
console.log("Maior pontuação do participante B: " + pontuacaoB);
console.log("Maior pontuação do participante C: " + pontuacaoC);

/*

4.	Logo nosso líder tecnológico nos pede para criar essas duas funções, 
geramos uma nova funcionalidade chamada competição que receberá os 3 participantes por parâmetros, 
executará as duas funções criadas anteriormente para calcular as 
médias e pontuações mais altas de cada uma e deve anunciar (mostrar pelo console) o vencedor de cada modalidade de pontuação.

*/

function competicao(a, b, c) {
    let medias = [pontuacaoMedia(a), pontuacaoMedia(b), pontuacaoMedia(c)];
    let maiorMedia = 0;
    for (let i = 0; i < medias.length; i++) {
        if (medias[i] > maiorMedia ) {
            maiorMedia = medias[i];
        }
    }
    
    if (maiorMedia == pontuacaoMedia(a)){
        console.log("O vencedor é o Participante A com " + maiorMedia + " pontos");
    }
    if (maiorMedia == pontuacaoMedia(b)) {
        console.log("O vencedor é o Participante B com " + maiorMedia + " pontos");
    } else {
        console.log("O vencedor é o Participante C com " + maiorMedia + " pontos");
    }



    // console.log(maiorMedia);

    // let mediaA = pontuacaoMedia(participanteA);
    // let mediaB = pontuacaoMedia(participanteB);
    // let mediaC = pontuacaoMedia(participanteC);

    // let pontuacaoA = pontuacaoMaior(participanteA);
    // let pontuacaoB = pontuacaoMaior(participanteB);
    // let pontuacaoC = pontuacaoMaior(participanteC);

}

var result = competicao(participanteA, participanteB, participanteC);

// console.log(result);