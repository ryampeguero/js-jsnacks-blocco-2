"use strict"
// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100.
// Ogni volta che ne crei uno, stampalo a schermo.
const N = parseInt(prompt("Quanti array vuoi?"));
const arrayContainer = [];
const arrayList = document.createElement("ul");


for (let i = 0; i < N; i++) {
    arrayContainer[i] = newArray(100);
    arrayList.innerHTML += `<li>${i, arrayContainer[i]}</li>`; 
    console.log(arrayContainer[i]);
}

document.querySelector("body").append(arrayList);
console.log(arrayContainer);