class Dog {
    constructor(raca, cor){
        this.raca = raca;
        this.cor = cor;
    }
    get getRaca(){
        return "A raca é " + this.raca;
    }
    set setRaca(value){
        this.raca = value;
    }
}

let labrador = new Dog("Labrador", "Branco");

console.log(labrador.getRaca);
labrador.setRaca = "Labradorr";
console.log(labrador.getRaca);