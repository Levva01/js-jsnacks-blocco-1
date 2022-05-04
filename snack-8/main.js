//creo l'array di numeri interi
let numInteri = [
    9,
    27,
    65,
    22,
    30,
    21
];

//creo una variabile per la somma
let somma = 0;

//faccio un ciclo che avra lunghezza dell array
for(i = 0; i < numInteri.length; i++){

    //se l'elemento dell'array di indice i è dispari
    if(numInteri[i] % 2 === 1){
        //allora lo aggiunga alla somma
        somma += numInteri[i];
    }
}

//stampo la somma
console.log(somma);