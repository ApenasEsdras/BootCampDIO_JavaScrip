//estudo de Arry
/* 
const alunos = ['esdras','Maria', 'pedro'];//definição da arry
console.log(alunos);//chamada de tudo dentro do arry
console.log(alunos[2]);//chamda de pontual de um item dentro do arry
alunos.push('aquila')//colo ao final do arry 

alunos[4] ='marcos'//coloca no ponto que eu desejo
console.log(alunos[3])
 */
//+=================+ //
/* 
const aluno = [];//definição de arry vazil
aluno[0]= 'akin'

console.log(aluno)
 */
//+=================+ //
/*
const teste = ['1','2','3','4', '5'];

console.log(teste)
console.log(teste.pop())//retira o ultimo item da lista
console.log(teste)
*/
//+=================+ //
/* */
//procurar media
const notas = [];

notas.push(5)
notas.push(2)
notas.push(4)
notas.push(9)
notas.push(1)

let soma = 0;

for(let i = 0; i < notas.length; i++){
    const nota = notas[i];
    soma+= nota;
}

let media = soma / notas.length
console.log(soma)
console.log(media)







