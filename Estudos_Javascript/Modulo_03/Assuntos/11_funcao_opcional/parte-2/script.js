function repetirFrase(frase, n = 2){
    for(let i = 1; i <= n; i++){
        console.log(`${frase} + ${i}`);
    }
};

repetirFrase("testando", 5);
repetirFrase("Outro teste");


function potencia(base, expo = 2){
    return console.log(Math.pow(base, expo));
}

potencia(2);
potencia(2,2);
potencia(2,4);