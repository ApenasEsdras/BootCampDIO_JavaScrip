//cacular gasto de gasolina de um carra em viage

let distanciaAPercorrer = 300;//km
let ConsumoCarroPorKm = 12;//km
let valorCombustivelGasolina = 7;//R$
let valorCombustivelEtanol = 5;//R$

let tipoCombusivel = 'Etanol';

if(tipoCombusivel === 'Gasolina'){
    let gastoCombustivel = (distanciaAPercorrer / ConsumoCarroPorKm) * valorCombustivelGasolina;
    console.log("sue gasto foi de: " + gastoCombustivel + " R$")
}else{
    let gastoCombustivel = (distanciaAPercorrer / ConsumoCarroPorKm) * valorCombustivelEtanol;
    console.log("sue gasto foi de: " + gastoCombustivel + " R$ ")
}

// // ===================================

// let distanciaAPercorrer = 300;//km
// let ConsumoCarroPorKm = 12;//km
// let valorCombustivel = 7;//R$

// let carro01 = "gasolina";
// let carro02 = "etanol";

// let gastoCombustivel = distanciaAPercorrer / ConsumoCarroPorKm;
// let gastoMedio = (gastoCombustivel * valorCombustivel) + " " + carro02;

// if(carro01){
//     console.log("sue gasto foi de: " + gastoMedio + " R$ ")
// }else{
//     console.log("sue gasto foi de: " + gastoMedio + " R$ ")
// }


