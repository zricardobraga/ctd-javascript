/* 
    MÉTODOS DE STRINGS

    Para o js uma string é um objeto. Assim, é possível fazer o uso de inumeros métodos.

    O retorno desses métodos sempre será um número.


let text = "    Hello fucking world        ";

console.log("Hello fucking world".length);
console.log("Hello fucking world".indexOf("o"));
console.log(text.slice(text));

console.log(text.trim());
console.log(text.split(" "));
console.log(text.replace("Hello", "Fuck of"));
console.log(text.trim());

*/ 

// ARRAYS

/* 
    Dentro de um array é possível armazenar qualquer quantidade de elementos, independente do tipo de dados de cada uma deles.
    Cada posição possui um índice (index) que começa sempre pela posição 0


let listaCompras = ["Ovo", "Arroz", "Feijão", "Leite", "Queijo"];

console.log("O método push adiciona um ou mais elementos no final do array");
console.log(listaCompras);
listaCompras.push("Suco");
console.log(listaCompras); 

console.log("O método pop elimina o último elemento do array");
listaCompras.pop();
console.log(listaCompras); 

console.log("O método shift elimina o primeiro elemento do array");
listaCompras.shift();
console.log(listaCompras); 

console.log("O método unshift adiciona um ou mais elementos no início do array");
listaCompras.unshift("Carne de sol", "Vinho");
console.log(listaCompras); 

console.log("O método join adiciona junta os elementos de um array usando um separador que podemos especificar");
let separados = listaCompras.join(" - ");
console.log(separados); 

console.log("O método lastIndexOf procura um elemento de um array de trás para a frente");
let procura = listaCompras.lastIndexOf("Leite");
console.log(procura);

console.log("O método includes procura um elemento de um array e retorna um booleano");
let procuraBooleano = listaCompras.includes("Leite");
console.log(procuraBooleano);
*/

// LOOPS 

/*

for (let i = 0; i<=5; i++) {
    console.log("Hello fucking world!");
}

for (let i = 0; i<=10; i++) {
    if (i%2 != 0) {
        console.log(i);
    }
}

for (let i = 0; i<= 10; i++) {
    for (let j = 0; j<= 10; j++) {
        console.log(i*j)
        
    }
    console.log();
}

*/ 

// let i = 0; 

// while (i<=10) {
//     if (i%2 != 0) {
//         console.log(i);
//     }
//     i++;
// }

// var readlineSync = require('readline-sync');
// var num = readlineSync.question('Informe o número ');

// while (i<=num) {
//     if (i%2 == 0) {
//         console.log("Par: " + i);
//     } else {
//         console.log("Ímpar: " + i);
//     }
//     i++;
// }

function leitorNumAlunos(){
    var readlineSync = require('readline-sync');
    var numAlunos = readlineSync.question('Informe o número de alunos ');
    return numAlunos;
} 

function somaNotas(alunos){
    let i = 0;
    while (i<=alunos) {
        var readlineSync = require('readline-sync');
        var nota = readlineSync.question('Informe as notas dos alunos ');
        var notasFormatadas = parseFloat(nota); 
        var soma = soma + notasFormatadas;
        i++;
    }
    return soma;
}

function mediaNotas (alunos, notas) {
    return notas / alunos;
}

let alunos = leitorNumAlunos();
let soma = somaNotas(alunos);
console.log(soma);
let media = mediaNotas(alunos, soma);

console.log("Média dos alunos " + media);


