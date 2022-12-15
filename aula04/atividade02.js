/*
 02. crie uma classe para representar Pessoas.
    para cada pessoa teremos os atricutos: Nome; Pesso; Altura;
    as pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
    Instacie uma pessoa chamada José que tem 70kg de peso e 1.75 de altura e peca ao Jose para dizer o calor de seu IMC. 
*/
/*  
class Pessoa{
    Nome;
    // Peso; 
    // Altura;
    constructor(Nome,Peso,Altura){
        this.Nome = Nome;
        // this.Peso = Peso;
        // this.Altura = Altura;
    }
    IMC (Peso, altura){
        return Peso / (altura * altura)
    }
}

const Jose =  new Pessoa('José');
console.log(Jose)

console.log(Jose.IMC(70,1.75))
*/

class Pessoa{
    Nome;
    Peso; 
    Altura;
    constructor(Nome,Peso,Altura){
        this.Nome = Nome;
        this.Peso = Peso;
        this.Altura = Altura;
    }
    IMC (){
        return this.Peso / (this.Altura * this.Altura)
    }
}

const Jose =  new Pessoa('José', 70, 1.75);//para trabalhar com valores informado pelo usuario deve-se usar o this. sem definir parametos no process
console.log(Jose.Nome)

console.log(` ${Jose.Nome}, seu IMC informado é: ${Jose.IMC()}`)





