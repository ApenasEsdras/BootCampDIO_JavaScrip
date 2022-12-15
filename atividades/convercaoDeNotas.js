// let nota = 100

function conceito(nota){

    if(nota > 90){
        console.log('seu conceito é: A');
    }else if(nota >= 80 && nota <= 89){
        console.log('seu conceito é: B');
    }else if(nota >= 70 && nota <= 79){
        console.log('seu conceito é: C');
    }else if(nota >= 60 && nota <= 69){
        console.log('seu conceito é: D');
    }else{
        console.log('seu conceito é: F');
    }
}
conceito(70);
