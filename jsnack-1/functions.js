function rndNumb (min, max) {
    const rnd = Math.floor(Math.random() * (max - min + 1)) + min;
    return rnd;
}

function newArray(size){
    const array = new Array(size);
    for (let i = 0; i < size; i++) {
        array[i] = rndNumb(1, 100);
    }
    return array;
}