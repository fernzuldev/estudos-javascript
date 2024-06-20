let carro = {
    portas : 2,
    portaMalas : "200l",
    motor : "2.0"
}

let adicionais = {
    tetoSolar : true,
    ar : true
}

console.log(carro);

Object.assign(carro, adicionais);

console.log(carro);
