/*
    1. Crie uma classe para representar carros.
    os carros possuem uma marca, uma cor e uma gosto medio de combustivel por Km/h.
    Crie um metodo que dado a quantidade de quilometros e o preco do combustivel nos de o valor gasto em reais para este percurso.
    
*/

class Carro {
    Cor;
    Marca;
    GastoM;
   
    constructor(Cor,Marca,GastoM){
        this.Cor = Cor;
        this.Marca = Marca;
        this.GastoM = GastoM;
      
    }
    //porcess(processo semelhante a uma funcao)
    valores (distanciaAPercorrer, valorCombustivel){
        return  distanciaAPercorrer * valorCombustivel * this.GastoM
    }
}


const carro1 = new Carro('azul','Touro',1/10);//cria novo obj e insere volares
console.log(carro1)//chama o objeto criado e seu valores
let resultado = carro1.valores(70,5)//atribui valores dentro do porcess (funcao)

console.log(`Seu gasto foi de: ${resultado} R$`);//chamada do resultado.
