// chamada 
/* 
const funcoes  = require('./funcoes-auxiliares');

console.log(funcoes.gets());
console.log(funcoes.print());
*/

const {gets, print} = require('./funcoes-auxiliares');

// Metodo completo (Complicado)
/*  
const numeroSorteados = [];

for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    numeroSorteados.push(numeroSorteado);  
}

let maiorValor = 0;

for (let i = 0; i < numeroSorteados.length; i++) {
    const numeroSorteado = numeroSorteados[i];
    if(numeroSorteado > maiorValor){
        maiorValor = numeroSorteado;    
    }   
}
*/
const quantidadeDeAlunos = gets();// trazer os valores presentes no gets()
let maiorValorEncontrado = 0;//inicio do calculo.
for (let i = 0; i < quantidadeDeAlunos; i++) {
    const numeroSorteado = gets();
    if (numeroSorteado > maiorValorEncontrado) {
        maiorValorEncontrado = numeroSorteado;
    }
}

print(maiorValorEncontrado);