// const pessoa = {
//     nome: 'Fulano de tal',
//     dataNascimento: '10/10/2010',
//     idade: 40,
//     peso: 115,
//     altura: 1.87, 

//     imc(){
//         return Math.round((this.peso)/this.altura**2);
//     },
// };

// function Pessoa(nome, dataNascimento, idade, peso, altura) {
//     this.nome = nome,
//     this.dataNascimento = dataNascimento,
//     this.idade = idade,
//     this.peso = peso,
//     this.altura = altura
// }

// const pedro = new Pessoa("Pedro", "01/10/1985", 10, 115, 1.87);

// console.log(pedro);

// console.log();

class Carro {
    
    constructor(modelo, marca, ano) {
        this.modelo = modelo,
        this.marca = marca,
        this.ano = ano
    }
    
    modeloCarro(){
        return this.modelo;
    }
};

const palio = new Carro("Pálio", "Fiat", 1997);

console.log(palio.modeloCarro());
console.log(palio.marca);
