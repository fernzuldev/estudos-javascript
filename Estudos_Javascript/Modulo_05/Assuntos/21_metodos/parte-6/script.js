function criarDog(raca, cor){
    let cachorro = Object.create({});
    cachorro.raca = raca;
    cachorro.cor = cor;
    return cachorro;
}

let doberman = criarDog("Doberman", "Preto");

console.log(doberman);