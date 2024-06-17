let idade = 18;
let temCnh = true;

if(idade >= 18){
    if(temCnh){
        console.log("Pode dirigir")
    }
    else {
        console.log("Não pode dirigir")
    }
} else if (idade < 18){
    if(!temCnh){
        console.log("Não pode dirigir")
    } else {
        console.log("Aqui é o brasil, nao o EUA")
    }
}