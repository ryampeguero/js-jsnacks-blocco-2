function inserisciInTesta(array, elem){
    const arrayB = [];
    for (let i = 0; i < array.length; i++) {
        if(i == 0){
            arrayB[i] = elem;
        }else{
            arrayB.push(array[i]);
        }
    }
    return arrayB;
}