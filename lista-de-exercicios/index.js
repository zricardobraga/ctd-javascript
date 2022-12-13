/*
// 1. Dado o tamanho da base e da altura de um retângulo, calcular a sua área e o seu perímetro.

function calculaArea(b = 0, h = 0) {
    var area = b*h
    return area 
}

function calculaPerimetro(b = 0, h = 0) {
    var perimetro = (b*2) + (h*2);
    return perimetro;  
}

console.log("Área (retângulo): " + calculaArea(10, 20));
console.log("Perímetro (retângulo): " + calculaPerimetro(10, 20));


// 2. Dado o tamanho do lado de um quadrado, calcular a área e o perímetro do mesmo.

function calculaArea(b = 0, h = 0) {
    if (h != b) { 
        return "Não é um quadrado!";
    }
        var area = b*h
        return area 
}

function calculaPerimetro(b = 0, h = 0) {
    if (h != b) {
        return "Não é um quadrado!";
    }
        var perimetro = (b*2) + (h*2);
        return perimetro;
}

console.log("Área (quadrado): " + calculaArea(10, 10));
console.log("Perímetro (quadrado): " + calculaPerimetro(10, 10));



// 3. Dado o tamanho do raio de uma circunferência, calcular a área e o perímetro da mesma.

function calculaArea(raio = 0) {
    var area = 3.14 * Math.pow(raio, 2);
    return area
}

function calculaPerimetro(raio = 0) {
    var perimetro = (2*3.14)*raio;
    return perimetro;
}

console.log("Área (circulo): " + calculaArea(10));
console.log("Perímetro (circulo): " + calculaPerimetro(10));

*/


function encontrarGanhador(a, b) {
    for (let index = 0; index < a.length; index++) {
        for (let index = 0; index < b.ength; index++) {
            if (a > b) {
                var pontosA = 0;
                pontosA += a[index];
            }
            var pontosb = 0;
            pontosb += b[index];
        }
    }
}


const alicia = [23, 69, 32];
const bob = [12, 67, 43];


var teste = encontrarGanhador(alicia, bob);

console.log(teste);