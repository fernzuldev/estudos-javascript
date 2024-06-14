let nome = "Matheus";

for (let i = 1; i <= 10; i ++){
    if(i == 3){
        nome = "Jão";
    }
    if(i == 5 && nome == "Jão"){
        console.log(`O nome é ${nome}, pode parar`);
        break;
    }
    console.log(i);
}

for(let x = 1; x <= 10; x++){
    if(x % 2 == 0){
        console.log("Caiu no continue...");
        continue;
    }
    console.log(x);
}