//creo i due array di lunghezza differente
let array1 = [
    1,
    2,
    3,
    4
];

let array2 = [
    1,
    2
];

// se il primo array è più grande
if(array1.length > array2.length){
    //faccio durare il ciclo la differenza tra il primo ed il secondo array
    for(let i = 0; i <= array1.length - array2.length; i++){
        //chiedo all'utente di inserire un numero
        let num = Number(prompt("Inserisci un numero"));
        //pusho il numero nell'array
        array2.push(num);
    }
    //altrimenti se il secondo array è più grande
} else if(array1.length < array2.length){
    //faccio durare il ciclo la differenza tra il secondo ed il primo array
    for(i = 0; i <= array2.length - array1.length; i++){
        //chiedo all'utente di inserire un numero
        let num = Number(prompt("Inserisci un numero"));
        //pusho il numero nell'array
        array1.push(num);
    }
}

//stampo i due array
console.log(array1);
console.log(array2);