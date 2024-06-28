class Dog {
    constructor (raca, cor){
        this.raca = raca;
        this.cor = cor;
    }
    latir(){
        console.log("Auuu Auuu");
    }
}

Dog.prototype.raca = "Vira Lata";

let patas = Symbol();

Dog.prototype[patas] = 4;

let labrador = new Dog("Labrador", "Preto Vermelhado");

labrador.latir();

console.log(Dog.prototype.raca);
console.log(labrador.raca);

console.log(Dog.prototype[patas]);

console.log(labrador[patas]);