

const entradas = [9,3,20,6,2,67,1,0,6.2];
let i = 0;

function gets(){
    const valor = entradas[i];
    i++
    return valor;
}

function print(texto){
    console.log(texto);
}

module.exports = {gets, print};
