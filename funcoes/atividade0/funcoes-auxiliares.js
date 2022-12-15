//importação de arquivo
/*
function gets() {
    return 10;
}

function print(texto){
    console.log(texto)
}

module.exports = {gets, print};
* */

// atividade
/*
uma sama contem 5 alunos  e cada aluno foi sorteada de 1 - 100.
faca uma programa que receba os 5 sorteados e mostre o maior numero sorteado

dados: 
    5
    50
    10
    98
    23

    saída:
    98
*/

const entradas = [5,50,10,98,23];
let i = 0;
function gets(){
    const valor = entradas[i];
    i++
    return valor;
}
/** 
// function gets(){
//     for (let i = 0; i < entradas.length; i++) {
//         const valor = entradas[i];
//         return valor;
//     }
// }
*/
function print(texto){
    console.log(texto);
}

module.exports = {gets, print};
