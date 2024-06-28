class Mamifero {
    constructor(patas){
        this.patas = patas;
    }
}

class Cachorro extends Mamifero {
    constructor(patas, raca, cor){
        super(patas, patas);
        this.raca = raca;
        this.cor = cor;
    }
    latir (){
        console.log("Auuu Auuu");
    }
}

let labrador = new Cachorro(4, "Labrador", "Preto");

console.log(labrador);
labrador.latir();