function sayMyNome(name = ''){
    if(name === ''){
        throw 'Nome é o brigatorio'
    }

    console.log(name)
}

try {
    sayMyNome('esdras')
} catch (e) {
        console.log(e)
}
console.log('apos a funcao de erro');