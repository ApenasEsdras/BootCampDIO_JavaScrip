//procurar maior numero par
const { gets, print } = require('/PROGRAMACAO/AprendendoJavaScript/DIO/funcoes/atividades2/funcoes-auxiliares');

/**
 * 

let teste ='asdfasd';

let pessoa = {
    'nome' : 'nome da pessoa',
    'idade' : teste
}

for (const key in pessoa) {    
        const element = pessoa[key];
        console.log(element)        
}
 */
const NumPar = gets();// trazer os valores presentes no gets()
let MaiorNumPar = 0;//inicio do calculo.
for (let i = 0; i < NumPar; i++) {
    const leNumeros = gets();
    if (leNumeros > MaiorNumPar && (leNumeros % 2) == 0) {
        MaiorNumPar = leNumeros;
    }
}

print(MaiorNumPar);

