//promisses => promessa de receber algo ao fim de um ação

// resolve()//caso der certo.
// reject()// caso der errado
const promessaDeUmNumero = new Promise((reslve, reject) => {
    setTimeout(() => {
        const numero = parseInt(Math.random() * 100)
        reslve(numero)
    }, 100)//depois de 1S sera gerado um numero randomico === assincrono
})
console.log('www');
promessaDeUmNumero
    .then((value) => {
        console.log(value)
    })
    .catch((erro) => {
        console.erro(erro)
    })
    .finally(() => {
        console.log('final')
    })

