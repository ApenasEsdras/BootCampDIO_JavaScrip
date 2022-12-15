let autura = 175;
let peso = 82;

let IMC = ( autura * autura) / peso

if(IMC < 18.5 ){
 console.log("Abaixo do peso")
} else if(IMC >= 18.5 && IMC <= 25){
    console.log("Peso normal")
}else{
    console.log("APROVADO")
}
