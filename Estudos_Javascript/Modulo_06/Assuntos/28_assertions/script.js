let arr1 = [1,2,3,4,5];
let arr2 = [];

function iterrarArray(arr){
    if(arr.length == 0){
        throw new Error("O array precisa ter ao menos 1 elemento");
    } else {
        for(let i = 0;i < arr.length; i++){
            console.log(i);
        }
    }
}

iterrarArray(arr1);
iterrarArray(arr2);