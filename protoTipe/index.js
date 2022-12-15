
const pessoa = {
 genero: 'Masculino' ,
 altura: 175
}

const esdras = {
    nome: 'esdras',
    idade: 21,
    __proto__:pessoa
}

console.log(esdras.genero,esdras.altura)