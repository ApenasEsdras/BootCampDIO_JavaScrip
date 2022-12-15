//declaração mutipla

let comida, boa
comida = 'fengo'
boa = false

console.log(comida, boa);

//templed string??

//declaração de object

const person = {
    name: 'esdras',
    age: 21,
    weight: 82,
    isAdmin: true
}

//chamada do objetc: semelhante ao bootcamp
console.log(person.name)

//object em arry
const frutas = [
    'banana', 
    'abacaxi',
    'UVA',
    {
        id:'fruta',
        nome: 'acerola'
    }
]

console.log(frutas[3].nome)


// function hoisting ( algo como auto organização dos comandos)

sayMyName()

function sayMyName (){
    console.log('esdras')
}
 
// ====================== //

// arrow function

const sayMyName = () => {
    console.log('esdras')
}
sayMyName()

// function construtora

function Person(parametro ){
//valores a serem executados
}
const esdras = new Person()