function stampa(array){
    let message = "";
    for (let i = 0; i < array.length; i++) {
        if(i != array.length-1){
            message +=`${array[i]}, `; 
        }else{
            message += array[i];
        }
        
    }
    return message;
}