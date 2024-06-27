const serVivo = {
    bracos: 2,
}

const humano = Object.create(serVivo);

humano.pernas = 2;

console.log(humano.bracos);

console.log(humano.pernas);

console.log(serVivo.bracos);

console.log(serVivo.pernas);

console.log(humano.hasOwnProperty('maos'));

console.log(Object.getPrototypeOf(humano) === serVivo);