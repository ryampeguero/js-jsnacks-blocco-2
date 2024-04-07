function rimuoviDallaTesta(array){
    const arrayB = [];
    for (let i = 0; i < array.length; i++) {
        if(i > 0){
            arrayB.push(array[i]);
        }
    }
    return arrayB;
}