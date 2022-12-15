const fs = require('fs')

const promesa = fs.promises.readFile('tarefas.csv')

promesa.then((arquivo) => {
    console.log(arquivo.toString('utf-8'));
})
 