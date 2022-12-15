
let familia = {
  receita :[1540, 7812, 00],
  despesas:[500,1000,650]
}
let soma = 0

function calcularReceita(){
for (let i = 0; i < familia.receita.length; i++) {
    soma = familia.receita[i]; 
}
    console.log(soma);
}
function calcularDespesas(){}

calcularReceita()
