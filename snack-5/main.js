//creo un array

let array1 = [];
let num = 0;

//chiedo 6 volte un numero all'utente
for(let i = 0; i < 6; i++){

    num = Number(prompt("Inserisci un numero"));

    //controllo se il numero è dispari
    if(num % 2 == 1){
        //se lo è lo aggiungo all'array
        array1.push(num);
    }
    
}

//stampo l'array
console.log(array1);