// const pessoa ={
//     nome: "esdras soares",
//     idade: 25,

//     descricao: function(){
//         console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
//     }

// };

// pessoa.descricao() 

//froma dinamica
// const pessoa ={
//     nome: 'esdras soares',
//     idade: 25,

//     descricao: function(){
//         console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
//     }

// };
// const atributo = 'idade'
// console.log(pessoa[atributo])

/* definiçaõ de classes */

class Pessoa {
    nome;
    idade;
    //constructor === oq acontece ao se estanciar algo
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }
    descrever(){
       console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

//forma mais usada 
// const esdras = new Pessoa('Esdras', 21);
// const Maria = new Pessoa('Maria', 24);
// console.log(esdras)
/* 
const esdras = new Pessoa();
esdras.nome = 'esdras'
esdras.idade = 21


const Maria = new Pessoa();
Maria.nome = 'Maria'
Maria.idade = 22

esdras.descrever();
Maria.descrever();
*/

// Atividada

function compararPessoa(p1,p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velha que ${p2.nome}`)
    }else if(p1.idade < p2.idade){
        console.log(`${p2.nome} é mais velha que ${p1.nome}`)
    }else{
        console.log(`${p1.nome} e ${p2.nome} tem a msm idade` )
    }
}

const esdras = new Pessoa('esdras', 21);
const ana = new Pessoa('ana', 21);
compararPessoa(esdras,ana)



