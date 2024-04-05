"use strict"
// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100.
// Ogni volta che ne crei uno, stampalo a schermo.
const N = parseInt(prompt("Quanti array vuoi?"));
const array = [];
for (let i = 0; i < N; i++) {
    array[i] = newArray();
    for (let j = 0; j < 100; j++) {
        array[i][j] = rndNumb(1,100);
        
    }
    console.log(array[i]);
}

console.log(array);