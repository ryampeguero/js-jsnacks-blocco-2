"use strict"
function compare2Words(word1, word2){
    let result = "";
    if(word1.length === word2.length){
        console.log(word1, " ", word2);
    }else if(word1.length > word2.length){
        console.log(word1);
    }else{
        console.log(word2)
    }
}   