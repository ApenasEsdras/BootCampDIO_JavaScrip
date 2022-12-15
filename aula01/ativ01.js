//cacular gasto de gasolina de um carra em viage


let capacidadeDoTanque = 200;//L


let distanciaAPercorrer = 300;//km
let ConsumoCarroPorKm = 12;//km
let valorCombustivel = 7;//R$

let gastoCombustivel = distanciaAPercorrer / ConsumoCarroPorKm;
let gastoMedio = gastoCombustivel * valorCombustivel;


console.log("sue gasto foi de: " + gastoMedio + " R$")