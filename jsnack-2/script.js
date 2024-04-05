"use strict"
// Esercizio 2
// Dare la possibilità di inserire due parole.
// Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
// Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.
let parola1;
let parola2;
do{
    parola1 = prompt("Inserisci una parola");
    parola2 = prompt("Inserisci un'altra parola");



}while(parola1 =="" || parola1 ==null || parola2 =="" || parola2==null);

compare2Words(parola1, parola2);
