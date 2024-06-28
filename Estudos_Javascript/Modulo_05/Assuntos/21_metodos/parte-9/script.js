class Dog {
    constructor(raca,cor){
        this.raca = raca;
        this.cor = cor;
    }
    latir(){
        console.log("Auuuu Auuuu");
    }
}

let labrador = new Dog ("Labrador", "Preto esverdeado");

console.log(labrador);
labrador.latir();