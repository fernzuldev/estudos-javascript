const cachorro = {
    raca: "Vira-Lata",
    setRaca: function(raca){
        this.raca = raca;
    },
    getRaca: function(){
        return "a raça é " + this.raca;
    },
    uivar: function(){
        console.log("Auuuuuuuuuuu");
    },
    rosnar: function(){
        console.log("Grrrrrrrrrr");
    }
};

console.log(cachorro.raca);

cachorro.setRaca("Pastor alemão");

console.log(cachorro.raca);

console.log(cachorro.getRaca());