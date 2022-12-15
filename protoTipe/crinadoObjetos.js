//literais

const pessoa= {
    genero: 'masculino'
}

const esdras ={
    nome:'esdras',
    __proto__: pessoa
}

console.log(esdras);

const renan = {
    nome: 'Renan'
}

renan.__proto__ = {
    idade: 30
}

console.log(renan.idade)

//

function Pessoa(nome) {
    this.nome = nome
}

Pessoa.prototype.falarSeuNome = function () {
    console.log(`Meu nome é ${this.nome}`)
}

const renan = new Pessoa('renan')
renan.falarSeuNome()
//

const pessoa = {
    idade: 18
}

const renan = {
    nome: 'Renan',
    idade: 30,
    __proto__: pessoa
}

console.log(renan.idade)

