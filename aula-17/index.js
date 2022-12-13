/*
//modulo para fazer a leitura de uma planilha .csv
const fs = require('fs'); // modulo interno do node.js
const meusDados = fs.readFileSync('./nomedoarquivo.csv', {encoding: 'utf-8'});

*/ 


class Conta {
    constructor(titular, numConta, tipo, saldo){
        this.titular = titular
        this.numConta = numConta,
        this.tipo = tipo,
        this.saldo = saldo
    };

}

let contas = [];

const conta1 = new Conta("Abigael Natte", 5486273622, "Corrente", 277.71);
const conta2 = new Conta("Ramon Connell", 1183971869, "Poupança",	86.75);
const conta3 = new Conta("Jarret Lafuente", 9582019689,	"Poupança", 273.63);
const conta4 = new Conta("Ansel Ardley", 1761924656, "Poupança", 324.15);
const conta5 = new Conta("Jacki Shurmer", 7401971607, "Poupança", 187.89);
const conta6 = new Conta("Jobi Mawtus",	630841470, "Corrente", 287.76);
const conta7 = new Conta("Thomasin Latour", 4223508636, "Corrente", 21.77);
const conta8 = new Conta("Lonnie Verheijden", 185979521, "Poupança", 259.94);
const conta9 = new Conta("Alonso Wannan", 3151956165, "Corrente",	76.01);
const conta10 = new Conta("Bendite Huggett", 2138105881, "Poupança", 331.96);
// console.log(conta1);

contas.push(conta1);
contas.push(conta2);
contas.push(conta3);
contas.push(conta4);
contas.push(conta5);
contas.push(conta6);
contas.push(conta7);
contas.push(conta8);
contas.push(conta9);
contas.push(conta10);


// console.log(contas);
class Banco {
    constructor(contas = []){
        this.contas = contas;
    };

    consultarClientes(numConta){
        for (const conta of contas) {
            if(numConta === conta.numConta) {
                return(conta);
            }
            
        }
        return "Cliente não encontrado";
    };

    deposito(numConta, valor){
        const contaDeposito = this.consultarClientes(numConta);
        if(numConta === contaDeposito) {
            contaDeposito.saldo += valor;
            return console.log("Depósito realizado! Seu novo saldo é conta " + contaDeposito.saldo);
        }
        // for (const conta of contas) {
        //     if(numConta === conta.numConta) {
        //         conta.saldo += valor;
        //         return console.log(`Depósito realizado! Seu novo saldo é ${conta.saldo}`);
        //     }
        // }

        
        return "Cliente não encontrado";
    }

    saque(numConta, valor){
        for (const conta of contas) {
            if(numConta === conta.numConta) {
                if(valor > conta.saldo){
                    return console.log("Fundos insuficientes!");
                }
                conta.saldo -= valor;
                return console.log(`Saque realizado! Seu novo saldo é ${conta.saldo}`);
            }
        }
        return "Cliente não encontrado";
    }
};

const itau = new Banco(contas);              

// console.log(itau.contas);

// console.log(itau.consultarClientes(630841));
itau.deposito(1761924656, 1000.00);
// itau.saque(1761924656, 1000.00);
