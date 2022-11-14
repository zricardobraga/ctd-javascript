/* 
José Ricardo Braga - CTD - Turma 03

Checkpoint de Programação Imperativa!

Olá, você foi contratado para executar este projeto.É importante que você analise, entenda o pedido do cliente e desenvolva conforme solicitado.Veja abaixo os requisitos do projeto:

- Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré - definidos. 

1 - Pipoca – 10 segundos(padrão);
2 - Macarrão – 8 segundos(padrão);
3 - Carne – 15 segundos(padrão);
4 - Feijão – 12 segundos(padrão);
5 - Brigadeiro – 8 segundos(padrão);

- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade.Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente";
- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".

*/

var readlineSync = require('readline-sync');

function timer(option, time) {

    if (option == 1) {

        if (time < 10) {
            console.log("Tempo insuficiente");
        }

        else if (time == 10 || time < 20) {
            console.log("Pronto pronto, bom apetite!!!");
        }

        else if (time > 20 && time < 30) {
            console.log("Queimou!");

        }

        else {
            console.log("Kabumm");
        }
    }

    else if (option == 2 || option == 5) {
        if (time < 8) {
            console.log("Tempo insuficiente");
        }

        else if (time == 8 || time < 16) {
            console.log("Pronto pronto, bom apetite!!!");
        }

        else if (time > 16 && time < 32) {
            console.log("Queimou!");

        }

        else {
            console.log("Kabumm");
        }
    }

    else if (option == 3) {
        if (time < 15) {
            console.log("Tempo insuficiente");
        }

        else if (time == 15 || time < 30) {
            console.log("Pronto pronto, bom apetite!!!");
        }

        else if (time > 30 && time < 45) {
            console.log("Queimou!");

        }

        else {
            console.log("Kabumm");
        }
    }

    else if (option == 4) {

        if (time < 12) {
            console.log("Tempo insuficiente");
        }

        else if (time == 12 || time < 24) {
            console.log("Pronto pronto, bom apetite!!!");
        }

        else if (time > 24 && time < 36) {
            console.log("Queimou!");

        }
        else {
            console.log("Kabumm");
        }
    }

}

do {
    var option = parseInt(readlineSync.question('Escolha a sua opção do menu: '));
    switch (option) {
        case 1:
            console.log("Pipoca");
            var time = parseInt(readlineSync.question('Informe o tempo de preparo: '));
            timer(1, time);
            break;
        case 2:
            console.log("Macarrão");
            var time = parseInt(readlineSync.question('Informe o tempo de preparo: '));
            timer(2, time);
            break;
        case 3:
            console.log("Carne");
            var time = parseInt(readlineSync.question('Informe o tempo de preparo: '));
            timer(3, time);
            break;
        case 4:
            console.log("Feijão");
            var time = parseInt(readlineSync.question('Informe o tempo de preparo: '));
            timer(4, time);
            break;
        case 5:
            console.log("Brigadeiro");
            var time = parseInt(readlineSync.question('Informe o tempo de preparo: '));
            timer(5, time);
            break;
        default:
            console.log("Prato inexistente!")
            break;
    }
} while (option < 1 || option > 5);
