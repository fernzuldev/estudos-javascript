function CriarDog(raca, cor){
    this.raca = raca;
    this.cor = cor;
}

CriarDog.prototype.latir = function(){
    console.log("Auu Auu")
}

let husky = new CriarDog("Husky", "Preto-Azul");

console.log(husky);
husky.latir();