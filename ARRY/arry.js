// atividade 01. Crie uma programa que dado um numero imprima a sua tabuada.
/* 
function tabuada(num2){
    for(var count = 1; count <= 10 ; count++)
     console.log(count," * ", num2 + " = " + (num2 * count));
  }
tabuada(8)
*/

//atividade 02. Crie um programa que seja capaz de percorrer uma lista de números impares e imprima cada numero pár encontrado.


let num = [2, 3, 4, 2, 546, 2, 3, 67, 1, 6]

for (let i = 0; i < num.length; i++) {
  const element = num[i];
  if ((element % 2) == 0) {
    console.log(element)
  };
}
////
const numerosPares = [];

    for (let i = 0; i < 10; i = i + 2) {
        numerosPares.push(i);
    }

    console.log(numerosPares);
///
const listaDeValores = [1, 2, 3, 4, 5];
const valor = listaDeValores[2];
console.log(valor);
///
const numerosPares = [];

for (let i = 0; i < 10; i++) {
    const numeroPar = i % 2 === 0;
    if (numeroPar) {
        numerosPares.push(i);
    }
}

console.log(numerosPares);
///
const numeros = [];

    for (let i = 0; i < 10; i++) {
        numeros.push(i);
    }

    console.log(numeros);

