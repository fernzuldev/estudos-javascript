class Carro {
    constructor(marca, cor, litrosDeGasolina){
        this.marca = marca;
        this.cor = cor;
        this.litrosDeGasolina = litrosDeGasolina;
    }

    dirigirCarro(){
        const consumoPorKm = 1 / 10;
        const distanciaPercorrida = this.litrosDeGasolina / consumoPorKm;

        console.log(`Você dirigiu ${distanciaPercorrida} km até a gasolina acabar, o tanque zerou, abasteça o carro!`);
        this.litrosDeGasolina = 0;
    }

    abastecerCarro(value){
        this.litrosDeGasolina += value;
        console.log(`Você abasteceu ${value} litros, Agora o tanque tem ${this.litrosDeGasolina} litros.`);
    }

    exibirDados(){
        console.log(`Modelo do seu carro é ${this.marca}, de cor ${this.cor}, com ${this.litrosDeGasolina} litros no tanque e ele faz 10 Kilometros por 1 litro de gasolina.`);
    }
}

let carro1 = new Carro ("BMW", "Preta", 10);

carro1.exibirDados();
carro1.dirigirCarro();
carro1.abastecerCarro(20);
carro1.abastecerCarro(15);
carro1.dirigirCarro();