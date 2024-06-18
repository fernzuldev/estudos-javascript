function mult3Nums(a,b,c){
    return a * b * c;
}

console.log(mult3Nums(2,3,4));

const mult = mult3Nums(4,5,6);

console.log(`Resultado ${mult}`);

function podeDirigir(idade, cnh){
    if(idade >= 18 && cnh == true){
        console.log("Pode dirigir");
    } else {
        console.log("Não pode dirigir!");
    }
}

console.log(podeDirigir(18,true));
console.log(podeDirigir(19,false));
console.log(podeDirigir(18,0));
console.log(podeDirigir(18,1));
console.log(podeDirigir(17,false));