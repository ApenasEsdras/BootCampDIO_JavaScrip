// First Class Function
// Hight Order Function

function nome (){
    console.log("esdras");
}
nome()

//uso so apply

const pessoa={
    nome:  'esras',
    idade: 21
}
function grita(prefixo){
    console.log(prefixo, this.nome)
}
grita.apply(pessoa, ['olaaa'])
