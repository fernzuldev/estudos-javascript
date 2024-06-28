let dog = {
    patas: 4,
    raca: "Vira-Lata",
    latir: function(){
        console.log("Auu Auu")
    }
}

let labrador = Object.create(dog);

labrador.raca = "Labrador";
labrador.latir();
console.log(labrador.raca);

console.log(dog.raca);

let pastorAlemao = Object.create(dog);

pastorAlemao.raca = "Pastor Alemão";

console.log(pastorAlemao.raca)