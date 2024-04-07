function rimuoviDallaCoda(array){
    const arrayB = [];
    for (let i = 0; i < array.length - 1; i++) {
        arrayB[i] = array[i];
        
    }
    return arrayB;
}