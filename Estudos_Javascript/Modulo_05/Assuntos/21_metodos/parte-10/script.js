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