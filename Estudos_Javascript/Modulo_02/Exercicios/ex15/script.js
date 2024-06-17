for(let numPrimo = 1; numPrimo <= 100; numPrimo++){
    let divisoes = 0;
    for(let i = 1; i <= numPrimo; i++){
        if(numPrimo % i == 0){
            divisoes++;
        }
    }
    console.log(divisoes == 2 ? `${numPrimo} é primo` : `${numPrimo} não é primo!`)
}