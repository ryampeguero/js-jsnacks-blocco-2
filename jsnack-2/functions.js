"use strict"
function compare2Words(word1, word2){
    let message = "";
    if(word1.length === word2.length){
        message = word1 + " "+ word2;
    }else if(word1.length > word2.length){
        message = word1;
    }else{
        message = word2;
    }
    return message;
}   