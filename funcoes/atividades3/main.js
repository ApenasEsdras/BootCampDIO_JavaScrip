//Salario a ser transferido para o funcionario
/*
receba o valor bruto do salario e o adicional dos beneficios.
o salario a ser transferido e calculado da seguinte forma:

Valor bruto - Percentual de imposto mediante faixa salarial + adicional de beneficios

Aliquota:
 
De R$ 0.00 a R$ 1100.00 = 5.00%
De R$ 1100.01 a R$ 2500.00 = 10.00%
Maior q R$ 2500.00 = 15.00%

ex: 
    ENTRADA:
        2000.00
        250
    SAIDA:
    2050.00

*/
const { gets, print } = require('./funcoes-auxiliares');

const ENTRADA = gets();
const BENEFICIOS = gets()

//DEFINIÇÃO DO PERCENTUAL DE 
function calculaPercentual(valor, Percentual){
    return   valor * (Percentual / 100)
}
//DEFINIÇÃO DO PERCENTUAL DE 
function calculaValorFinalComImposto(salario){
 if (salario >= 0 && salario <= 1000) {
    return 5;
 } else if (salario >= 1000.01 && salario <= 2500) {
    return 10
  } else {
    return 15;
  }
}
const Aliquota = calculaValorFinalComImposto(ENTRADA);
const valorImposto = calculaPercentual(ENTRADA, Aliquota);
const SalarioFinalBruto = ENTRADA - valorImposto + BENEFICIOS;

print(SalarioFinalBruto);

