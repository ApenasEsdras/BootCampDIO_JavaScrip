//ATIVIDADE 01:
/*
Faca um programa q receba a media de um aluno.
caso a media seja < 5 Imprima "Reprovado".
Caso a media seja >= 5 e < 7 imprima 'Recuperacao'.
Caso a media seja >= 7 imprima 'Aprovado'.

*/

const { gets, print } = require('./funcoes-auxiliares');

const notaAluno = gets();
let media = notaAluno
if (media < 5 ) {
    console.log("REPROVADO");
}else if(media >= 5 && media <7 ){
    console.log("RECUPERAÇÃO");
}else {
    
    console.log("APROVADO");
}
print(`Sua Media é ${media} e vc foi` );