//chiedo all'utente due parole

const word1 = prompt("Inserisci la prima parola");
const word2 = prompt("Inserisci la seconda parola");

//stampo la parola più lunga
if(word1.length > word2.length){
    alert(`${word2} , ${word1}`);
} else if(word2.length > word1.length){
    alert(`${word1} , ${word2}`);
} else{
    alert("Lunghezza parole uguale")
}