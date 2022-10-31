/* 
---> NODE

O que é? Node é um ambiente de execução que permite executar js fora de um navegador. Seu uso é importante porque os navegadores possuem "motores" diferentes,
o que faz com que um mesmo código js tenha um comportantamento diferente, dependendo do navegador usado.
É um interpretador js. 
Permite programar tan to no frontend quando no backend usando js.

Comandos:

verificar a versão: node -v ou node --version

---> NPM (Node Package Manager)

O que é? É o gerenciador de pacotes do Node. 
Através dele podemos instalar as bibliotecas que iremos usar no projeto.
O que são as bibliotecas? São blocos de códigos que nos ajuda a aplicar soluções específicas dentro da nossa aplicação.

Comandos: 

verificar a versão: npm -v ou npm --version 

inicia o projeto Node: npm init

instala as bibliotecas: npm install NOME-DA-BIBLIOTECA --save 

atualiza as bibliotecas: npm update

remove as bibliotecas: npm install NOME-DA-BIBLIOTECA

---> VARIÁVEIS

O que é? São espaços de memória no computador, onde podemos armazenar diferentes tipos de dados. 
Em js existem três tipos de variáveis: var, let e const.

Exemplo de sintaxes:

declaração de variável

var nome;

let contator; 

const url;

atribuição de valor

var nome = 'José';

let contator = 1;

const url = "http://...";

Digno de nota: as variáveis do tipo const são declaradas com letras maiusculas

Digno de nota: Uma variável do tipo var será globalmente acessível em todo o código. 
Se houver outra variável com o mesmo nome em parte posterior do código, o seu valor será alterado.
No tipo let, o acesso será limitado apenas no bloco de código onde ela foi declarada.
As boas práticas recomendam o uso do let.
Nas do tipo const uma vez atribuído o valor, não pode ser alterado. Funciona apenas no bloco de código que estão declaradas.

Formatos de declaração de variáveis: 

Camel case: nomeVariavel;

Snake Case: nome_variavel;

Kebab Case: nome-variavel.

---> TIPOS DE DADOS

Permitem o js conhecer os recursos e funcionalidades que estarão disposniveis para estes dados.
Duas categorias: primitivos e complexos ou compostos.

Primitivos: number (inteiros ou ponto flutuante), string (texto) e booleno (true e false).

Digno de nota: Objeto literal cria um conjunto de informações em uma única variável. Aceitas vários tipos de dados em suas propriedades.

let meuCarro = {
    marca: "fiat", 
    ano: 2020 
}

Arrays, assim como o objeto literal, também cria um conjunto de informações em uma única variável. A diferença está na sintaxe e na possibilidade de receber apenas um tipo de dados.
Por exemplo, um array do tipo string só podera receber esse tipo de dados. Não possui propriedades, possui indices que começam a no 0.
let meuCarro = [
    "Fiat", "Palio"
]

---> OPERADORES

Pra que servem? Para manipular o valor das variáveis, realizar operações e comparar seus valores.

Tipos de operadores

de atribuição: =
numéricos = +, -, *, /, ++ (incremento), --(decremento), ** (exponenciação) e % (módulo - retorna o resto da divisão)

Digno de nota: os operadores númericos sempre retornarão o resultado númerico da operação

de concatenação: é usada para unir textos.
de comparação: == (simples, que retorna o um booleano), === (rigorosa, que irá retornar verdadeiro se o valor e o tipo dos dados forem os mesmos),
!= (desigualdade simple), !== (desigualdade rigorosa), > (maior), >= (maior ou igual), < (menor) e <= (menor ou igual)

---> OPERADORES LÓGICOS

&&: and
||: or

!: falso

*/ 

// aula sincrona de 24/10

console.log("Hello fucking world!");

function soma(num1, num2) {
    return num1+num2;
}

console.log("Resultado da soma: " + soma(10, 10));